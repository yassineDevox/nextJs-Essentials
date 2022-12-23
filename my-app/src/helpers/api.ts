import axios from 'axios';
import { PAGES } from 'constants/pages';
import { generateSdata, getFromLocalStorage } from './utils';

const api = axios.create({
  timeout: 100000,
});

api.interceptors.request.use(
  (config) => {

    const lang = getFromLocalStorage('language', 'fr');

    const selectedLine = JSON.parse(
      getFromLocalStorage('selectedLine', '{}'));

    const user = JSON.parse(
      getFromLocalStorage('user', '{}'));

    const sdata = generateSdata(
      lang,
      typeof window !== 'undefined' &&
        window.location.pathname.includes('/myinwi/')
        ? 'myinwi'
        : 'inwi.ma',
    );

    const returnedData: any = {
      ...config,
      headers: { ...config.headers, sdata },
    };

    console.log('====================================');
    console.log("returned Data:",returnedData);   
    console.log('====================================');

    // if (returnedData?.headers?.Authorization && !isTokenValid())
    //   return window.open(PAGES.SIGNIN, '_self');

    // if (user && user.tokenType && user.accessToken) {
    //   returnedData.headers[
    //     'Authorization'
    //   ] = `${user.tokenType} ${user.accessToken}`;
    // }
    // if (user?.tokenType && selectedLine?.mdnSegmentationToken)
    //   returnedData.headers[
    //     'mdn-segmentation-token'
    //   ] = `${user.tokenType} ${selectedLine.mdnSegmentationToken}`;

    return returnedData
  },
  (error) => Promise.reject(error)
)

export default api;

export const getApiGear9BaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_GEAR9_API_URL)
    return process.env.NEXT_PUBLIC_GEAR9_API_URL;
  else throw new Error('Base Url GEAR9 NotFound In Env');
};

export const getApiMobiblancBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_MOBIBLANC_API_URL)
    return process.env.NEXT_PUBLIC_MOBIBLANC_API_URL;
  else throw new Error('Base Url MOBIBLANC NotFound In Env');
};

export const getGoogleMapApiKey = (): string => {
  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)
    return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  else throw new Error('google map api key NotFound In Env');
};

export const getApiPprdGear9BaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_GEAR9_API_PPRD_URL)
    return process.env.NEXT_PUBLIC_GEAR9_API_PPRD_URL;
  else throw new Error('Base Url MOBIBLANC NotFound In Env');
};
