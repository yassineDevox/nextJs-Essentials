import { PLATFORM } from 'constants/commons';
import { v4 as uuidv4 } from 'uuid';

export const getFromLocalStorage = (key: string, def: any = '[]') => {
    return localStorage.getItem(key) || def
}


export const generateSdata = (lang: string, canal = 'myinwi') => {
    return Buffer.from(
        JSON.stringify({
            channel: PLATFORM,
            // eslint-disable-next-line camelcase
            application_origin: canal,
            uuid: uuidv4(),
            language: lang ?? 'fr',
            appVersion: 1,
        }),
    ).toString('base64');
};
