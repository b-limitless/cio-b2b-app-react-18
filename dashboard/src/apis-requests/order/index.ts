
import { orderURI } from "../../config/apis";
import { request } from "../../utils/request";

export const fetchOrders = async (queryParams:any) => {
  try {
    // const queryString = new URLSearchParams(queryParams).toString();
    // const urlWithQuery = `${orderURI}?${queryString}`;

    const orders = await request({ url: `${orderURI}?filters=${queryParams.filters}&page=${queryParams.page}`, method: "get" });
    return orders;
  } catch (err) {
    console.error(err);
  }
};
