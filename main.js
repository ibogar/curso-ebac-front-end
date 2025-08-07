document.addEventListener('DOMContentLoaded', function (){
    const avatar = document.querySelector("#profile-avatar");
    const name = document.querySelector("#profile-name");
    const username = document.querySelector("#profile-username");
    const repos = document.querySelector("#repositories");
    const followers = document.querySelector("#followers");
    const following = document.querySelector("#following");
    const pLink = document.querySelector("#profile-link");

    fetch('https://api.github.com/users/ibogar')
        .then(function(answer){
            return answer.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            pLink.href = json.html_url;
        })
})