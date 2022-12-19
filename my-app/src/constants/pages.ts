import { CMS_CONTENT_PAGE_TYPE, CONTENT_PAGE_TYPE } from './commons';

export const PAGES = {
  HOME: '/',
  HOME_B2B: '/entreprise',
  HOME_CORPORATE: '/corporate',
  SERVICES: '/services',
  ADD_LINE_MOBILE: '/myinwi/ajout-ligne/mobile',
  ADD_LINE_HOME: '/myinwi/ajout-ligne/home',
  ADD_LINE: '/myinwi/ajout-ligne',
  MANAGE_LINES: '/myinwi/mes-lignes',
  INVOICE: '/myinwi/mes-factures',
  DASHBOARD: '/myinwi/dashboard',
  DASHBOARD_DETAIL: '/myinwi/dashboard/details',
  SIGNUP_MOBILE: '/myinwi/inscription/mobile',
  SIGNUP_HOME: '/myinwi/inscription/home',
  SIGNUP: '/myinwi/inscription',
  RESET_PASSWORD: '/myinwi/recuperation-mdp',
  CGU: '/cgu',
  SIGNIN: '/myinwi/login',
  PROFILE: '/myinwi/mon-compte',
  UPDATE_EMAIL: '/myinwi/mon-compte/changement-email',
  UPDATE_INFO: '/myinwi/mon-compte/changement-info',
  UPDATE_PASSWORD: '/myinwi/mon-compte/changement-mdp',
  UPDATE_PROFILE_PICTURE: '/myinwi/mon-compte/changement-photo',
  ADDRESS: '/myinwi/mon-compte/mon-adresse',
  ROAMING: '/myinwi/roaming',
  RECHARGE: '/myinwi/recharges',
  ASSISTANCE: '/myinwi/assistance',
  ASSISTANCE_REQUEST_PUK: '/myinwi/assistance/recuperation-puk',
  ASSISTANCE_SWAP: '/myinwi/assistance/swap-sim',
  SUSPEND_LINE: '/myinwi/assistance/suspension-ligne',
  MY_LINES: '/myinwi/services',
  CHANGE_SIM: '/myinwi/services/changement-sim',
  CHANGE_NUMBER: '/myinwi/services/changement-numero',
  CONFIRM_CHANGE_NUMBER:
    '/myinwi/services/changement-numero/ConfirmChangeNumber',
  CHANGE_OFFER: '/myinwi/services/changement-offre',
  CHANGE_OFFER_CONFIRMATION: '/myinwi/services/changement-offre-confirmation',
  IDENTIFICATE_LINE: '/myinwi/services/identification-ligne',
  MIGRATION_OFFER: '/myinwi/services/migration',
  MIGRATION_OFFER_STEPS: '/myinwi/services/migration/etape',
  PAYMENT_RECHARGES: '/myinwi/recharges/paiement',
  PAYMENT_RECHARGES_SUCCESS: '/myinwi/recharges/paiement/ok',
  PAYMENT_RECHARGES_FAIL: '/myinwi/recharges/paiement/echoue',
  PAYMENT_INVOICES_SUCCESS: '/myinwi/mes-factures/paiement/ok',
  PAYMENT_INVOICES_FAIL: '/myinwi/mes-factures/paiement/echoue',
  PAYMENT_INVOICES: '/myinwi/mes-factures/paiement',
  PAYMENT_CB: '/myinwi/paiement/cb',
  OFFRES_WIFI: '/particuliers/offres-internet',
  PAYMENT_SCRATCH_CARD: '/myinwi/paiement/scratchCard',
  PURCHASE_OFFER_MOBILE_CLIENT_INFO:
    '/particuliers/achat/offre-mobile/info-client?productId=',
  PURCHASE_OFFER_CHOOSE_NUMBER:
    '/particuliers/achat/offre-mobile/choix-numero?productId=',
  PURCHASE_IDAR_CHOOSE_DEVICE:
    '/particuliers/achat/idar/choose-device-step?productId=',
  PURCHASE_IDAR_CLIENT_INFO: '/particuliers/achat/idar/info-client?productId=',
  PURCHASE: '/particuliers/purchase',
  PURCHASE_IDAR: '/particuliers/achat/idar',
  PURCHASE_OFFRE_MOBILE: '/particuliers/achat/offreMobile',
  PURCHASE_TERMINAL: '/particuliers/achat/terminal',
  PURCHASE_PAYMENT: '/particuliers/achat/paiement',
  PURCHASE_PAYMENT_SUCCESS: '/particuliers/achat/paiement/ok',
  PURCHASE_PAYMENT_SAVED: '/particuliers/achat/paiement/enregistre',
  PURCHASE_PAYMENT_FAIL: '/particuliers/achat/paiement/echoue',
  INVOICES_PAYEMENT: '/paiement-facture',
  INVOICES_PAYEMENT_DETIALS: '/paiement-facture/paiement',
  RECHARGE_OFFLINE_PAGE: '/particuliers/recharge',
  RECHARGE_PROMO_STAR: '/particuliers/recharges',
  RECAP_RECHARGE: '/particuliers/recharges/recap',
  ADSL: '/particuliers/offres-internet/adsl-xtra',
  SMART_PHONE_DETAIL: '',
  TEST_ELIGIBILITY: '/particuliers/offres-internet/adsl-xtra/test-eligibilite',
  FORFAITS: '/particuliers/offres-mobiles/forfait-mobile',
  SMART_PHONES: '/particuliers/catalogue-smartphones',
  IDAR: '/particuliers/offres-internet/idar-duo',
  PARTICULIERS: 'particuliers/',
  FIBRE_OPTIC: '/particuliers/offres-internet/wifi-a-la-maison/fibre-optique',
  CONTACT_US: '/nous-contacter',
  OFFRES_INTERNET: '/offres-internet',
  OFFERS_VACANCIERS:
    '/particuliers/offres-internet/wifi-a-la-maison/vacay-wifi',
  FAQ: '/faq',
  PASS_RECHARGE: '/particuliers/pass-postpaid',
  HISTORY_APPELS: '/myinwi/dashboard/HistoryAppels',
  HISTORY_APPELS_OTP: '/myinwi/dashboard/HistoryAppels/checkOtp',
  FTTH_TEST:
    '/particuliers/offres-internet/wifi-a-la-maison/fibre-optique?selected=test-fibre-optique',
  CORPORATE_SUPPLIERS: 'corporate/fournisseurs/form',
};

