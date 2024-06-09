import { ReactNode } from 'react';
import styles from './form.module.scss';
interface FormTemplate {
    children: ReactNode,
    extraStyles?: any;
}
export default function FormTemplate({ children, extraStyles }: FormTemplate) {
    return (
        <div className={styles.container} style={extraStyles}>
            {children}
        </div>
    )
}
