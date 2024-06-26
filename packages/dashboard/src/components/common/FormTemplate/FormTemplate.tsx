import { Button } from '@pasal/cio-component-library';
import React, { ReactNode } from "react";
import { forStepType } from "../../../types&Enums/febric";
import styles from "./form-template.module.scss";

type Props = {
    children: ReactNode
    setStep: Function;
    step: forStepType;
    nextStepHandler: Function;
    lastStep: boolean;
    backButton?: boolean;
    backButtonEventHanlder?: Function;
    loading?: boolean;
    title?:string;
}

export default function FormTemplate({title, children, step, nextStepHandler, lastStep, loading, backButton, backButtonEventHanlder }: Props) {

    return (
        <div className={styles.addfebric__container}>
            <div className={styles.form__container}>
                <div className={styles.row}>
                    <div className={styles.title}>{title} - {step}</div>
                </div>
                <div className={styles.form__section}>
                    {children}
                    <div className={`${styles.row} ${styles.button__row}`}>
                        <div className={styles.actions}>
                            {backButton && <Button variant="light" text="Back" onClick={!loading ? backButtonEventHanlder : null} />}
                            {!lastStep && <Button style={{textWrap: 'nowrap'}} variant="primary" text={loading? "Please wait..." : "Next"} onClick={() => loading ? null : nextStepHandler(step)} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}