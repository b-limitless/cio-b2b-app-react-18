import React, { useState } from "react";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import { menuIds } from "../../config/navMenu";
import SideMenu from "./SideMenu";
// import './loader.scss';

import { useSelector } from "react-redux";
import useSetAuthenticatedUser from "../../../hooks/useSetAuthenticatedUser";
import { RootState } from "../../store";

interface ContainerInterface {
    setSelectedMenu: Function,
    selectedMenu: menuIds,
    setShowSettingModel: Function,
    showSettingModel: boolean;
    children: any;
    [x: string]: any;

}

export default function Container({ setShowSettingModel, showSettingModel, children, setSelectedMenu, selectedMenu, setShowProfileSideModel, actions, globalDispatch }: ContainerInterface) {

    const [loading, setLoading] = useState(false);
    const { auth: { auth } } = useSelector((state: RootState) => state);



    useSetAuthenticatedUser({ setLoading });

    if (loading) {
        return <div className="loading">
            <div className="loader">Please wait....</div>
        </div>
    }

    if (!auth && !loading) {
        return <div>Un Authorized</div>
    }


    if (auth && !loading) {
        return (
            <>


                <input type="radio" id="toggle-menu-checkbox" className="toggle-menu-checbox" name="toggle-menu-checkbox" />
                <label htmlFor="toggle-menu-checkbox" >
                    <div className="toggal-menu">
                        <ArrowRight />
                    </div>
                </label>
                { }
                <div className="container">
                    <div className="left side--navbar hide">
                        <SideMenu
                            setSelectedMenu={setSelectedMenu}
                            setShowProfileSideModel={setShowProfileSideModel}
                            setShowSettingModel={setShowSettingModel}
                            showSettingModel={showSettingModel}
                            actions={actions}
                            globalDispatch={globalDispatch}
                        />
                    </div>
                    <div className="right services">

                        {children}
                    </div>
                </div>

            </>
        )
    }

    return null;

}