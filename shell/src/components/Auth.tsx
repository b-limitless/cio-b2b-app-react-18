import React, { useState } from 'react';
import { mount } from "auth/AuthApp";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { app1RoutingPrefix } from "../routing/constants";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { authenticatedUser } from '../reducers/authSlice';

const app1Basename = `/${app1RoutingPrefix}`;

export default () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  

  // const {shellAuth} = useSelector((state:RootState) => state.shellAuth); 
  // const setAuth = (body:any) => {
  //   dispatch(authenticatedUser(body));
  // }

  const [auth, setAuth] = useState(null);

  console.log('auth', auth)

  
  useEffect(() => {
    if(auth) {
      navigate('/dashboard/home');
    }
  }, [auth]); 

  // Listen to navigation events dispatched inside app1 mfe.
  useEffect(() => {
    const app1NavigationEventHandler = (event: Event) => {
      const pathname = (event as CustomEvent<string>).detail;
      const newPathname = `${app1Basename}${pathname}`;
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[app1] navigated", app1NavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[app1] navigated",
        app1NavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(app1Basename)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(app1Basename, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});
  // Mount app1 MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(
          app1Basename,
          ''
        ),
        setAuth
      });
      isFirstRunRef.current = false;
    },
    [location, setAuth],
  );

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app1-mfe" />;
};
