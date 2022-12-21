import { AxiosRequestConfig, Method } from 'axios';

import api from './api';
import { getFromLocalStorage } from './utils';

export interface RequestConfig {
    method: Method;
    path: string;
    baseURL: string;
    successAction?: Function;
    failedAction?: Function;
    payload?: any;
    withAuth?: boolean;
}

const request = async (config: RequestConfig & AxiosRequestConfig) => {
    try {
        const user = JSON.parse(getFromLocalStorage('user', '{}'));

        const {
            method,
            baseURL,
            path,
            payload,
            withAuth,
            successAction,
            failedAction,
            ...others
        } = config;

        const axiosOptions: AxiosRequestConfig = {
            method: config.method,
            url: config.baseURL + config.path,
            data: config.payload,
            ...others,
        };

        if (config.withAuth) {
            if (config.headers && axiosOptions.headers)
                axiosOptions.headers.Authorization = `${user.tokenType} ${user.accessToken}`;
            else
                axiosOptions.headers = {
                    Authorization: `${user.tokenType} ${user.accessToken}`,
                };
        }

        const response = await api(axiosOptions);

        if (config.successAction) config.successAction(response);
        return { response };
        
    } catch (error: any) {
        if (config.failedAction) config.failedAction(error);
        return { error };
    }
};

export default request;
