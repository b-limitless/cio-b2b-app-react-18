import { APIS } from "../../config/apis";
import { request } from "../../utils/request";

export const updateFebric = async (
    id: string | null,
    febric: any
) => {
    if (!id) {
        return;
    }

    try {
        const setDefaultFebric = await request({
            url: `${APIS.product.new}/${id}`,
            method: "patch",
            body: febric,
            unauthrizedRedirect: true,
        });
        return setDefaultFebric;
    } catch (err) {
        console.error(err);
    }
};