export const NAV_LINKS_MATCHES = {
  FORFAIT_CONTENT_PAGE: 'particuliers/offres-mobiles/forfait-mobile.html',
  FIBRE_PAGE:
    'particuliers/offres-internet/wifi-a-la-maison/fibre-optique.html',
  OFFERS_VACANCIERS_CONTENT_PAGE:
    'particuliers/offres-internet/wifi-a-la-maison/vacay-wifi.html',
  IDAR_CONTENT_PAGE:
    'particuliers/offres-internet/wifi-a-la-maison/idar-duo.html',
  ADSL_CONTENT_PAGE:
    'particuliers/offres-internet/wifi-a-la-maison/adsl-xtra.html',
  OFFRES_INTERNET_CONTENT_PAGE: 'particuliers/offres-internet.html',
  SMART_PHONES_CONTENT_PAGE: 'particuliers/catalogue-smartphones.html',
  RECHARGE_OFFLINE_CONTENT_PAGE: 'particuliers/recharge.html',
  RECHARGE_PROMO_STAR: 'particuliers/recharge/promostar.html',
  INVOICES_CONTENT_PAGE: 'paiement-facture',
  OPTIC_FIBRE:
    'particuliers/offres-internet/wifi-a-la-maison/fibre-optique.html',
  ROAMING: 'roaming',
  PORTABILITY: 'portabilite',
  CONTACT_US: 'nous-contacter',
  CONTACT: 'contacter',
  OUR_AGENCIES: 'nos-agences',
  POST_ACHAT: 'page-explicative-post-achat',
  POST_ACHAT_PORTABILITY: 'page-explicative-post-achat-portabilite',
  FAQ: 'faq',
  PASS_RECHARGE: 'particuliers/recharge/pass.html',
  HOME_PAGE: 'hp',
  ENTERPRISE: 'hp_entreprise',
  CORPORATE: 'hp_corporate',
};

