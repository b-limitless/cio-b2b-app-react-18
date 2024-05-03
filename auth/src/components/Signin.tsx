import { Button, Input, InputAdornments, camelCaseToNormal } from "@pasal/cio-component-library";
import React, { useEffect, useReducer } from "react";
import { onChangeHandler } from "../../common/onChangeHandler";
import { onSubmitHandler } from "../../common/onSubmitHandler";
import Template from "../common/Template";
import { APIS } from "../config/apis";
import { SigninForm } from "../interfaces/user/inde";
import { signInModel } from "../model/user";
import { request } from "../utils/request";
import FormErrorMessage from "../common/FormErrorMessage";
import { Link } from "react-router-dom";



interface SigninProcess {
  form: SigninForm,
  formHasError: boolean,
  formError: SigninForm,
  submissionError: string | null;
  success: boolean;
  submitting: boolean;
  formSubmitted: boolean
}

const formIntialState: SigninForm = {
  email: '',
  password: ''
}

const signinInitialState: SigninProcess = {
  form: { email: '', password: '' },
  formHasError: false,
  formError: {
    email: '',
    password: '',
    message: ''
  },
  submissionError: null,
  success: false,
  submitting: false,
  formSubmitted: false
}

function signInProcessReducer(state: SigninProcess, action: any) {
  switch (action.type) {
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
          ...formIntialState
        }
      }
    }
    case 'SUBMITTING': {
      return {
        ...state,
        submitting: action.payload
      }
    }
    case 'FORM_SUBMITTED': {
      return {
        ...state,
        formSubmitted: action.payload
      }
    }
    case 'SIGNIN_ERROR':
      return { ...state, submissionError: action.payload };
    default:
      return state;
  }
}

interface SignInInterface {
  actions: any;
  globalDispatch: any;
}


interface ISignin {
  setAuth: Function;
}

export default function Signin({ setAuth }: ISignin) {

  const [{ form, formError, formHasError, formSubmitted, submitting }, dispatch] = useReducer(signInProcessReducer, signinInitialState);

  const onMouseLeaveEventHandler = (name: keyof SigninForm, value: string) => {
    if (!signInModel[name]?.test(value)) {
      dispatch({ type: 'FORM_ERROR', payload: { formHasError: true, name, value: `${camelCaseToNormal(name, true)} is required` } })
    } else {
      dispatch({ type: 'FORM_ERROR', payload: { name, value: null, formHasError: false } })
    }
  }

  const onSubmitHandlerLocal = () => {
    onSubmitHandler(form, signInModel, dispatch, 'signin')
  }



  useEffect(() => {
    const submitFormToServer = async () => {
      dispatch({ type: 'SUBMITTING', payload: true });
      try {
        const response = await request({
          url: APIS.auth.signin,
          method: 'post',
          body: form
        });

        setAuth(response);

      } catch (err: any) {
        const { response: { data: { errors } } } = err;
        errors.forEach((error: any, i: number) => {
          dispatch({ type: 'FORM_ERROR', payload: { formHasError: true, name: error.field, value: error.message } })
          dispatch({ type: 'FORM_SUBMITTED', payload: false });
          dispatch({ type: 'SUBMITTING', payload: false });
        });
        console.log('err', errors[0].message);
      }


    }
    if (formSubmitted && !formHasError) {
      submitFormToServer();
    }
  }, [formHasError, formSubmitted]);

  


  return (
    <Template>
      <div className="right col">
        
        <div className="group-elements">
          <div className="row registration">

            <div className="title">
              Sigin
            </div>
            <div className="purpose"></div>

            <FormErrorMessage message={formError.message ?? ''} />

            <div className="form">

              <Input
                label="Email address*"
                id="email-address"
                name="email"
                value={form.email}
                type="email"
                error={!!formError.email}
                helperText={formError.email ? formError.email : ''}
                onChange={(e: any) => onChangeHandler(e, dispatch)}
                onBlur={() => onMouseLeaveEventHandler('email', form.email)}
              />

              <InputAdornments
                label="Password"
                id="password"
                name="password"
                value={form.password}
                type="password"
                error={!!formError.password}
                helperText={formError.password ? formError.password : ''}
                onChange={(e: any) => onChangeHandler(e, dispatch)}
                onBlur={() => onMouseLeaveEventHandler('password', form.password)}
              />

              <Button variant="primary" text={submitting ? 'Please wait...' : 'Signin'} onClick={() => { submitting ? null : onSubmitHandlerLocal() }}></Button>
            
              <div className="already">Create an account <span className="signin_span">
                <Link to='/signup'>
                Signup
                </Link>
                
                </span></div>
            </div>
          </div>
        </div>
      </div>
    </Template>

  );
}
