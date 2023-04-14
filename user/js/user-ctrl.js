const baseurl = "http://localhost:5000";
const userurl = `${baseurl}/api/users`;

// ****************** Users GET ******************
const getAllUsers = async () => {
    const json = await getApiAsync(userurl);
    console.log(json);
    return json;
}

const getUserById = async (id) => {
    const json = await getApiAsync(`${userurl}/${id}`);
    console.log(json);
    return json;
}

// ****************** Users POST ******************
const postUser = async (user) => {
    const json = await postApiAsync(`${userurl}`, user);
    console.log("New User: ", json);
    return json;
}

// ****************** Users PUT ******************
const putUser = async (id, user) => {
    const status = await putApiAsync(`${userurl}/${id}`, user);
    console.log(status);
    return status;
}

// ****************** Users DELETE ******************
const deleteUser = async (id) => {
    const status = await deleteApiAsync(`${userurl}/${id}`);
    console.log(status);
    return status;
}