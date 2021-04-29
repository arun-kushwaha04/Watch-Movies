moviename = document.getElementsByClassName("movie-name")[0];
addbtn = document.querySelector("Button");
hollywood = document.getElementById("hollywood");
bollywood = document.getElementById("bollywood");
anime = document.getElementById("anime");
ul = document.getElementById("watchList");
let movieType;
// moviename.addEventListener("input", () => {
//     console.log(moviename.value);
// });

addbtn.addEventListener("click", () => {
    if (moviename.value == "") {
        alert("Please enter Movie Name");
        return;
    }
    if (hollywood.checked == true) {
        movieType = hollywood.value;
        hollywood.checked = false;
    } else if (bollywood.checked == true) {
        movieType = bollywood.value;
        bollywood.checked = false;
    } else if (anime.checked == true) {
        movieType = anime.value;
        anime.checked = false;
    } else {
        alert("Please select movie type");
    }
    console.log(moviename.value);
    console.log(movieType);
    addelement(moviename.value, movieType);
    moviename.value = "";
});

function strike(ele) {
    console.log(ele.parentNode.children[0].innerHTML);
    ele.parentNode.children[0].classList.toggle("text-strike");
    if (ele.innerHTML == "Watched") {
        ele.innerHTML = "Not Watched";
    } else {
        ele.innerHTML = "Watched";
    }
};

function removelist(ele) {
    console.log(ele.parentNode);
    ele.parentNode.remove();
    // if (ul.children.size == 0) {
    //     ul.remove();
    // }
};


function addelement(moviename, movietype) {
    let li = document.createElement("li");
    console.log(moviename);
    if (movietype == "hollywood") {
        li.innerHTML = "<p>" + moviename + "</p> <button class=\"btn-2 watched\" type=\"button\" onclick=\"strike(this)\">Watched</button> <button class=\"btn-2 remove\" type=\"button\" onclick=\"removelist(this)\">Remove</button> <button class=\"btn-2 link\" type=\"button\"><a href=\"https://themoviesflix.cc/?s=" + moviename + " \"target=\"_blank\">Links</a></button>"
    } else if (movietype == "bollywood") {
        li.innerHTML = "<p>" + moviename + "</p> <button class=\"btn-2 watched\" type=\"button\" onclick=\"strike(this)\">Watched</button> <button class=\"btn-2 remove\" type=\"button\" onclick=\"removelist(this)\">Remove</button> <button class=\"btn-2 link\" type=\"button\"><a href=\"https://hdmoviesflix.co/?s=" + moviename + " \"target=\"_blank\">Links</a></button>"
    } else {
        li.innerHTML = "<p>" + moviename + "</p> <button class=\"btn-2 watched\" type=\"button\" onclick=\"strike(this)\">Watched</button> <button class=\"btn-2 remove\" type=\"button\" onclick=\"removelist(this)\">Remove</button> <button class=\"btn-2 link\" type=\"button\"><a href=\"https://animeflix.in/?s=" + moviename + " \"target=\"_blank\">Links</a></button>"
    }
    console.log(li);
    ul.appendChild(li);
    console.log(ul.children[ul.children.length - 1]);

};