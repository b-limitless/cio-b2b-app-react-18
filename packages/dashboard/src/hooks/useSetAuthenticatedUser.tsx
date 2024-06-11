// If this is in production and in isolated service 
// We are redirecting the user to the another domain such as auth.domain.com
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APIS } from '../apis';
import { authenticatedUser } from '../reducers/authSlice';
import { RootState } from '../store';
import { request } from '../utils/request';
import { isDev } from '../env';
import { redirectToSignin } from '../functions/reDirectTo';

interface AuthenticatedUserInterface {
    setLoading: Function;
    navigateFromCell:Function;
}
export default function useSetAuthenticatedUser({ setLoading, navigateFromCell }: AuthenticatedUserInterface) {

    const { auth } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const { currentUser } = await request({
                    url: APIS.auth.currentUser,
                    method: 'get'
                });
                dispatch(authenticatedUser(currentUser));
                
            } catch (err) {
                console.error('Count not fetch current user', err);
                if(navigateFromCell) {
                    navigateFromCell();
                }

                
                if(!isDev()) {
                    redirectToSignin();
                }
                
                
            }
            setLoading(false);

        }
        if (!auth) {
            setLoading(true);
            fetchCurrentUser();
        }
    }, []);
    return null;
}
