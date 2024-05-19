
//method API
export async function fetcher(url: string, options: object|undefined){
    let response;
    let url_fetch;
    url_fetch = new URL(url)
   // let request_option = new RequestInit()
    if(options) {
        
        response = await fetch(url_fetch, options);
    } else {
        response = await fetch(url_fetch);
    }
    
    const data = await response.json();
    return data;
}