import { fetcher } from "./api";

export async function getStudentData() {
    return await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/students`, undefined)
}

export async function postStudentData(data: object) {
    const option = {
        method: "POST",
        mode: "cor",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"

        },
        redirect: "folow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    }
    const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/courses`, option)
    return response.json()
}
export async function patchStudentData(data: object) {
    const option = {
        method: "PATCH",
        mode: "cor",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"

        },
        redirect: "folow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    }
    const response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/courses`, option)
    return response.json()
}