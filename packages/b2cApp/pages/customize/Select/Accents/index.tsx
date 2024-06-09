import React from 'react';
import styles from '../Styles/styles.module.scss';
import ProductStyles from '../Styles/ProductStyles';
import { accentsStyles, productStyles } from 'config/models';
import { IAccents } from 'interface/IProductStyle.interface';
import useFetchAccents from 'hooks/useFetchAccents';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import Loader from '../Styles/ProductStyles/Loader';
import { camelCaseToNormal } from 'functions/camelCaseToNormal';

export default function Accents({ setShowAccentFebricModel, showAccentFebricModel, setActiveAccent }: IAccents) {
    const {loading, data, error} = useSelector((state:RootState) => state.accents);

    useFetchAccents();

    // return  <>
    // {loading && <div className={styles.styles__container}>
    //         {productStyles.map((product, i) =>
    //             <Loader key={`product-style-${i}`}
    //                 childrens={product.childrens}
    //             />)}
    //     </div>}

    // {!loading && data.length > 0 &&  <div className={styles.styles__container}>
    //     {data.map((accent, i) =>
    //         <ProductStyles key={`product-style-${i}`}
    //             label={camelCaseToNormal(accent.label)}
    //             childrens={accent.childrens}
    //             code={accent.code}
    //             setShowAccentFebricModel={setShowAccentFebricModel}
    //             showAccentFebricModel={showAccentFebricModel}
    //             type='accent'
    //             setActiveAccent={setActiveAccent}
                
    //         />)}

    // </div>}
    // </>
    return (
       
        <div className={styles.styles__container}>
            {accentsStyles.map((accent, i) =>
                <ProductStyles key={`product-style-${i}`}
                    label={accent.label}
                    childrens={accent.childrens}
                    code={accent.code}
                    setShowAccentFebricModel={setShowAccentFebricModel}
                    showAccentFebricModel={showAccentFebricModel}
                    type='accent'
                    setActiveAccent={setActiveAccent}
                    
                />)}

        </div>
    )
}



