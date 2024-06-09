import { FilterItemInterface } from "types/filter.interface"
import styles from './filter.module.scss';
import Image from "next/image";
import { CheckboxWithLabel } from "components/Checkbox/Checkbox";
import Color from "./Color";



const FilterItem = ({updateFebricFiltersHandler, name, code, childrens, type }: FilterItemInterface) => {
    return <div className={styles.item}>
        <input hidden type='checkbox' name='' id={code} className={styles.options__checkbox} />

        <label htmlFor={code} className={styles.label}>
            <span className={styles.title}>
                {name}
            </span>
            <span className={styles.indicator}>
                <Image width={14} height={8} src={'/icon/arrow-up.svg'} alt=''></Image>
            </span>
        </label>

        <div className={styles.form__element}>
            {type === 'text' &&
                <div className={styles.wrapper}>
                    {childrens.map((children, i) => <CheckboxWithLabel 
                    onChange={() => updateFebricFiltersHandler(code, children.code)}
                    key={`${i}-filter-checkbox`} 
                    label={children.name} />)}
                </div>}


            {type === 'color' &&
                <div className={styles.colors}>
                    {childrens.map((color, i) => <Color i={i} key={`${color}-${i}`} name={color.name} code={color.code} />)}
                </div>}


        </div>
    </div>
}

export default FilterItem;