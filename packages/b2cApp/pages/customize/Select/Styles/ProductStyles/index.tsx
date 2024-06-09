'use client';
import { defaultButtonColor, defaultContrastButtonThread, defaultFebric, defaultFrontPacket } from 'config/default';
import { EAccent, EAccentButtonColor, EAccentChildrens, EAccentFrontPacket, EDefault, EStyles } from 'config/models';
import useOnClickOutside from 'hooks/useOnClickOutSide';
import { ProductStylesInterface } from 'interface/IProductStyle.interface';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAccentGlobal, TBase, UpdateAccentActionType, accentProperties, updateAccent, updateAccentType } from 'slices/accentSlice';
import { RowType, updateModel } from 'slices/modelSlice';
import styles from '../styles.module.scss';
import Items from './Items';
import { RootState } from 'store';


export default function ProductStyles({ label, childrens, code, setShowAccentFebricModel, type, setActiveAccent, collarAccent, cuffAccent }: ProductStylesInterface) {
    const dispatch = useDispatch();
    const {originalImageUrl} = useSelector((state: RootState) => state.defaultFebric);
    
    const ref = useRef(null);
    
    const [showColorPlateOne, setShowColorPlateOne] = useState(false);

    useOnClickOutside(ref, () => {
        setShowColorPlateOne(false);
    });

    const dispatchSelectedModelConfig = ({ modelURL, ...rest }: RowType) => {
        dispatch(updateModel({
            payload:
            {
                modelURL,
                ...rest
            },
            key: code as any
        }));

        if (cuffAccent && code !== EStyles.Collar) {
            const payload = {
                ...cuffAccent,
                febric: `${cuffAccent?.febric}?timestamp=${Date.now()}`
            } as TBase;

            dispatch(updateAccent({ key: code as keyof IAccentGlobal, payload }))
        }

        if (collarAccent && code !== EStyles.Cuff) {
            const payload = { ...collarAccent, febric: `${collarAccent?.febric}?timestamp=${Date.now()}` } as TBase;

           
            dispatch(updateAccent({ key: code as keyof IAccentGlobal, payload }))
        }
    }

    const buttonContrastSwitching = ({childCode}: {childCode: 
                                                    EAccentChildrens | 
                                                    EAccentButtonColor | 
                                                    EAccentFrontPacket | EDefault}) => {

       
        if(childCode === EAccentButtonColor.Default) {
            dispatch(updateAccent({key: EAccent.ButtonColors, payload: defaultButtonColor}));
        }

        if(childCode === EAccentChildrens.Default) {
            dispatch(updateAccent({key: EAccent.ButtonWholeStitch, payload: defaultContrastButtonThread as any})); 
        }
        
        if (childCode === EAccentChildrens.All ||
            childCode === EAccentChildrens.CuffOnly ||
            childCode === EAccentButtonColor.All
            ) {
            setShowColorPlateOne(true);
            return;
        } 
    }
    const dispatchAccentType = async({ key, payload, childCode }: UpdateAccentActionType) => {

        if(childCode === EAccentFrontPacket.Default) {
            dispatch(updateAccent({key: EAccent.FrontPlacket, payload: defaultFrontPacket}))
            return;
        }
         
         if(childCode) buttonContrastSwitching({childCode});

         if([EAccent.ButtonWholeStitch, EAccent.ButtonColors].includes(code as any)) {
            return;
         }

        if (setActiveAccent) {
            setActiveAccent(code);
        }


        if (childCode === EDefault.Default) {

            const { collar, cuff } = accentProperties;
            // You have to take the default febric from the store
            // textureFromAllAccent, febric props add them to both cuff or collar then dispatch
            
            const defaltProps = {febric: originalImageUrl ?? defaultFebric, textureFromAllAccent: originalImageUrl};

            dispatch(updateAccent({ key, payload: code === EStyles.Cuff ? {...cuff, ...defaltProps} : {...collar, ...defaltProps} }));

            return;
        };


        setShowAccentFebricModel(true);
        dispatch(updateAccentType({ key, payload }));
    }

    const onColorClickHandler = (val:any) => {
        const {code} = val;

        if(code === EAccentChildrens.All) {
            dispatch(updateAccent({key: EAccent.ButtonWholeStitch, payload: val}));
        }

        if(code === EAccentButtonColor.All) {
            dispatch(updateAccent({key: EAccent.ButtonColors, payload: val}));
        }
       
    }

    return (
        <div className={styles.row}>
            <div className={styles.title}>{label}</div>
            <div className={styles.items}>
                {childrens && childrens.map((children: any, i: number) => <Items
                    key={`items-${i}`}
                    iconClass={children.iconClass}
                    code={children.code}
                    id={`styles-children-${code}-${i}`}
                    title={children.label}
                    
                    name={code}
                    onClickHanlder={() => type ===
                        'style' ?
                        dispatchSelectedModelConfig
                            ({
                                ...children,
                                modelURL: `${children.modelURL}?timestamp=${Date.now()}`,
                                id: children.id

                            }) :
                        dispatchAccentType({ key: code as keyof IAccentGlobal, payload: children, childCode: children.code })
                    }
                    showColorPlateOne={showColorPlateOne}
                    ref={ref}
                    onColorClickHandler={onColorClickHandler}
                    

                />)}
                { }
            </div>
        </div>
    )
}
