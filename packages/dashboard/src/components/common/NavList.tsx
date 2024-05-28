import React, { Fragment, ReactNode } from "react";
import ArrowDown from "../../assets/svg/arrow-down.svg";
import { Link, useNavigate } from "react-router-dom";
import { splitTitleToUrl } from "../../pure-functions/splitTitleToUrl";

interface NavListInterface {
    row: any;
    i: number;
    setSelectedMenu: Function
}

interface LinkMenuInterface {
    children: ReactNode;
    childrens: any[];
    title: string;
}

export default function NavList({ row, i, setSelectedMenu }: NavListInterface) {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(`/${row.title}`)
    }
    return (
        <>
            <li className="item base-list" key={i} onClick={() => row.children.length === 0 ? setSelectedMenu(row.title) : null}>
                <input type="radio" name="ci-root-menu" id={`cio-product-li-${i}`} className="major-list" />

                <label className="title-icon" htmlFor={`cio-product-li-${i}`}>
                    {row.children.length === 0 && <span className="label-link" onClick={() => navigateTo()}>
                        <span className="icon">
                            {row.icon}
                        </span>
                        <span className="title">{row.title}</span>
                        {
                            row.children.length > 0 && <span className="arrow">
                                <ArrowDown />
                            </span>

                        }
                    </span>}

                    {row.children.length > 0 && <>
                        <span className="icon">
                            {row.icon}
                        </span>
                        <span className="title">{row.title}</span>

                        <span className="arrow">
                            <ArrowDown />
                        </span>


                    </>}

                </label>
                <ul className="sub--ul">
                    {row.children.map((list: any, j: number) => <Fragment key={`${i}-${j}`}>
                        <input type="radio" name="sub-menu-checkbox" id={`ci-title-${i}-${j}`} className="sub-menu-checkbox" />

                        {/* splitTitleToUrl */}
                        <Link to={`/${row.title.toLowerCase()}${splitTitleToUrl(list.title)}`}>
                            <label htmlFor={`ci-title-${i}-${j}`} onClick={() => row.children.length > 0 ? setSelectedMenu(`${row.title}_${list.title}`) : null}>
                                <li className="sub--li" >{list.title}</li>
                            </label>
                        </Link>

                    </Fragment>)}
                </ul>
            </li>
        </>
    )
}