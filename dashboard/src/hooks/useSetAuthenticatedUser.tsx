import { request } from '../utils/request';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticatedUser } from '../reducers/authSlice';
import { APIS } from '../apis';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

interface AuthenticatedUserInterface {
    setLoading: Function;
    navigateFromCell:Function;
}
export default function useSetAuthenticatedUser({ setLoading, navigateFromCell }: AuthenticatedUserInterface) {

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
                navigateFromCell();
                
            }
            setLoading(false);

        }
        // if (auth) {
        //     setLoading(false);
        // }
        if (!auth) {
            setLoading(true);
            fetchCurrentUser();
        }
    }, []);
    return null;
}
