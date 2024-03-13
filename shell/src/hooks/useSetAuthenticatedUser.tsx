import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APIS } from '../apis';
import { authenticatedUser } from '../reducers/authSlice';
import { RootState } from '../store';
import { request } from '../utils/request';
interface AuthenticatedUserInterface {
    setLoading: Function;
    navigateToSignInPage: Function;
}
export default function useSetAuthenticatedUser() {
    const { auth: { auth } } = useSelector((state: RootState) => state);
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
            }
        }
        if (!auth) {
            fetchCurrentUser();
        }
    }, []);
    return null;
}
