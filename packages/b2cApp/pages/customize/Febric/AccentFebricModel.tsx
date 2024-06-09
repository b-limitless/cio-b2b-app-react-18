import Image from 'next/image';
import { FebricAttrs } from 'slices/febricsSlice';
import febricStyle from '../common.module.scss';
import Febric from './Febric';
import styles from './filter.module.scss';
interface FilterInterface {
    setShowFilterModel: Function;
    showFilterModel: boolean;
    onClickHandler: any;
    accentFebrics:FebricAttrs[]
}


export default function AccentFebricModel({accentFebrics, onClickHandler, setShowFilterModel, showFilterModel }: FilterInterface) {
    return (
        <div className={styles.filter + ' ' + (showFilterModel ? styles.show : styles.hide)}>
            <div className={styles.header}>
                <span className={styles.title}>
                    Select Febric
                </span>
                <span className={styles.close}>
                    <Image src='/icon/close.svg' width={16} height={16} alt='' onClick={() => setShowFilterModel(false)} />
                </span>
            </div>
            <div className={styles.num__febrics}>
                <span className={styles.bold}>
                    500
                </span>
                <span className={styles.text}>
                    Febrics
                </span>
            </div>

            <div className={febricStyle.febrics}>

                {accentFebrics.map((febric: any, i: number) => <Febric
                    febric={febric}
                    index={i}
                    febricImageURI={febric.febricURI}
                    key={'febri-item-custom' + i}
                    setShowFebricDetailsModel={() => null}
                    onClick={(event: any) => onClickHandler(event,
                        {
                            key: 'collar',
                            payload: {
                                id: i, 
                                febric: febric.originalImageUrl,
                                price: febric.price,
                                
                            }
                        })}
                />)}

            </div>

        </div>
    )
}
