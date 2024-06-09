'use client';
import { productStyles } from 'config/models';
import { IStyles } from 'interface/IProductStyle.interface';
import ProductStyles from './ProductStyles';
import styles from './styles.module.scss';
import Loader from './ProductStyles/Loader';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import useFetchStyle from 'hooks/useFetchStyle';

export default function Styles({collarAccent, cuffAccent }: IStyles) {
    const {styles:modelStyles} = useSelector((state: RootState) => state);
    
    // useFetchStyle();
   
    return (
        <>
            {/* {modelStyles.loading && <div className={styles.styles__container}>
                {productStyles.map((product, i) =>
                    <Loader key={`product-style-${i}`}
                        childrens={product.childrens}
                    />)}
            </div>}

            {modelStyles.data.length && !modelStyles.loading &&  <div className={styles.styles__container}>
                {modelStyles.data.map((product, i) =>
                    <ProductStyles key={`product-style-${i}`}
                        type='style'
                        label={product.label}
                        childrens={product.childrens}
                        code={product.code}
                        setShowAccentFebricModel={() => null}
                        showAccentFebricModel={false}
                        collarAccent={collarAccent}
                        cuffAccent={cuffAccent}
                    />)}
            </div>} */}


             <div className={styles.styles__container}>
                {productStyles.map((product, i) =>
                    <ProductStyles key={`product-style-${i}`}
                        type='style'
                        label={product.label}
                        childrens={product.childrens}
                        code={product.code}
                        setShowAccentFebricModel={() => null}
                        showAccentFebricModel={false}
                        collarAccent={collarAccent}
                        cuffAccent={cuffAccent}
                    />)}
            </div>

        </>

    )
}
