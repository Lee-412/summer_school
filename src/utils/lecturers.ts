import { fetcher } from "./api";

export async function getLecturerData() {
    return await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/lecturers?populate=*`, undefined)
}

export async function postLecturerData(data: object) {
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
    const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/lecturers`, option)
    return response.json()
 }
