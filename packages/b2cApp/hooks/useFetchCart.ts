import { RootState } from 'store';
import { APIS } from 'config/apis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAllItemsToTheCart, addToCart } from 'slices/cartSlice';
import { request } from 'utils/request';

const lastVisitKey = 'lastVisitTime'

export default function useFetchCart() {
  const dipsatch = useDispatch();
  const carts = useSelector((state:RootState) => state.cart);

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const fetchCartsItems = await request({
          method: 'get',
          url: APIS.cart,
        });

        if (fetchCartsItems.length > 0) {
          dipsatch(addAllItemsToTheCart(fetchCartsItems));
        }
      } catch (err: any) {
        console.error(err);
      }
    };
    
    if(carts.length === 0) {
        fetchUserCart();
    }
  }, [dipsatch, carts]);


  return null;
}
