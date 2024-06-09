import { filterData } from 'config/filter';
import Image from 'next/image';
import FilterItem from './FilterItem';
import styles from './filter.module.scss';
interface FilterInterface {
    setShowFilterModel:Function;
    showFilterModel:boolean;
    updateFebricFiltersHandler:Function;
}
export default function Filter({updateFebricFiltersHandler, setShowFilterModel, showFilterModel}: FilterInterface) {
    return (
        <div className={styles.filter + ' ' + (showFilterModel ? styles.show : styles.hide)}>
            <div className={styles.header}>
                <span className={styles.title}>
                    FILTER
                </span>
                <span className={styles.close}>
                    <Image src='/icon/close.svg' width={16} height={16} alt='' onClick={() => setShowFilterModel(false)}/>
                </span>
            </div>
            <div className={styles.num__febrics}>
                <span className={styles.bold}>
                    500
                </span>
                <span className={styles.text}>
                    Febrics
                </span>
            </div>
            <div className={styles.toggle__container}>
                {filterData.map((filter, i) => <FilterItem
                    key={`filter-item-${i}`}
                    name={filter.name} 
                    code={filter.code}
                    childrens={filter.childrens}
                    type={filter.type}
                    updateFebricFiltersHandler={updateFebricFiltersHandler}
                />
                )}
                {}
            </div>
        </div>
    )
}
