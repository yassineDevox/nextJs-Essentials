import Head from "next/head"
import { SeoType } from "./seo.type"

const WithSeo = ({ meta: {
    ogTitle,
    metaDescription,
    metaTitle,
    metaKeywords,
    ogDescription,
    ogImage },
    children }: SeoType) => {
    return (
        <>
            <Head>
                {metaTitle && <title>{metaTitle}</title>}
                {metaDescription && (
                    <meta name="description" content={metaDescription} />
                )}
                {metaKeywords && <meta name="keywords" content={metaKeywords} />}
                {ogTitle && <meta property="og_title" content={ogTitle} />}
                {ogDescription && <meta property="og_title" content={ogDescription} />}
                {ogImage && <meta property="og_title" content={ogImage} />}
            </Head>
            {children}
        </>
    )
}

export default WithSeo