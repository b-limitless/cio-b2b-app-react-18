import React from 'react';
import { Skeleton } from "@mui/material";
import styles from "./customize.module.scss";
import orderStyles from './order-details.module.scss';
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
            <div className={orderStyles.product__section}>
                <h3><Skeleton variant='text' width={150} height={25} /></h3>
                <ul className={orderStyles.more__details}>
                    {getStyleKeys().map((key, i) => (
                        <li key={`model-${i}`}>
                            <Skeleton variant='rectangular' width={60} height={60} />
                            <Skeleton variant='text' width={100} height={20} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={orderStyles.product__section}>
                <h3><Skeleton variant='text' width={150} height={25} /></h3>
                <ul className={orderStyles.more__details}>
                    {getStyleKeys().map((key, i) => (
                        <li key={`model-${i}`}>
                            <Skeleton variant='rectangular' width={60} height={60} />
                            <Skeleton variant='text' width={100} height={20} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={orderStyles.product__section}>
                <Skeleton variant='text' width={150} height={25} />
            </div>
            <div className={orderStyles.product__section}>
                <Skeleton variant='text' width={150} height={25} />
            </div>
            <div className={orderStyles.product__section}>
                <Skeleton variant='text' width={150} height={25} />
            </div>
            <div className={orderStyles.product__section}>
                <Skeleton variant='text' width={150} height={25} />
            </div>
        </div>
    )
}