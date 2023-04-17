const $nameUser = document.getElementById("userName"),
$btnSubmit = document.getElementById("btnSubmit"),
$respositories = document.getElementById("respositorios"),
$seguidores = document.getElementById("seguidores"),
$seguidos = document.getElementById("seguidos"),
$type = document.getElementById("type"),
$location = document.getElementById("location");


const $imgAvatar = document.getElementById("imgAvatar");





const urlGithub = "https://api.github.com/users/";


async function getUserGithub (){
    
    let userNameGit = $nameUser.value;

    const response = await fetch(urlGithub + userNameGit);

    const data = await response.json();

    const userData = data;

    console.log(userData)


    let img = userData.avatar_url;

    $imgAvatar.setAttribute("src",img)
 

    $respositories.textContent=userData.public_repos;

    $seguidores.textContent=userData.followers;

    $seguidos.textContent = userData.following;

    $location.textContent = userData.location;

    $type.textContent = userData.type;

}



$btnSubmit.addEventListener("click",getUserGithub)









































