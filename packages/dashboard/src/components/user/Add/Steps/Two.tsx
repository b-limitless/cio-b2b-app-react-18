import { BasicAccordion, BasicSwitch, camelCaseToNormal } from '@pasal/cio-component-library';
import React from 'react';
import FormErrorMessage from '../../../common/FormErrorMessage';
import stylesFrom from "../../form-steps.module.scss";
import { AuthorizationType } from '../../types';
import styles from "../permissions.module.scss";
type Props = {
    onChangeHandler: Function;
    authorizations: AuthorizationType
    errors: {[x:string]: string}
    permissions:string[] 
}


export default function StepTwo({authorizations, onChangeHandler, errors, permissions}: Props) {

    return (
        <>
        
        {/* <div className="loading">Please wait, loading....</div>*/}
        {authorizations.length === 0 && <div className="notfound">No authorizations found</div> }
        
       {authorizations.length > 0 && <div className={styles.permission__container + ' ' + stylesFrom.childrens}>
            {authorizations.map((authorization:any, i:number) => <div key={i} className={styles.permission__col}>
                <BasicAccordion title={authorization.role} id={`$crs-${i}`} ariaControls={`$crs-${i}`}>
                    <div className={styles.item}>
                        {authorization.permissions.map((permission:any, j:number) => <div key={`${permission}-${j}`} className={styles.col}>
                            <BasicSwitch 
                            label={camelCaseToNormal(permission.name)} 
                            onChange={onChangeHandler}
                            checked={permissions.indexOf(permission.id) !== -1}
                            name={permission.id}
                            sx={{fontFamily: 'Poppins, san-sarif !important'}}
                            />
                        </div>)}
                    </div>
                </BasicAccordion>
            </div>)}
        </div>} 
        {errors.permissions && <FormErrorMessage message={errors.permissions}/>}
        </>
        

    )
}