/**
 * Remember to update model febricSeason to directly season otherwise it would not work
 * remove the validation from the server side as well for febricSeason because in the backend
 * model as been renamed from febricSeason to season
 * 
*/
import { Message } from '@pasal/cio-component-library';
import { firstLetterUpperCase } from '@pasal/common-functions';
import axios from 'axios';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateFebric as updateFebricAction } from '../../../../../reducers/productSlice';
import { APIS } from '../../../../config/apis';
import { svgCDNAssets } from '../../../../config/assets';
import { febricTypes } from '../../../../config/febric';
import { validBoolean, validDigit, validString, wordRegrex } from '../../../../config/regrex';
import { RootState } from '../../../../store';
import { forStepType, formStepEnum, formStepType } from '../../../../types&Enums/febric';
import FormTemplate from '../../../common/FormTemplate/FormTemplate';
import StepFive from './Steps/Five';
import StepOne from './Steps/One';
import StepSeven from './Steps/Seven';
import StepSix from './Steps/Six';
import StepThree from './Steps/Three';
import StepTwo from './Steps/Two';
import { CompositionInterface } from './Steps/steps.interface';
import { handleMediaChange } from '../../../../functions/handleMediaChange';
import { request } from '../../../../utils/request';


type Props = {}

const febricInitalState = { title: '', warmth: '', characters: [] };

const steps: { [key in forStepType]: any } = {
    one: [
        {
            name: 'title',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'price',
            regrex: validDigit,
            errorMessage: '',
            type: 'number'
        },
        {
            name: 'deliveryTime',
            regrex: validDigit,
            errorMessage: '',
            type: 'number'
        },
        {
            name: 'excellence',
            regrex: validDigit,
            errorMessage: '',
            type: 'number'
        },
        {
            name: 'warmth',
            regrex: validString,
            errorMessage: '',
            type: 'select'
        },
        {
            name: 'type',
            regrex: validString,
            errorMessage: '',
            type: 'select'
        }

    ],
    two: [
        {
            name: 'weight',
            regrex: validDigit,
            errorMessage: '',
            type: 'number '
        },
        {
            name: 'febricSeasons',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'febricTypes',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'threadTypes',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'brightness',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'superShiny',
            regrex: validBoolean,
            errorMessage: '',
            type: 'text '
        }
    ],
    three: [
        {
            name: 'threadCounts',
            regrex: wordRegrex,
            errorMessage: '',
            type: 'select '
        },
        {
            name: 'opacity',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'waterproof',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'threadStyle',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'tone',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        },
        {
            name: 'stretchy',
            regrex: validString,
            errorMessage: '',
            type: 'text '
        }
    ],
    four: [],
    five: [],
    six: [],
    seven: [],
    eight: []
}



