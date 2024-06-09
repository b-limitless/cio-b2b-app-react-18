import { APIS } from 'config/apis';
import { IPayload } from 'pages/payment/Main';
import { request } from 'utils/request';

type TId = string | string[];

interface IOnApprove {

}

export async function onApprove(data: any, id: TId, makeCartEmptyOnApprove: Function, payload: IPayload) {
  try {
    await request({
      url: `${APIS.paypal.onApprove}/${id}`,
      method: 'post',
      body: { orderID: data.orderID, ...payload },
    });
    // Make the cart empty
    makeCartEmptyOnApprove();
    // Update the user journey to order completed
  } catch (err) {
    console.error(`Unable to approve the request ${err}`);
    throw new Error(`Unable to approve the request ${err}`);
  }
}
