
import React from 'react';
import styles from "./model.module.scss";
import CloseSVG from '../../../assets/svg/close.svg'


interface SideModeInterface {
  children: React.ReactNode;
  showModel: null | string ;
  setShowModel: Function;
  style?:object;

}


export default function SideModel({ children, showModel, setShowModel, style }: SideModeInterface) {
 
  return (
    <div style={style} className={`${styles.model} ${!!showModel ? styles.show : styles.hide}`}>
      <div className={styles.model__side}>
        <div className={styles.close}>
          <CloseSVG onClick={() => setShowModel()}/>
        </div>
        {children}
      </div>
    </div>
  )
}