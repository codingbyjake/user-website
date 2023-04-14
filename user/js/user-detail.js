let params = {};

const loaded = () => {
    getUrlParams();
    getDetailUser(params.id);
}

const getUrlParams = () => {
    let url = document.URL;
    let urlParts = url.split("?");
    let id = urlParts[1];
    let kv = id.split("=");
    params[kv[0]] = +kv[1];
    return params;
}

const getDetailUser = async (id) => {
    const user = await getUserById(id);
    render(user);
}

const render = (user) => {
    setDetailProperty("pId", user.id);
    setDetailProperty("pFirstname", user.firstname);
    setDetailProperty("pLastname", user.lastname);
    setDetailProperty("pUsername", user.username);
    setDetailProperty("pPhone", user.phone);
    setDetailProperty("pEmail", user.email);
    setDetailProperty("pReviewer", (user.isReviewer ? "Yes" : "No"));
    setDetailProperty("pAdmin", (user.isAdmin ? "Yes" : "No"));
}

const setDetailProperty = (idAttr, val) => {
    document.getElementById(idAttr).value = val;
}

const backToList = () => {
    document.location.href = "user-list.html";
 }

 const removeUser = async () => {
    getUrlParams()
    let status = await deleteUser(params.id);
    if(status === 204){
        backToList();
    }
 }