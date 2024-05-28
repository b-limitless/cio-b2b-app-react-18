
import { cartURI, orderURI } from "../../config/apis";
import { request } from "../../utils/request";

export const fetchOrderDetails = async (cartId:string | null) => {
  if(!cartId) {
    return;
  }
  try {
    const orderDetails = await request({ url: `${cartURI}/${cartId}`, method: "get", unauthrizedRedirect: true });
    return orderDetails;
  } catch (err) {
    console.error(err);
  }
};
