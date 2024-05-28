import { cartURI, orderURI } from "../../config/apis";
import { request } from "../../utils/request";

export const fetchRestOrderDetails = async (
  type: string,
  cartId: string | null
) => {
  if (!cartId) {
    return;
  }
  try {
    const orderDetails = await request({
      url: `${orderURI}/measurement/${cartId}?type=${type}`,
      method: "get",
      unauthrizedRedirect: true,
    });
    return orderDetails;
  } catch (err) {
    console.error(err);
  }
};
