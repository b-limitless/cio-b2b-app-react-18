import React, { Fragment } from 'react';
import FebricItem from './FebricItem';
import { svgCDNAssets, pngCDNAssetsURIs, camelCaseToNormal } from "@pasal/cio-component-library";
import { firstLetterUpperCase } from "@pasal/common-functions"
import './order-details.scss';
import ArrowDown from '../../../../../assets/svg/arrow-down.svg';
import styles from "./customize.module.scss";
type Props = {}
const febricLink = 'https://img.freepik.com/free-vector/grunge-dusty-texture-background_1048-9793.jpg?t=st=1712759758~exp=1712763358~hmac=335676b47d5f074d2176e9d59a79fdfec3fb93aa2c2c5600f9b640c3e306a416';
const cart: any =
{
    "status": "completed",
    "customerId": "65c5fab3c6bdc73777fa1764",
    "originalImageUrl": febricLink,
    "thumbnailImageUrl": febricLink,
    "model": {
        "collar": {
            "modelURL": "/models/collars/collar-button-down.glb?timestamp=1712663521625",
            "buttonsMeshNames": [
                "MatShape_16796_Node",
                "MatShape_16804_Node"
            ],
            "buttonWholeMeshNames": [
                "Collar_2_Node",
                "Collar_3_Node"
            ],
            "price": 10,
            "iconClass": "icon-65",
            "label": "button down",
            "code": "buttonDown",
            "id": "6613d47630ab7d2004e6584b",
            "order": 1
        },
        "cuff": {
            "modelURL": "/models/cuffs/single-button-cuff.glb?timestamp=1712663524929",
            "buttonsMeshNames": [
                "MatShape_15102_Node",
                "MatShape_19884_Node"
            ],
            "buttonWholeMeshNames": [
                "Cuffs_3_Node",
                "Cuffs_4_Node"
            ],
            "price": 20,
            "iconClass": "icon-68",
            "label": "single 1 button",
            "code": "singleOneButtonCuff",
            "id": "6613d47630ab7d2004e65851",
            "order": 2
        },
        "chestpocket": {
            "modelURL": "undefined?timestamp=1712663527429",
            "buttonsMeshNames": [],
            "buttonWholeMeshNames": [],
            "price": 20,
            "iconClass": "icon-70",
            "label": "Standard",
            "code": "standardPocket",
            "id": "6613d47630ab7d2004e65854",
            "order": 3
        }
    },
    "accent": {
        "collar": {
            "id": 4,
            "febric": febricLink,
            "price": 581.41,
            "meshName": [
                "Collar_Node",
                "Collar_Stand_Node",
                "MatShape_1135259_Node",
                "Node_25"
            ],
            "updatedFrom": "accents",
            label: 'default',
            iconClass: 'icon-42'
        },
        "cuff": {
            "id": 3,
            "febric": "/img/texture/texture-4.jpg",
            "price": 694.04,
            "meshName": [
                "Cuffs_1_Node",
                "Cuffs_Node",
                "Node_39",
                "Node_43",
                "Cuffs_3_Node",
                "Cuffs_2_Node"
            ],
            "updatedFrom": "accents",
            "label": 'Inner Febric',
            iconClass: 'icon-45'
        },
        "buttonWholeAndStitch": {
            "id": "",
            "febric": "/img/button-threads/thread-black.png",
            "price": 10,
            "iconClass": "icon-55",
            label: 'all'
        },
        "buttonColors": {
            "id": "4",
            "title": "Brown",
            "texture": "/img/buttons/texture/brown.png",
            "price": 0,
            "febric": "/img/buttons/icon/brown.png",
            "code": "ButtonColorAll",
            label: 'Default',
            iconClass: 'icon-53'
        },
        "frontPlacket": {
            "id": "2",
            "title": "Black",
            "price": 0,
            "febric": "",
            "iconClass": "icon-52",
            label: 'all'
        },
    },
    "febric": {
        "id": "65b25738d8db760157740560",
        "model": "/img/texture/texture-1.jpg",
        "price": 10,
        "title": "",
        "material": "Cotton",
        "tone": "light",
        "febricTypes": "Cotton",
        "season": "summer",
        "label": "default",
        "code": "default",
        "originalImageUrl": febricLink
    },
    "modelType": "shirt",
    "subTotal": 1285.4499999999998,
    "qty": 1,
    "discount": 0,
    "availability": "",
    "deliveryTime": "3 weeks",
    "sessionId": null,
    "createdAt": "2024-04-09T11:52:36.085Z",
    "updatedAt": "2024-04-09T11:52:36.085Z",
    "cartId": "59d3b7de-ec81-4312-a8c4-55ba9387bf06",
    "id": "66152c040008174758410993"
}
const measurement: any = {
    verified: false,
    firstName: 'Bharat',
    lastName: 'Sure',
    height: 170,
    inch: 1,
    weight: 75,
    age: 35,
    unite: 'feet',
    email: 'bharatrose11@gmail.com',
    createdAt: '2024-04-10T15:09:51.887Z',
    updatedAt: '2024-04-10T15:09:51.887Z',
    id: '65cb626b1129f065cc5e8d17',
    sleevLength: 12,
    shoulderWidth: 12,
    chestAround: 12,
    stomach: 12,
    bicepAround: 12,
    torsoLength: 12,
    hips: 1233,
    wrist: 12,
    neck: 12
};
const shipping = {
    firstName: 'Bharat',
    lastName: 'Shah',
    addressLine1: '901 Maika Tower A Street',
    addressLine2: 'Residental area',
    city: 'Sharjah',
    state: 'sharjah',
    postalCode: '00000',
    country: 'Armenia',
    phoneNumber: '565973854',
    countryCode: '374',
    email: 'bharatrose1@gmail.com',
}
export default function Customize({ }: Props) {

    const getStyleKeys = () => {
        const { model } = cart;
        const keys = Object.keys(model);
        return keys;
    }

    const getAccentKeys = () => {
        const { accent } = cart;
        const keys = Object.keys(accent);
        return keys;
    }

    const getMeasurement = () => {
        let keys: any = Object.keys(measurement);
        const excludeKeys = ['firstName', 'lastName', 'email', 'verified', 'createdAt', 'updatedAt', 'id'];
        keys = keys.filter((key: string) => !excludeKeys.includes(key));
        return keys.map((key: string, i: number) => <div key={`measurement-${i}`} className="row">
            <label>{camelCaseToNormal(key)}</label>
            <span>{measurement[key]}</span>
        </div>)
    }
    
    const showMeTexture = (url: string) => {
        window.open(url, '_blank', 'noopener norefereer')
    }
    return (
        <div className={styles.customize}>
            <div className="product__section">
                <h3>Style</h3>
                <ul id="more__details">
                    {getStyleKeys().map((key, i) => <li key={`model-${i}`}>
                        <span className={`shirt-icon ${cart.model[key].iconClass}`}></span>
                        <span className="label">
                            {cart?.model[key]?.label}
                        </span>
                    </li>)}
                </ul>
            </div>
            <div className="product__section">
                <h3>Accent</h3>
                <ul id="accent-details">
                    {getAccentKeys().map((key, i) => <li key={`model-${i}`}>
                        <span className='group' onClick={() => showMeTexture(cart?.accent[key]?.febric)}>
                            <span className={`shirt-icon ${cart?.accent[key]?.iconClass}`}></span>
                            <span className='key'>{camelCaseToNormal(key).slice(0, 13)}</span>
                            <span className="label">
                                {cart?.accent[key]?.label}
                            </span>
                        </span>
                    </li>)}
                </ul>
            </div>
            <div className="product__section">
                <h3 className="undersqure">
                    <span>
                        <a href={cart?.febric?.originalImageUrl} target='_blank'>Fabric</a>
                    </span></h3>
            </div>
            <div className="product__section">
                <h3 className="undersqure">
                    <span>
                        <a href={cart?.originalImageUrl} target='_blank'>Custimzed Image</a>
                    </span>
                </h3>
            </div>
            <div className="product__section">
                <input className="tab__checkbox" type="checkbox" name="" id="customer" hidden />
                <h3 className="undersqure">
                    <label className='label' htmlFor='customer'>
                        <span>
                            Measurement
                        </span>
                        <span className='tab__icon'>
                            <ArrowDown />
                        </span>
                    </label>
                </h3>
                <div className='tab__slidedown'>
                    <div className="content">
                        {getMeasurement()}
                    </div>
                </div>
            </div>
            <div className="product__section">
                <input  className="tab__checkbox" type="checkbox" name="" id="shipping" hidden />
                <h3 className="undersqure">
                    <label className='label' htmlFor='shipping'>
                        <span>
                            Shipping
                        </span>
                        <span className='tab__icon'>
                            <ArrowDown />
                        </span>
                    </label>
                </h3>
                <div className='tab__slidedown'>
                    <div className="content">
                        <div className="row">
                            <div className="sub_row">
                                <div className="col">
                                    {shipping?.firstName} {shipping?.lastName}
                                </div>
                                <div className="col">
                                    <span className="phone_number">
                                        {shipping?.countryCode} {shipping?.phoneNumber}
                                    </span>
                                </div>
                            </div>
                            <div className="sub_row">
                                <div className="col">
                                    <span className="shpping_address">
                                        {shipping.addressLine1} {shipping.addressLine2} {shipping?.city} {shipping?.state} {shipping?.country} {shipping?.postalCode}
                                    </span>
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    )
}