const login = () => {
    let username = getValFromUI("pUsername");
    let password = getValFromUI("pPassword");
    console.log(`username: ${username} | password: ${password}`);
    let status = getUserByUsernameAndPassword(username, password);
    if(status === 200){
        document.location.href = "user-list.html";
    }else{
        console.log(`Login failed!!!`)
    }
}
const loaded = () => {

}
const getValFromUI = (idAttr) => {
    let val = document.getElementById(idAttr).value;
    return val;
 }