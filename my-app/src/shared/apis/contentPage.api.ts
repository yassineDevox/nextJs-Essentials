import api from "../../helpers/api"

// types
export type MsContentType = {
    lang: string | undefined,
    link: string | undefined,
    type: string | undefined
}

//api-endpoint
const API_ENDPOINT = {
    getMsContent: (url: string, p: MsContentType) => `${url}/api/v1/ms-content/pages?language=${p.lang}&link=${p.link}&full_display=true&type=${p.type}`,
    
}


export const getStaticURL = () => process.env.NEXT_PHASE === 'phase-production-build' || process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_GEAR9_API_URL
    : process.env.NEXT_PUBLIC_MS_CONTENT_URL_OCP

export const fetchStaticContent = async (payload: MsContentType) => {
    const url = getStaticURL()
    if(url) return api.get(API_ENDPOINT.getMsContent(url,payload))
}