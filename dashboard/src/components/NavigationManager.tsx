import React, { ReactElement, useEffect, useState } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routing/routes';
import { Provider, useDispatch } from 'react-redux';
import { Store } from '../store';
import Container from './common/Container';
import { menuEnum } from '../config/navMenu';
import { authenticatedUser } from '../reducers/authSlice';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/main.scss';

interface NavigationManagerProps {
  children: ReactElement;
  navigateToSignInPage:Function;
}

export function NavigationManager({navigateToSignInPage, children }: NavigationManagerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState<menuEnum>(menuEnum.Auth_Signin);
  const [showProfileSideModel, setShowProfileSideModel] = useState<boolean>(false);
  const [showSettingModel, setShowSettingModel] = useState<boolean>(false);
  // const dispatch = useDispatch();

 

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      if (location.pathname === pathname || !matchRoutes(routes({navigateToSignInPage}), { pathname })) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener('[shell] navigated', shellNavigationHandler);

    return () => {
      window.removeEventListener('[shell] navigated', shellNavigationHandler);
    };
  }, [location]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('[app1] navigated', { detail: location.pathname })
    );
  }, [location]);

  const queryClint = new QueryClient();

  return <Provider store={Store}>
    <QueryClientProvider client={queryClint}>
      <Container
        setShowSettingModel={setShowSettingModel}
        setShowProfileSideModel={setShowProfileSideModel}
        showSettingModel={showSettingModel}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        navigateToSignInPage={navigateToSignInPage}
      
      >
        {children}
      </Container>
    </QueryClientProvider>


  </Provider>

}
