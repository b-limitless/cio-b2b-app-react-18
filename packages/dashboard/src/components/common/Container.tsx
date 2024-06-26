import React, { useState } from "react";
import ArrowRight from "../../assets/svg/arrow-right.svg";
import { menuIds } from "../../config/navMenu";
import SideMenu from "./SideMenu";
import { useSelector } from "react-redux";
import useSetAuthenticatedUser from "../../hooks/useSetAuthenticatedUser";
import { RootState } from "../../store";
import useOrderReceiveNotification from "./EventSource/Order";
import Seetings from "../dashboard/Settings";
import Profile from "../dashboard/Profile";

interface ContainerInterface {
    setSelectedMenu: Function,
    selectedMenu: menuIds,
    setShowSettingModel: Function,
    showSettingModel: boolean;
    children: any;
    [x: string]: any;

}

export default function Container({ navigateFromCell, setSelectedMenu, children }: ContainerInterface) {

    const [loading, setLoading] = useState(false);
    const { auth } = useSelector((state: RootState) => state.auth) || { auth: null };

    useSetAuthenticatedUser({ setLoading, navigateFromCell });
    useOrderReceiveNotification();

    if (loading) {
        return <div className="loading">
            <div className="loader">Please wait....</div>
        </div>
    }

    if (!auth && !loading) {
        return null;
    }

    if(!auth) {
        return <div>Un Authorized</div>
    }


    if (auth && !loading) {
        return (
            <>
                <Seetings />
                <Profile />
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
                            navigateFromCell={navigateFromCell}
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