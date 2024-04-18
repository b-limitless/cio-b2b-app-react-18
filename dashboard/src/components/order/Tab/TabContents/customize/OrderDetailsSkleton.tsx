import React from 'react';
import { Skeleton } from "@mui/material";
import styles from "./customize.module.scss";
import './order-details.scss';
type Props = {}


const cart: any =
{
   
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
        }
    }
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