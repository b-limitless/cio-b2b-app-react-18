import { APIS } from 'config/apis';
import { request } from 'utils/request';

type TId = string | string[];

export async function createOrder(id: TId) {
  try {
    const { id: orderId } = await request({
      url: `${APIS.paypal.createOrder}/${id}`,
      method: 'post',
    });

    return orderId;
  } catch (err) {
    console.error(`Could not create an order ${err}`);
    throw new Error(`Could not create an order ${err}`);
  }
}
