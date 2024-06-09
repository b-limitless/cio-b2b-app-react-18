

import { Button } from 'components/Button';
import Checkbox from 'components/Checkbox';
import Header from 'components/Header/Header';
import ErrorText from 'components/Help/ErrorText';
import Input from 'components/Input';
import InputAdromentSec from 'components/Input/InputAdromentSec';
import { APIS } from 'config/apis';
import { camelCaseToNormal } from 'functions/camelCaseToNormal';
import { onChangeHandler } from 'functions/onChangeHandler';
import { onSubmitHandler } from 'functions/onSubmitHandler';
import { FormInterface, FormState } from 'interface/IAuth.interface';
import { userModel } from 'model/auth';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import FormTemplate from 'pages/order/template/form';
import React, { useEffect, useReducer } from 'react';
import styles from 'style-module/shipping.module.scss';
import { request } from 'utils/request';

interface IMain {
    userId: string | string[] | null;
}

const initialFormErrorState = {
    email: null,
    password: null,
    confirmPassword: null,
    agreement: null,

}
const initialState: FormState = {
    submitting: false,
    form: {
        email: '',
        password: '',
        confirmPassword: '',
        agreement: false

    },
    formHasError: true,
    formError: {
        ...initialFormErrorState
    },
    submissionError: null,
    formSubmitted: false,
    success: null
}

function authReducer(state: FormState, action: any): FormState {
    switch (action.type) {
        case 'REGISTERING_USER':
            return { ...state, submitting: true };
        case 'USER_REGISTRATION_ERROR':
            return { ...state, submissionError: action.payload };
        case 'USER_REGISTRATION_SUCCESS':
            return { ...initialState, success: true };
        case 'UPDATE_FORM': {
            const { name, value } = action.payload;
            return {
                ...state,
                form: {
                    ...state.form,
                    [name]: value
                }
            }
        }
        case 'FORM_ERROR': {
            const { name, value, formHasError } = action.payload;
            return {
                ...state,
                formHasError,
                formError: {
                    ...state.formError,
                    [name]: value
                }
            }
        }
        case 'RESET_FORM_ERROR': {
            return {
                ...state,
                formError: {
                    ...initialFormErrorState
                }
            }
        }
        case 'FORM_SUBMITTED': {
            return {
                ...state,
                formSubmitted: action.payload
            }
        }
        case 'SUBMITTING': {
            return {
                ...state,
                submitting: action.payload
            }
        }
        default:
            return state;
    }
}


function Main({ userId }: IMain) {
    const router = useRouter();

    const [{ submitting,
        form,
        submissionError,
        success,
        formError,
        formSubmitted,
        formHasError },
        dispatch] = useReducer(authReducer, initialState);

    

    const onMouseLeaveEventHandler = (name: keyof FormInterface, value: string) => {
        if (!userModel[name]?.test(value)) {
            dispatch({ type: 'FORM_ERROR', payload: { formHasError: true, name, value: `${camelCaseToNormal(name, true)} is required` } })
        } else {
            dispatch({ type: 'FORM_ERROR', payload: { name, value: null, formHasError: false } })
        }
    }

    const onSubmitHandlerLocal = () => {
        onSubmitHandler(form, userModel, dispatch, 'signup');
    }

    useEffect(() => {
        const submitFormToServer = async () => {
            try {
                await request({
                    url: APIS.customer.signup,
                    method: 'post',
                    body: { ...form }
                });

            } catch (err: any) {
                const { response: { data: { errors } } } = err;
                errors.forEach((error: any, i: number) => {
                    dispatch({ type: 'FORM_ERROR', payload: { formHasError: true, name: error.field, value: error.message } })
                    dispatch({ type: 'FORM_SUBMITTED', payload: false });
                    dispatch({ type: 'SUBMITTING', payload: false });
                });
                console.log('err', errors);
            }
        }

        if (formSubmitted && !formHasError) {
              submitFormToServer();
        }

    }, [form, formError, formHasError, formSubmitted, router]);


    
    return (
        <>
            <Header
                userId={userId ?? ''}
                showNavigation
            />
            <FormTemplate>
                <div className={styles.shipping}>
                    <div className={styles.form__row}>
                        <Input label='Email Address'
                            name='email'
                            value={form.email ?? ''}
                            onChange={(e:any) => onChangeHandler(e, dispatch)}
                            error={formError?.email}
                            helperText={formError?.email}
                            onBlur={() => onMouseLeaveEventHandler('email', form.email)}
                            autoComplete={false}
                        />

                    </div>
                    <div className={styles.form__row}>
                        <InputAdromentSec label='Password'
                            type='password'
                            name='password'
                            value={form.password ?? ''}
                            onChange={(e:any) => onChangeHandler(e, dispatch)}
                            error={formError?.password}
                            helperText={formError?.password}
                            onBlur={() => onMouseLeaveEventHandler('password', form.password)}

                        />
                    </div>
                    <div className={styles.form__row}>
                        <InputAdromentSec label='Confirm Password'
                            name='confirmPassword'
                            value={form.confirmPassword ?? ''}
                            onChange={(e:any) => onChangeHandler(e, dispatch)}
                            error={formError?.confirmPassword}
                            helperText={formError?.confirmPassword}
                            onBlur={() => onMouseLeaveEventHandler('confirmPassword', form.confirmPassword)}
                        />
                    </div>
                    <div className={styles.form__row}>
                        <div className={styles.flex__col}>
                            <>
                                <Checkbox id="check-me"
                                    checked={form.agreement ? true : false}
                                    name='agreement'
                                    onChange={(e:any) => onChangeHandler(e, dispatch)}
                                />
                                <label htmlFor="check-me">I agree to terms & conditions</label>
                            </>
                            {formError.agreement && <ErrorText text={'Please read and check the agreement'} />}
                        </div>
                    </div>
                    <div className={styles.form__row}>
                        <Button
                            type='square'
                            variant="primary"

                            onClick={() => !submitting ? onSubmitHandlerLocal() : null}
                        >
                            {submitting ? "Please wait..." : "Signup"}
                        </Button>
                    </div>

                </div>
            </FormTemplate>
        </>

    )
}

export default dynamic(() => Promise.resolve(Main), { ssr: false });
