import { fetcher } from "./api";

export interface Icourse {
    id: number,
    attributes: {
        name: string,
        Description: [
            {
                type: string,
                children: [
                    {
                        type: string,
                        text: string,
                    }

                ]
            }
        ],
        CourseID: string,
        TuitionFee: 2000000,
        Size: string,
        CurrentSize: string,
        Start: string,
        end: string
    }
}

export async function getCourseData() {
    return await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/courses`, undefined)
}

export async function postCourseData(data: object) {
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
