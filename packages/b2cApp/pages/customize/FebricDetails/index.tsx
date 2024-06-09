import { FebricAttrs } from 'slices/febricsSlice';
import FebricDetailsV1 from './FebricDetails';
import styles from './febric-details.module.scss';


interface FebricDetailsInterface {
    setShowFebricDetailsModel: Function;
    showFebricDetailsModel: string ;
    febric: FebricAttrs | null
    
}

export default function FebricDetails({febric, showFebricDetailsModel, setShowFebricDetailsModel }: FebricDetailsInterface) {
    return (
        <div className={`${styles.model__container} ? ${showFebricDetailsModel ? styles.fedInModel : styles.fedInModel}`}>
            <div className={styles.model}>
                <FebricDetailsV1
                setShowFebricDetailsModel={setShowFebricDetailsModel}
                febric={febric}
                />
            </div>
        </div>
    )
}