import { APIS } from 'config/apis';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { request } from 'utils/request';


interface IUseIsCustomerAuthenticated {
    pathname: string;
    query: { [x: string]: string }
}


export default function useIsCustomerAuthenticated({ pathname, query }: IUseIsCustomerAuthenticated) {
    const { token } = useSelector((state: RootState) => state.currentCustomer);
    const router = useRouter();

    useEffect(() => {
        const checkIfCustomerIsAuthenticated = async () => {
            try {
                await request({
                    url: APIS.customer.currentUser,
                    method: 'get',
                });
            } catch (err: any) {
                if (err.response?.status === 401) { }
                router.push({
                    pathname,
                    query
                });
            }
        };

        if (!token) {
            checkIfCustomerIsAuthenticated();
        }
    }, [token, router, pathname, query]);
    return null;
}
