import api from "../../helpers/api"

//api-endpoint
const API_ENDPOINT = {
    getMsContent: (p:any) => `${p.url}/api/v1/ms-content/pages?language=${p.lang}&link=${p.link}&full_display=true&type=${p.type}`,

}



export const getStaticURL = () => process.env.NEXT_PHASE === 'phase-production-build' || process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_GEAR9_API_URL
    : process.env.NEXT_PUBLIC_MS_CONTENT_URL_OCP

export const fetchStaticContent = async (payload:any) => {
    const url = getStaticURL()
    return api.get(API_ENDPOINT.getMsContent(payload))
}