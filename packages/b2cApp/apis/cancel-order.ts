import { APIS } from 'config/apis';
import { request } from 'utils/request';

type TId = string | string[];

export async function cancelOrder(id: TId, cancelOrderHandler:Function) {
  try {
    await request({
      url: `${APIS.paypal.onCancel}/${id}`,
      method: 'post',
    });
    cancelOrderHandler();
  } catch (err) {
    console.error(`Could not create an order ${err}`);
    throw new Error(`Could not create an order ${err}`);
  }
}
