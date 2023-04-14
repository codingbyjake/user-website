

const loaded = () => {
    document.getElementById("pId").value = "Auto-Generated";
}

const getDetailUser = async (id) => {
    const user = await getUserById(id);
    render(user);
}

// const render = (user) => {
//     setDetailProperty("pId", user.id);
//     setDetailProperty("pFirstname", user.firstname);
//     setDetailProperty("pLastname", user.lastname);
//     setDetailProperty("pUsername", user.username);
//     setDetailProperty("pPassword", user.password);
//     setDetailProperty("pPhone", user.phone);
//     setDetailProperty("pEmail", user.email);
//     setDetailChecked("pReviewer", user.isReviewer);
//     setDetailChecked("pAdmin", user.isAdmin);
// }

// const setDetailProperty = (idAttr, val) => {
//     document.getElementById(idAttr).value = val;
// }

// const setDetailChecked = (idAttr, bool) => {
//     document.getElementById(idAttr).checked = bool;
// }

const save = async () => {
    let user = getUserFromUI();
    console.log(`user.id ${user.id} | user ${user}`);
    let status = await postUser(user);
    if(status === 201){
        document.location.href = "user-list.html";
        }
}

const getUserFromUI = () => {
    let user = {
        id: 0,
        firstname: getValFromUI("pFirstname"),
        lastname: getValFromUI("pLastname"),
        username: getValFromUI("pUsername"),
        password: getValFromUI("pPassword"),
        phone: getValFromUI("pPhone"),
        email: getValFromUI("pEmail"),
        isReviewer: getChkFromUI("pReviewer"),
        isAdmin: getChkFromUI("pAdmin")
    }
    console.debug("getUserFromUI", user);
    return user;
}

const getValFromUI = (idAttr) => {
   let val = document.getElementById(idAttr).value;
   return val;
}

const getChkFromUI = (idAttr) => {
    let val = document.getElementById(idAttr).checked;
    return val;
 }

 const backToList = () => {
    document.location.href = "user-list.html";
 }

