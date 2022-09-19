const fetchBasic = (url: string, body?: any, method: string = "GET") => {
    return fetch(url, {
        ...(body ? {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
        } : {}),
        method,
    })
}

export { fetchBasic }