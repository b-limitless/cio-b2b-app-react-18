import { APIS, style } from 'config/apis';
import { Dispatch } from 'react';
import { request } from 'utils/request';


export async function getStyles() {
  try {
    await request({
      url: style,
      method: 'get',
    });
  } catch (err) {
    console.error(`Could not get style ${err}`);
    throw new Error(`Could not get style ${err}`);
  }
}
