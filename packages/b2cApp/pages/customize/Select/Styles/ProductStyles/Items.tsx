import { EAccentButtonColor, EAccentChildrens } from "config/models";
import { ItemInterface } from "interface/IProductStyle.interface";
import Image from "next/image";
import React, { ForwardedRef, Fragment, MouseEventHandler, forwardRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import styles from '../styles.module.scss';

export interface ThreadColor {
    id: string; 
    title: string; 
    febric: string; 
    price: number;
}

export interface ButtonColor extends ThreadColor {
    texture: string;
}


interface IColorPalate {
    onClick: MouseEventHandler<HTMLImageElement>;
    show: boolean;
    [x: string]: any;
}

export const ColorPalate = React.forwardRef((
    { onClick, show, code }: IColorPalate,
    ref: ForwardedRef<HTMLDivElement>
) => {
    let data : ThreadColor[] | ButtonColor[] = [];

    data = useSelector((state:RootState) => code === EAccentChildrens.All ? state.buttonWholeAndStitch : state.buttonColors)
    
    return (
        <div ref={ref} className={`${styles.colors} ${show && styles.showColorPlate}`}>
            <div className={styles.navigation}></div>

            <div className={styles.threads}>
                {data.map((val, key) => (
                    <div key={key} className={styles.color}>
                        <Image src={val.febric} width={57} height={57} alt='color' onClick={() => onClick({ ...val, code } as any)} />
                    </div>
                ))}
            </div>
        </div>
    );
});



function Items({ onColorClickHandler, showColorPlateOne, name, code, id, title, onClickHanlder, iconClass }: ItemInterface, ref: ForwardedRef<HTMLInputElement>) {
    return (<Fragment>

        <input className={styles.checkbox} type='radio' name={name} id={id} hidden />
        <label className={styles.item} htmlFor={id} onClick={onClickHanlder}>
            {[EAccentChildrens.All, EAccentButtonColor.All].includes(code as any) && 
            
            <><ColorPalate code={code} ref={ref} show={showColorPlateOne} onClick={onColorClickHandler} /></>}

            <span className={`${styles.col} shirt-icon ${iconClass}`}>
                <span className={styles.style__name}>{title}</span>

            </span>
        </label>
    </Fragment>
    )
}

ColorPalate.displayName = 'ColorPalate';

export default forwardRef(Items);