import Image from 'next/image';
import { ICartItem } from 'slices/cartSlice';
import styles from './model.module.scss';
import Item from './Item';


const dummyCount = new Array(5).fill(0);

interface IModel {
    show: number;
    setShow: Function;
    setSelectedCartIndex: Function;
    cart: ICartItem | null
}

export default function Model({ show, setShow, cart }: IModel) {
    return (
        <div className={styles.model__container + ' ' + (show > 0 ? styles.show : styles.hide)}>
            <div className={styles.model}>
                <div className={styles.contents}>
                    <div className={styles.col}>
                        <div className={styles.row}>
                            <Image className={styles.main__img} src={cart?.originalImageUrl ?? '/img/shirt-1.png'} width={330} height={439} alt='' />
                        </div>
                    </div>
                    <div className={styles.col + ' ' + styles.details}>
                        <div className={styles.row + ' ' + styles.head}>
                            <div className={styles.heading}>
                                {cart?.febric?.title} | {cart?.febric?.material}  {cart?.febric?.title} | {cart?.febric?.season}
                            </div>
                            <div className={styles.closing}>
                                <Image src='/icon/close-blue.svg' width={20} height={20} alt='close' onClick={() => setShow(-1)} />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.list__details}>
                                <div className={styles.group}>
                                    <div className={styles.title}>
                                        Details
                                    </div>

                                    <div className={styles.childrens}>
                                        <Item title={'Cuff'} value={cart?.model?.collar?.label || ''} />

                                        <Item title={'Collar'} value={cart?.model?.cuff?.label || ''} />
                                        {dummyCount.map((_, i) => <Item key={i} title={'more'} value={'detail will be'} />)}
                                    </div>
                                </div>

                                <div className={styles.group}>
                                    <div className={styles.title}>
                                        Accent
                                    </div>

                                    <div className={styles.childrens}>
                                        {/* {getAccents()}
                                         */}
                                        <Item title={'Cuff Type'} value={cart?.accent?.cuff?.type || ''} />
                                        <div>

                                        </div>
                                        <Item title={'Collar Type'} value={cart?.accent?.collar?.type || ''} />
                                    </div>
                                </div>
                                <div className={styles.group}>
                                    <div className={styles.title}>Febric</div>
                                    <div className={styles.childrens}>
                                        <Item title={'Material'} value={cart?.febric?.material || ''} />
                                        <Item title={'Tone'} value={cart?.febric?.tone || ''} />
                                        <Item title={'Type'} value={cart?.febric?.febricTypes || ''} />
                                        <Image src={cart?.febric?.originalImageUrl || ''} width={429} height={200} alt='' />
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
