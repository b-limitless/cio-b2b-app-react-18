import { APIS } from "../../config/apis";
import { request } from "../../utils/request";



export const fetchFebric = async (queryParams: any) => {
  try {
    const febrics = await request({ url: `${APIS.product.new}?filters=${queryParams.filters}&page=${queryParams.page}`, method: "get" });

    return febrics;
  } catch (err) {
    console.error(err);
  }
};
