// 'use client'
/**
 * This component can be use full in review section only few things need to add 
 * Such as shipping details and payment option which is selected by the user
 * **/
import { Button } from 'components/Button';
import { APIS } from 'config/apis';
import { moneyFormat } from 'functions/moneyFormat';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PayThroughPaypal from 'pages/payment/Main';
import { ReactNode, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllAccent } from 'slices/accentSlice';
import { IUpdateBase, IUpdateQuantity, deleteItemAction, duplicateItem, updateQuantity } from 'slices/cartSlice';
import { updateFebric } from 'slices/febricSlice';
import { updateAllProps } from 'slices/modelSlice';
import { updateCartIndexAction } from 'slices/updateCartIndex';
import { RootState } from 'store';
import { TCartUsedFrom } from 'types/cart';
import { request } from 'utils/request';
import CartItem from './CartItem';
import styles from './cart.module.scss';
import Model from './model';
import Payment from './review/Payment';
import Shipping from './review/Shipping';
import useDispatchStoreId from 'hooks/useDispatchStoreId';
import { storeID } from 'config/user';
import useGetStoreId from 'hooks/useGetStoreId';

const stylePayment: any =
  { display: 'flex', alignItems: 'center' }

interface ICartMain {
  userId: string | string[], 
  children:ReactNode;
  usedFrom: TCartUsedFrom
  setMeasurementJourney?: Function;
}

export default function Cart({ userId, children, usedFrom, setMeasurementJourney }: ICartMain) {
  const [showCartDetailsModel, setShowCartDetailsModel] = useState<number>(-1);
  const [selectedCartIndex, setSelectedCartIndex] = useState<null | number>(null);
  const carts = useSelector((state: RootState) => state.cart);
  const shipping = useSelector((state: RootState) => state.shipping);
  const dispatch = useDispatch();
  const router = useRouter();
  const storeId = useGetStoreId();


  const addOrRemoveHanlder = async (params: IUpdateQuantity) => {
    const { addOrRemove, qty, index, id } = params

    const finalQty = addOrRemove === 'add' ? carts[index].qty + 1 : carts[index].qty - qty;

    try {
      await request({
        url: `${APIS.cart}/${id}`,
        method: 'patch',
        body: { qty: finalQty }
      });
    } catch (err) {
      console.error(`Could not update quanity ${err}`);
      throw new Error(`Could not update quanity ${err}`);
    }
    dispatch(updateQuantity(params));
  }

  const duplicateCartItem = async (params: IUpdateBase) => {
    // Get cart by index and remove the id from it and sent creat cart API 
    const { index } = params;

    const copyCart = carts[index];
    const { id, ...body } = copyCart;

    try {
      await request({
        url: APIS.cart,
        method: 'post',
        body
      });
    } catch (err) {
      console.log(`Could be duplicate the cart ${err}`);
    }
    dispatch(duplicateItem(params));
  }

  const deleteItem = async (params: IUpdateBase) => {

    // Send the request to the server to delete the item
    const { index } = params;
    try {
      await request({ url: `${APIS.cart}/${index}`, method: 'delete' })
    } catch (err) {
      console.error(`could not delete the item ${err}`)
    }
    dispatch(deleteItemAction(params))
  }

  const getCartDetails = () => {
    // We are setting to index + 1 
    // To access we have to subtract from thevalue 
    if (showCartDetailsModel > 0) {
      const index = showCartDetailsModel - 1;
      console.log(carts[index]);
    }
  }

  const getQty = useMemo(() => {
    if (carts.length < 1) return null;
    return carts.map((cart:any) => cart.qty).reduce((a: number, b: number) => a + b)
  }, [carts])

  const totalAmount = useMemo(() => {
    if (carts.length < 1) return null;
    const amount = carts.map((cart:any) => cart.subTotal).reduce((a: number, b: number) => a + b);
    return moneyFormat().format(amount);

  }, [carts]);

  const cartIndexToUpdate = (index: number) => {
    const { model, accent, febric } = carts[index];
    dispatch(updateCartIndexAction(index));

    dispatch(updateAllProps(model));
    dispatch(updateAllAccent(accent));
    dispatch(updateFebric(febric));

    router.push(`/customize/shirt/`);

  }

  const getCartItemStyle = useMemo(() => {
    let styleCartItem:any = {height: 'calc(100vh - (56px + 32px + 1rem + 25px + 80px + 186.5px + 191.5px))'};
    if(usedFrom === 'cart') {
      styleCartItem = {height: 'calc(100vh - (56px + 32px + 1rem + 25px + 80px))'};
    }

    return styleCartItem;

    
  }, [usedFrom]);

  useDispatchStoreId();



  return (
    <>
      <Model
        show={showCartDetailsModel}
        setShow={setShowCartDetailsModel}
        setSelectedCartIndex={setSelectedCartIndex}
        cart={carts[showCartDetailsModel - 1] ?? null}
      />
      {children}
      <div className={styles.cart__container}>
        <div className={styles.title}>
          <Link href={`/customize/shirt`}>Customize</Link>
        </div>

        {carts.length > 0 && <div className={styles.cart__details}>

          <div className={styles.items}>
            {usedFrom === 'review' && <>
            <Shipping
            data={shipping.data}
            setMeasurementJourney={setMeasurementJourney}
            />
            <Payment/>
            </>
        }
            

            <div className={styles.cart_items} style={getCartItemStyle}>
              {carts.map((cart, i) => <CartItem
                key={'cart-item' + i}
                id={i}
                cart={cart}
                addOrRemoveHanlder={addOrRemoveHanlder}
                duplicateCartItem={duplicateCartItem}
                deleteItem={deleteItem}
                setShowCartDetailsModel={setShowCartDetailsModel}
                cartIndexToUpdate={cartIndexToUpdate}
              />

              )}
            </div>


          </div>
          <div className={styles.summary}>
            <div className={styles.summary__details}>
              <div className={styles.row}>
                <div className={styles.title}>
                  <span className={styles.dark__text}>
                    {getQty} products at value of {totalAmount}
                  </span>
                  <span className={styles.green__text}>
                    Free shipping
                  </span>
                </div>
                <div className={styles.gray__text}>
                  <p>
                    Your order will be sent grouped in different packages,
                    the delivery time is specified under for each product
                  </p>

                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.tr}>
                  <div className={styles.label}>Shopping bag total</div>
                  <div className={styles.price}>{totalAmount}</div>
                </div>
                <div className={styles.tr}>
                  <div className={styles.label}>Shipping</div>
                  <div className={`${styles.shipping__cost} ${styles.free}`}>Free</div>
                </div>

                <div className={styles.tr}>
                  <div className={styles.total}>Total</div>
                  <div className={styles.total__cost}>{totalAmount}</div>
                </div>

                <div className={styles.tr}>
                  <Link href={`/order/${userId}`}>
                    {/* 
                       Different button need to show based on where it is used from
                    */}
                    {usedFrom === 'cart' &&<Button variant='primary' type='square'>
                       
                      <Image src={'/icon/rular.svg'} width={30} height={30} alt='' />
                      <span>MEASUREMENT AND CHECKOUT</span>
                      

                    </Button> }

                    
                    {usedFrom === 'review'  && 
                      <PayThroughPaypal id={userId ? userId : storeId} setMeasurementJourney={setMeasurementJourney}/>}
                  </Link>

                </div>
              </div>

            </div>
          </div>
        </div>}

        {carts.length === 0 && <div className={styles.empty__cart}>
          Shopping bag is empty
        </div>}
      </div>
    </>

  )
}
