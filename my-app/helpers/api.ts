import axios from 'axios';

const api = axios.create({
  timeout: 100000,
});

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
