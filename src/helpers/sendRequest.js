const sendRequest = async (url) => {
    try {
        const response = await fetch(url);
        
        if(response.status !== 200) {
            throw new Error("Failed to retrieve data");
        } else {
            return await response.json();
        }
    } catch(e) {
        console.log(e)
    }
}

export default sendRequest;