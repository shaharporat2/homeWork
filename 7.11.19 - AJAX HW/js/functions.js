/// <reference path="jquery-3.4.1.js" />


$(() => {
    $("#ex1").click(() => {
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/photos",
            error: err => alert("Error" + err.status),
            success: response => {
                displayAlbum(response)
            }
        })
    });


    $("#ex2").click(() => {
        $.ajax({
            method: "GET",
            url: "https://api.chucknorris.io/jokes/random",
            error: err => alert("Error" + err.status),
            success: response => {
                displayJoke(response)
            }
        })
    });

    $("#ex3").click(() => {
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            error: err => alert("Error" + err.status),
            success: response => {
                displayUsers(response)
            }
        })
    });
});

function displayAlbum(albums){
    for(arr of albums){

        const tr = `
            <tr>
                <td> ${arr.albumId} </td>
                <td> ${arr.title} </td>
                <td> 
                    <img src="${arr.thumbnailUrl}">
                </td>
            <tr>
        `
        $("#table1").append(tr);
    }
}

function displayJoke(joke){
    $("#joke").empty();

    const jo = `
        <p> ${joke.value} </p>
        <img src="${joke.icon_url}">
    `
    $("#joke").append(jo);
}

function displayUsers(users){
    for(user of users){
        console.log(user)
        const tr = `
            <tr>
                <td> ${user.name} </td>
                <td> ${user.username} </td>
                <td> ${user.email} </td>
                <td> ${user.address.city} </td>
                <td> ${user.address.street} </td>
            <tr>
        `
        $("#table2").append(tr);

    }
}