export const PHONE_REGEX = /^0[5-7]\d{8}$/;
export const PHONE_PREFIX_REGEX = /^0[5-7]/;

export const PASSWORD_REGEX = /^.{8,}$/;

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

export const ANY_NON_DIDIGT_AND_ARABIC_REGEX =
  /[\u0621-\u064A\u0660-\u0669]|[\D]/;

export const CIN_REGEX = /^[A-Za-z]+.*\d+$/;
export const NUMBER_REGEX = /^\d+/;

export const BILLNO_REGEX = /^[A-Z][d0-9]{1,11}$/;

export const CODE_PAYMENT_REGEX = /^\d{4}$/;

export const PLATFORM = 'web';

export const ARABIC_REGEX = /[\u0621-\u064A\u0660-\u0669]/;

export const BIRTH_DATE_REGIX =
  /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;

export const ONLY_LETTERS_REGIX = /^[A-Za-z]+$/;

export const CIVILITY = {
  MR: 'mr',
  MME: 'mme',
};
export const IS_CLIENT_INWI = {
  YES: 'Oui',
  NO: 'Non',
};

export const ADRESSE = {
  ADRESSE_SAISIE: 'adresseSaisie',
  OTHER: 'autre',
};

export const MOBILE_SIZE = 600;

export const MAX_WIDTH = 1190;

export const PRODUCT_CATEGORY_ROAMING_ID = 84;
export const RECHARGE_TYPE_PROMOSTAR = 'promostar';
export const CONTENT_PAGE_TYPE = 'category';
export const CMS_CONTENT_PAGE_TYPE = 'cms_page';
export const HOME_CONTENT_PAGE_TYPE = 'homepage';
export const CORPORATE_HOME_CONTENT_PAGE_TYPE = 'homepagecorporate';
export const CATEGORY_TYPE_IDAR = 'i-Dar';
export const CATEGORY_TYPE_OFFERSVACANCIERS = 'Vacay-wifi by inwi';
export const ENGAGEMENT_TYPE_IDAR = 'Avec engagement';
export const CGU = {
  IDENTIFICATION: 'identification_cgu',
  MAIN: 'main_cgu',
  MIGRATION: 'migration_cgu',
};
export const DEFAULT_COUNTRY_CODE = 'MA';

export const B2C = 'b2c';
export const B2B = 'b2b';
export const BILLNO = 'billNo';
export const DAY_ON_SECOND = 86400;
export const BANNER_PAGE_PATH = '/blocks/images/';
export const IMAGE_PATH = '/api/v1/ms-content/media/';

export const PURPOSE_OF_IDENTIFICATION = 'IDENTIFICATION_PROCESS';
export const PURPOSE_OF_MIGRATION = 'MIGRATION_PROCESS';

export const MAR = 'MAR';
export const OS = {
  ANDROID: 'android',
  IOS: 'ios',
  UNKNOWN: 'unknown',
};

export const POSTPAID = 'postpaid';

export const PAYLOAD_BLUR_IMAGE = {
  q: 5,
  p: true,
};

export const OPEN_SUNDAY = '1';
export const PATH_IMAGE_PRODUCT = 'catalog/product';

export const YOUTUBE_EMBED = 'https://www.youtube.com/embed/';

export const TYPE_OTP_CONTACT = 'contact';
export const TYPE_OTP_IDENTITY = 'identity';
export const STRING_CARACTER = 'string';

export const CODE_REASON_COMEBACK = '72';

export const ERROR_CLIENT_FORGET_PASSWORD = 'contact_00001';
