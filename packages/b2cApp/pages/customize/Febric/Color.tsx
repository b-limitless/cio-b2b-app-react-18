import { ColorInterface } from "types/filter.interface"
import styles from './filter.module.scss';

const Color = ({ name, code, i }: ColorInterface) => {
    return <>
        <input type="checkbox" hidden name="color" id={name + code + i} className={styles.color__checkbox} />
        <label htmlFor={name + code + i} className={styles.label}>
            <span className={styles.color} style={{ backgroundColor: `${code}` }}></span>
        </label>
    </>
}

export default Color;