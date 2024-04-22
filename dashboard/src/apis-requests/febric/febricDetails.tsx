import { APIS } from "../../config/apis";
import { request } from "../../utils/request";

export const fetchFebricDetails = async (
  id: string | null
) => {
  if (!id) {
    return;
  }
  
  try {
    const febricDetails = await request({
      url: APIS.febric.details(id),
      method: "get",
      unauthrizedRedirect: true,
    });
    return febricDetails;
  } catch (err) {
    console.error(err);
  }
};
