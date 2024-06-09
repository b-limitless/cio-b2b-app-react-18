import { APIS } from 'config/apis';
import { request } from 'utils/request';

export async function fetchDefaultFebric(userId: string) {

   
  try {
    const febric = await request({
      url: APIS.febric.default(userId),
      method: 'get',
    });
    return febric;
  } catch (err) {
    console.error(`Could not fetch default febric ${err}`);
  }
}
