// ****************** Api Async's ******************

// ****************** GET ******************
async function getApiAsync(url){
    const response = await fetch(url);
   // console.log(response);   // just a look into what response is at this point of the code
    return await response.json();
}
// ****************** POST ******************
async function postApiAsync(url, data){
    const response = await fetch(url, {
        method: "POST",
       // mode: "cors",       // <<<<<<<<<<<<<<<<<<<<< not realy needed for this app
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    // return await response.json();
    return response.status;
}

// ****************** PUT ******************
async function putApiAsync(url, data){
    const response = await fetch(url, {
        method: "PUT",
       // mode: "cors",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.status;
}

// ****************** DELETE ******************
async function deleteApiAsync(url){
    const response = await fetch(url, {
        method: "DELETE"
    });
    return response.status
}