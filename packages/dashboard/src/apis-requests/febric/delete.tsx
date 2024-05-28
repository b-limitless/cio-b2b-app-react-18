import { APIS } from "../../config/apis";
import { request } from "../../utils/request";

export const deleteFebric = async (
  id: string | null
) => {
  if (!id) {
    return;
  }
  
  try {
    const deleteFebric = await request({
      url: `${APIS.product.new}/${id}`,
      method: "delete",
      unauthrizedRedirect: true,
    });
    return deleteFebric;
  } catch (err) {
    console.error(err);
  }
};