export const BASE_URL = 'https://galaxie-bo-rct.inwi.ma/';

export const PUBLIC_PAGE = [
  PAGES.SIGNIN,
  PAGES.SIGNUP,
  PAGES.SIGNUP_MOBILE,
  PAGES.SIGNUP_HOME,
  PAGES.RESET_PASSWORD,
];

export const EXTERNAL_PAGES = {
  FACEBOOK: 'https://www.facebook.com/inwi.ma',
  TWITTER: 'https://twitter.com/inwi',
  YOUTUBE: 'https://www.youtube.com/user/inwi',
  INSTAGRAM: 'https://www.instagram.com/accounts/login/?next=/inwi_maroc/',
  LINKEDIN: 'https://www.linkedin.com/company/inwi/',
  CALLBACK: 'https://merappeler.inwi.ma/init',
  INWI_FAQ: 'https://inwi.ma/faq',
  INWI_AGENCIES: 'https://inwi.ma/nos-agences',
};
export const PAGE_NOS_AGENCES = '/nos-agences';

export interface IpageStaticElement {
  id: string;
  container: string;
  type: string;
  link: string;
}

interface IPageStatic {
  [key: string]: IpageStaticElement;
}

export const PAGE_STATIC_PARTICULIER: IPageStatic = {
  portabilite: {
    id: 'portabilite',
    container: 'Portability',
    type: CMS_CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.PORTABILITY,
  },
  'catalogue-smartphones': {
    id: 'catalogue-smartphones',
    container: 'SmartPhones',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.SMART_PHONES_CONTENT_PAGE,
  },
  recharges: {
    id: 'recharges',
    container: 'RechargePromoStar',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.RECHARGE_PROMO_STAR,
  },
  'fibre-optique': {
    id: 'fibre-optique',
    container: 'FibreOptic',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.FIBRE_PAGE,
  },
  'offres-internet': {
    id: 'offres-internet',
    container: 'InternetOffer',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.OFFRES_INTERNET_CONTENT_PAGE,
  },
  'pass-postpaid': {
    id: 'pass-postpaid',
    container: 'RechargePromoStar',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.PASS_RECHARGE,
  },
};


export const PAGE_STATIC_PARTICULIER_NESTED: IPageStatic = {
  [PAGES.FORFAITS.replace('/', '')]: {
    id: PAGES.FORFAITS.replace('/', ''),
    container: 'MobileOffers',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.FORFAIT_CONTENT_PAGE,
  },
  [PAGES.OFFERS_VACANCIERS.replace('/', '')]: {
    id: PAGES.OFFERS_VACANCIERS.replace('/', ''),
    container: 'OffersVacanciers',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.OFFERS_VACANCIERS_CONTENT_PAGE,
  },
  [PAGES.FIBRE_OPTIC.replace('/', '')]: {
    id: PAGES.FIBRE_OPTIC.replace('/', ''),
    container: 'FibreOptic',
    type: CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.FIBRE_PAGE,
  },
};
export const PAGE_STATIC_ENTREPRISE_NESTED: IPageStatic = {
  'entreprise/faq': {
    id: 'entreprise/faq',
    container: 'Faq',
    type: CMS_CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.FAQ,
  },
};
export const PAGE_STATIC_ROOT: IPageStatic = {
  'nous-contacter': {
    id: 'nous-contacter',
    container: 'ContactUs',
    type: CMS_CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.CONTACT_US,
  },
  faq: {
    id: 'faq',
    container: 'Faq',
    type: CMS_CONTENT_PAGE_TYPE,
    link: NAV_LINKS_MATCHES.FAQ,
  },
};
