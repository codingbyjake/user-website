// const url = "http://localhost:5000/api/users";
// const baseurl = "http://localhost:5000";
// const userurl = `${baseurl}/api/users`;

// ****************** Fetch Functions ******************
let users = [];

const loaded = async () => {
    users = await getAllUsers();
    render()
}

const render = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let user of users){
        let row = "<tr>";
        row += `<td>${user.id}</td>`;
        row += `<td>${user.username}</td>`;
        row += `<td>${user.password}</td>`;
        row += `<td>${user.firstname}</td>`;
        row += `<td>${user.lastname}</td>`;
        row += `<td>${user.phone}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.isReviewer}</td>`;
        row += `<td>${user.isAdmin}</td>`;
        row += `<td>`;
        row += `<a href="user-detail.html?id=${user.id}">Detail | </a>`;
        row += `<a href="user-change.html?id=${user.id}">Change</a>`;
        row += `</td>`;
        row += `</tr>`;
        tbody.innerHTML += row;
    }
}

// ****************** Data Creation ******************
const user = {
    id: 12, username: "xx", password: "aa", firstname: "uhaveaname", lastname: "doi?", phone: "811", email: "x@systrem", isReviewr: true, isAdmin: false
};


// ****************** Function Calls ******************

//putUser(12, user);
//postUser(user);
//getUserById(2);
//deleteUser(12);
//getAllUsers();

