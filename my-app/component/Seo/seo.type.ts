import { ReactElement } from "react";

export interface SeoType {
    meta: {
        metaTitle?: string | null;
        metaDescription?: string | null;
        metaKeywords?: string | null;
        ogImage?: string | null;
        ogDescription?: string | null;
        ogTitle?: string | null;
    };
    children: ReactElement;
}