export default function AddFebric({ }: Props) {
    // Check in store in there is febric is to update
    const  {product: {febrics, update}} = useSelector((state: RootState) => state);

    // If update is not null then filter the febric from the store and get it
    const updateFebric = febrics.filter((febric) => febric?.id === update);

  

    const [step, setStep] = useState<formStepType>(formStepEnum.one);
    const [errors, setErrors] = useState<any>({ compositions: null });
    const [febric, setFebric] = useState<any>(updateFebric.length > 0 ? updateFebric[0] :febricInitalState);
    const [moveToNextStep, setMoveToNextStep] = useState(false);
   
    const [febricImage, setFebricImage] = useState<File | null>(null);
    const [febricImageError, setFebricImageError] = useState<null | string>(null);
    const [uploadingFebric, setUploadingFebric] = useState<boolean>(false);

    // Will store data for febric composition such as cotton, polyster etc 
    const [compositions, setComposition] = useState<CompositionInterface[]>(updateFebric.length > 0 ? updateFebric[0].compositions :[]);

    const [availableComposition, setAvailableComposition] = useState<CompositionInterface[]>(febricTypes);

    const history = useHistory();
    const dispatch = useDispatch();

    const nextStepHandler = (step: formStepEnum) => {
        setErrors({});

        const validation = steps[step];

        const catchError: any = {};
        validation.map((field: any, i: number) => {
            if ([undefined, ''].indexOf(febric[field.name]) !== -1 || !field.regrex.test(febric[field.name])) {
                const { name } = field;
                catchError[name] = ` ${firstLetterUpperCase(name)} is required `;
            } 
        });
        setErrors(catchError);
        setMoveToNextStep(true);
    }

    const onChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setFebric({ ...febric, [name]: value });
    }

    useEffect(() => {
        if (Object.entries(errors).length === 0 && moveToNextStep) {
            const getTheIndexOfStep = Object.keys(formStepEnum).indexOf(step);
            setStep(Object.values(formStepEnum)[getTheIndexOfStep + 1]);
            setMoveToNextStep(false);
        }
    }, [moveToNextStep, step, errors]);

    const nextStepAfterMediaUpload = async () => {
     
        if(updateFebric.length > 0 && !febricImage && !febricImageError) {
            setStep(formStepEnum.five);
            return;
        }

        if(updateFebric.length > 0 && !febricImage && febricImageError) {
            return;
        }
        if (!febricImage) {
            setFebricImageError('Please select a febric image');
            
        }

        if (!febricImageError && febricImage) {
            // Process the requst
            setFebricImageError(null);
            setUploadingFebric(true)
            // Send the requst to upload the file 
            const formData = new FormData();
            formData.append('image', febricImage);

            try {
                const uploadFebric = await axios.post(APIS.product.upload, formData, {
                    headers: {

                        'Content-Type': 'multipart/form-data',

                    }
                })

                const { originalImageUrl, thumbnailImageUrl } = uploadFebric.data;
                setFebric({ ...febric, originalImageUrl, thumbnailImageUrl });
                setFebricImage(null);
                setStep(formStepEnum.five);
            } catch (err: any) {
                const { errors } = err.response.data;
                setFebricImageError(errors[0].message);
                console.error('Could not upload febric image', err);
            }
            setUploadingFebric(false)

        }

    }

    const handleImageChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        handleMediaChange(event, setFebricImageError, setFebricImage)
    };



    const compositionNextStepHandler = useCallback(() => {
        setErrors({});
        if (compositions.length < 1) {
            setErrors({ ...errors, compositions: 'Please select compositions' });
            return;
        }

        const sumCombinations = compositions.reduce((accomulator, current) => accomulator + (Number(current?.persantage) ?? 0), 0);
        if (sumCombinations < 100) {
            setErrors({ ...errors, compositions: 'Sum of all combination should be 100%' });
            return;
        }

        setFebric({ ...febric, compositions });
        setErrors({});
        setStep(formStepEnum.six);

    }, [compositions, errors]);


    const characterOnChangeHalder = (e: any) => {
        const { name, checked } = e.target;
        if (checked) {
            const { characters } = febric;
            characters.push(name)
            setFebric({ ...febric, characters });
        } else {
            const characters = febric.characters.filter((item: string) => item !== name);
            setFebric({ ...febric, characters });
        }
    }

    const submitFebricToServerHandler = async () => {
        try {
                const {id} = updateFebric[0] || {};
                await request({
                    url: updateFebric.length > 0 ? `${APIS.product.new}/${id}` : APIS.product.new,
                    body: { 
                            ...febric, 
                            stretchyText: 'Stretchy fabric',
                            type: 'shirt'
                        },
                    method: updateFebric.length > 0 ? 'patch' : 'post'
                });    
            setStep(formStepEnum.seven);
            setFebric(febricInitalState);

            if(updateFebric.length > 0) {
                dispatch(updateFebricAction(null));
            }
        
        } catch (err) {
            console.error('Could not submit the form', err);
        }

    }

    const redirectToFebric = () => {
        history.push('/products/febric')
    }

    const backStageHandler = () => {
        const getTheIndexOfStep = Object.keys(formStepEnum).indexOf(step);
        setStep(Object.values(formStepEnum)[getTheIndexOfStep - 1]);
        setMoveToNextStep(false);
    }


    return (
        <FormTemplate
            step={step}
            setStep={setStep}
            nextStepHandler={step === formStepEnum.four ? nextStepAfterMediaUpload :
                step === formStepEnum.five ? compositionNextStepHandler :
                    step === formStepEnum.six ? submitFebricToServerHandler :
                        nextStepHandler
            }
            lastStep={step === formStepEnum.seven}
            loading={uploadingFebric}
            // formStepEnum.one, 
            backButton={[formStepEnum.one, formStepEnum.seven].indexOf(step) == -1}
            backButtonEventHanlder={backStageHandler}
            
            >
            {step === formStepEnum.one && <StepOne onChangeHandler={onChangeHandler} febric={febric} errors={errors} setErrors={setErrors} />}
            {step === formStepEnum.two && <StepTwo onChangeHandler={onChangeHandler} febric={febric} errors={errors} setErrors={setErrors} />}
            {step === formStepEnum.three && <StepThree onChangeHandler={onChangeHandler} febric={febric} errors={errors} setErrors={setErrors} />}
            {step === formStepEnum.four && <StepFive onChangeHandler={handleImageChange} errors={febricImageError} />}
            {step === formStepEnum.five && <StepSix
                compositions={compositions}
                setComposition={setComposition}
                availableComposition={availableComposition}
                setAvailableComposition={setAvailableComposition}
                errors={errors}
            />}
            {step === formStepEnum.six && <StepSeven
                onChangeHandler={characterOnChangeHalder}
                selectedCharacters={febric.characters}
            />}
            {step === formStepEnum.seven && <><Message 
                title={'Febric added sucessfully'} 
                buttonText={'List Febric'} 
                buttonVariant={'primary'} 
                icon={svgCDNAssets.successCheck} 
                btnOnClickEvent={redirectToFebric}
                redirectLink={''}
                />
                </>}
            {/* {step === formStepEnum.eight && <Message title={'Febric added sucessfully'} buttonText={'List Febric'} buttonVariant={'primary'} icon={svgCDNAssets.successCheck} redirectLink='/products/list' />} */}

        </FormTemplate>


    )
}