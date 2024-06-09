import { moneyFormat } from 'functions/moneyFormat';
import Image from 'next/image';
import { ICartItem, IUpdateBase, IUpdateQuantity } from 'slices/cartSlice';
import styles from './cart.module.scss';


interface CartInterface {
    id: number;
    cart: ICartItem;
    addOrRemoveHanlder: (params: IUpdateQuantity) => void;
    duplicateCartItem: (params: IUpdateBase) => void;
    deleteItem: (params: IUpdateBase) => void;
    setShowCartDetailsModel: Function;
    cartIndexToUpdate: (index: number) => void;
}

const CartItem = ({ id,
    cart, addOrRemoveHanlder, duplicateCartItem,
    deleteItem, setShowCartDetailsModel,
    cartIndexToUpdate }: CartInterface) => {
    return <div className={styles.row}>
        <div className={styles.media}>
            <Image src={cart?.originalImageUrl ?? ''} width={140} height={176.83} alt='' />
        </div>
        <div className={styles.description}>
            <div className={styles.group}>
                <div className={styles.name}>
                    {cart?.febric?.title} TAILORED SHIRT -  {cart?.qty} {id}
                </div>
                <div className={styles.type}>
                    {cart?.febric?.material} | {' '}
                    {cart?.febric?.febricTypes}
                </div>

            </div>
            <div className={styles.group}>
                <div className={styles.price}>
                    <>{moneyFormat().format(Number(cart?.subTotal))}</>
                </div>
                <div className={styles.delivery}>
                    Delivery in {cart?.deliveryTime}
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.modify} onClick={() => cartIndexToUpdate(id)}>Modify</div>
            </div>
        </div>
        <div className={styles.actions}>
            <label className={styles.humburger} htmlFor={`cart?-item-key-${id}`}>
                <Image src='/icon/humburg.svg' width={20} height={20} alt='menu' />
            </label>
            <input type="checkbox" name="" id={`cart?-item-key-${id}`} hidden className={styles.menu__checkbox} />

            <div className={styles.menu}>
                <ul>
                    <li>
                        <span className={styles.icon}><Image src='/icon/add.svg' width={20} height={20} alt='menu' /></span>
                        <span className={styles.text}> <span onClick={() => addOrRemoveHanlder({
                            qty: 1,
                            index: id,
                            addOrRemove: 'add',
                            id: cart.id,
                            previousQty: cart.qty
                        })}>Add</span>/
                            <span onClick={() => addOrRemoveHanlder({ qty: 1, index: id, addOrRemove: 'remove', id: cart.id, previousQty: cart.qty })}>Remove</span></span>
                    </li>
                    <li>
                        <span className={styles.icon}><Image src='/icon/copy.svg' width={20} height={20} alt='menu' /></span>
                        <span className={styles.text} onClick={() => duplicateCartItem({ index: id, id: cart.id })}>Duplicate</span>
                    </li>
                    
                    <li onClick={() => setShowCartDetailsModel(id + 1)}>
                        <span className={styles.icon}><Image src='/icon/eye.svg' width={20} height={20} alt='menu' /></span>
                        <span className={styles.text}>View</span>
                    </li>
                    <li onClick={() => deleteItem({ index: cart?.id, id: cart.id })}>
                        <span className={styles.icon}><Image src='/icon/delete.svg' width={20} height={20} alt='menu' /></span>
                        <span className={styles.text}>Delete</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>;
}

export default CartItem;