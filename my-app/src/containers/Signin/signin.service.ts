import { createAsyncThunk } from "@reduxjs/toolkit"
import api, { getApiMobiblancBaseUrl } from "helpers/api";
import request from "helpers/request";
import { getFromLocalStorage } from "helpers/utils";
import { UserType } from "./user.type";
import jwt_decode from "jwt-decode"


// export const refreshRequest = async (refreshToken: string) => {
//     try {
//         let currentDate = new Date();
//         const decodedRefreshToken: any = jwt_decode(refreshToken);
//         if (decodedRefreshToken.exp * 1000 > currentDate.getTime()) {
//             const { response: user } = await request({
//                 method: 'POST',
//                 baseURL: getApiMobiblancBaseUrl(),
//                 path: '/api/ms-iam/v1/refresh-token',
//                 payload: { refreshToken },
//             });
//             if (user?.status === 200) {
//                 localStorage.setItem('user', JSON.stringify(user.data));
//                 return user.data;
//             }
//             return null;
//         } else {
//             localStorage.removeItem('user');
//             localStorage.removeItem('cartId');
//             localStorage.removeItem('profile');
//             localStorage.removeItem('selectedLine');
//         }
//     } catch (error: any) {
//         return null;
//     }
// };

// export const getUserData = async () => {
//     const userItem = getFromLocalStorage('user', '{}');
//     const userData: UserType = JSON.parse(userItem);
//     try {
//         if (userData && Object.values(userData).length > 0) {
//             const decodedAccessToken: any = jwt_decode(userData.accessToken);
//             if (decodedAccessToken.exp * 1000 < new Date().getTime()) {
//                 return await refreshRequest(userData.refreshToken);
//             }
//             return userData;
//         }
//     } catch (error: any) {
//         return { error: error.response?.data?.error || null };
//     }
// };

export const getMainLine = () => {

}

// export const getProfile = async () => {
//     try {
//         let user: any = await getUserData();

//         const response = await request({

//         })
//         const axiosOptions: any = {
//             headers: {
//                 Allow: 'GET',
//                 'Content-type': 'Application/json',
//                 Authorization: `${user.tokenType} ${user.accessToken}`,
//             },
//         };
//         let res = {};
//         await api
//             .get(`${getApiMobiblancBaseUrl()}/api/ms-client/v1/profile`, axiosOptions)
//             .then((response: any) => {
//                 if (response.status === 200) {
//                     localStorage.setItem('profile', JSON.stringify(response.data));
//                     localStorage.setItem(
//                         'selectedLine',
//                         JSON.stringify(getMainLine(response.data)),
//                     );
//                     res = response.data;
//                 } else {
//                     localStorage.removeItem('user');
//                     localStorage.removeItem('cartId');
//                     localStorage.removeItem('profile');
//                     localStorage.removeItem('selectedLine');
//                 }
//             });
//         return res;
//     } catch (error: any) {
//         return { error: error.response?.data?.error || '' };
//     }
// };

// export const loginRequest = createAsyncThunk
//     (
//         'signin/getUser',
//         async (payload: {
//             username: string;
//             password: string;
//             successAction: Function;
//             failedAction: Function;
//         }) => {
//             const { response: user, error } = await request({
//                 method: 'POST',
//                 baseURL: getApiMobiblancBaseUrl(),
//                 path: '/api/ms-iam/v1/signin',
//                 payload,
//             });
//             if (user?.status === 200) {
//                 localStorage.setItem('user', JSON.stringify(user.data));
//                 await getProfile();
//                 payload.successAction();
//                 return user.data;
//             }
//             if (error) {
//                 const err = error.response?.data?.error || ''
//                 payload.failedAction(err);
//                 return { error:err };
//             }
//         },
//     );