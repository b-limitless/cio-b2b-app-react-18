import React from 'react';
import { Skeleton } from "@mui/material";
import styles from "./customize.module.scss";
import './order-details.scss';
type Props = {}


const cart: any =
{
    "status": "completed",
    "customerId": "65c5fab3c6bdc73777fa1764",
    "originalImageUrl": 'febricLink',
    "thumbnailImageUrl": 'febricLink',
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
            "febric": 'febricLink',
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
        "originalImageUrl": 'febricLink'
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

export default function OrderDetailSkeleton({ }: Props) {

    const getStyleKeys = () => {
        const { model } = cart;
        const keys = Object.keys(model);
        return keys;
    }

    return (
        <div className={styles.customize}>
            <div className="product__section">
                <h3><Skeleton variant='text' width={150} height={25} /></h3>
                <ul id="more__details">
                    {getStyleKeys().map((key, i) => <li key={`model-${i}`}>
                        <Skeleton variant='rectangular' width={60} height={60} />
                        <Skeleton variant='text' width={100} height={20} />
                    </li>)}
                </ul>
            </div>
            <div className="product__section">
                <h3><Skeleton variant='text' width={150} height={25} /></h3>
                <ul id="more__details">
                    {getStyleKeys().map((key, i) => <li key={`model-${i}`}>
                        <Skeleton variant='rectangular' width={60} height={60} />
                        <Skeleton variant='text' width={100} height={20} />
                    </li>)}
                </ul>
            </div>
            <div className="product__section">
                <Skeleton variant='text' width={150} height={25} />
            </div>
            <div className="product__section">
                <Skeleton variant='text' width={150} height={25} />
            </div>
            <div className="product__section">
                <Skeleton variant='text' width={150} height={25} />
            </div>
            <div className="product__section">
                <Skeleton variant='text' width={150} height={25} />

            </div>
        </div>
    )
}