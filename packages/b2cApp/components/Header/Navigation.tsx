import Image from 'next/image';
import { combinedTypes } from 'types/enums';
import styles from './header.module.scss';

export interface navigationRow {
    title: string;
    value: string;
    designJourney?: combinedTypes;
    setDesignJourney?: Function;
    
}


export interface NavigationInterface {
    data: navigationRow[]
    designJourney?: combinedTypes
    setDesignJourney?:Function;
}

const NavigationItem = ({ title, value, designJourney, setDesignJourney }: navigationRow) => {
    return <>
        <input type="radio" className={styles.navigation__radio} name="navigation" id={value} checked={designJourney === value} readOnly/>
        {/* } */}
        <label htmlFor={value} onClick={() => setDesignJourney ? setDesignJourney(value) : null}>
            <li>
                <span>
                    {title}
                </span>
                <span>
                    <Image
                        src={'/icon/arrow-right.svg'}
                        height={11}
                        width={6.29}
                        alt=''
                    >
                    </Image>
                </span>
            </li>
        </label>
    </>
}

export default function Navigation({ data, designJourney, setDesignJourney }: NavigationInterface) {
    return (
        <ul>
            {data.map((item: navigationRow, i) => <NavigationItem key={`navigation-item-${i}`} title={item.title} value={item.value} designJourney={designJourney} setDesignJourney={setDesignJourney}/>)}
        </ul>
    )
}
