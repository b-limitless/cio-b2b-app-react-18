import { ThreadColor } from "pages/customize/Select/Styles/ProductStyles/Items";

export const defaultFebric = `/img/texture/texture-15.jpg`;
export const defaultCuffModel = `/models/cuffs/single-button-cuff.glb`;
export const defaultCollarModel = `/models/collars/collar-single-button.glb`;
export const buttonThreadBaseURI = '/img/button-threads';

export const defaultContrastButtonThread:ThreadColor = {
  id: '1',
  title: 'Black',
  febric: `${buttonThreadBaseURI}/thread-black.png`,
  price:0
};

export const defaultButtonColor = {
  id: '1',
  title: 'Black',
  texture: `/img/buttons/texture/blue.png`,
  price: 0,
  febric: `/img/buttons/icon/blue.png`
}
//?timestamp=${Date.now()}

export const defaultPrices = {
  collar: 10,
  cuff: 10,
};

export const defaultFrontPacket = {
    id: 1,
    title: 'Black',
    price: 0,
    febric: defaultFebric

}
