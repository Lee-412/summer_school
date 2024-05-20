import { fetcher } from "./api";

export async function getArticleData() {
    return await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/news?populate=*`, undefined)
}

export async function postArticleData(data: object) {
    const option = {
        method: "POST",
        mode: "cor",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type":"application/json"

        },
        redirect: "folow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    }
    const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/news`, option)
    return response.json()
 }
