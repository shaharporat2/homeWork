/// <reference path="jquery-3.4.1.js" />


$(() => {
    $("#UsersJQ").click(() => {
        $.ajax({
            method: "GET",
            url: "https://reqres.in/api/users",
            error: err => alert("Error" + err.status),
            success: response => {
                displayUsers(response.data);
            }
        })
    });
});


function displayUsers(users){
    console.log(users);
}



(function(){

    let cat = {
        name: "Mitsi",
        age: 4
    };

    console.log(cat.age);
    console.log(cat.name);

    //convert json to string
    let str = (JSON.stringify(cat));
    console.log(str);

    //convert string to object
    let cat2 = JSON.parse(str);
    console.log(cat2)


    let cats = [
    {
        name: "mitsi", age: 4
    },
    {
        name: "kitsi", age: 5
    }
];

    const buttunData = document.getElementById("buttunData");
    buttunData.addEventListener("click", () =>{
        const ajax = new XMLHttpRequest();
        ajax.open("GET", "https://jsonplaceholder.typicode.com/todos");

        ajax.onreadystatechange = () => {
            console.log(ajax.readyState);
            if(ajax.readyState === 4){
                //const divDate = document.getElementById("divDate");
                //divDate.innerHTML = ajax.responseText;
                let arr = JSON.parse(ajax.responseText);

                let ultodos = document.getElementById("ultodos")
                for(const item of arr){
                    const li = `
                    <li>
                        Title: ${item.title}, 
                        complited: ${item.completed}
                    `

                    ultodos.innerHTML += li;
                }
            }
        };

        ajax.send()
    });


    const butttunUsers = document.getElementById("UsersData");
    butttunUsers.addEventListener("click", () =>{
        const ajax2 = new XMLHttpRequest();
        ajax2.open("GET", "https://jsonplaceholder.typicode.com/users");
        ajax2.onreadystatechange = () => {
            if(ajax2.readyState === 4){
                let arr = JSON.parse(ajax2.responseText);
                console.log(arr);
                let user = document.getElementById("user");
                user.innerHTML = "";
                for(const item of arr){
                    const tr = `
                    <tr>
                        <td> ${item.name} </td>
                        <td> ${item.email} </td>
                        <td> ${item.phone} </td>
                    </tr>
                    `
                    user.innerHTML += tr;
                }
            }
        };
        ajax2.send();
    })
})();


