import React from 'react';
import styles from './buttons.module.scss';

export enum EButtonVariant {
    Primary='primary',
    Secondary='secondary', 
    Third='third'
}
interface IButton {
    variant: EButtonVariant, 
    text: string; 
}

export default function ECButton({text, variant} : IButton) {
  let btnClass:string = styles.btn;

  if(variant === EButtonVariant.Primary) {
    btnClass += ` ${styles.btn__primary}`;
  }

  if(variant === EButtonVariant.Secondary) {
    btnClass += ` ${styles.btn__secondary}`;
  }

  if(variant === EButtonVariant.Third) {
    btnClass += ` ${styles.btn__secondary}`;
  }

  if(variant === EButtonVariant.Third) {
    btnClass += ` ${styles.btn__third}`;
  }

  
  return (
    <button className={btnClass}>{text}</button>
  )
}
