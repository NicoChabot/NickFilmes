const TMDB = 'https://api.themoviedb.org/3';
const APIKEY = '6ca16e3d0799d76ccd0782685dba8f89';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function emCartaz() {
    xhr = new XMLHttpRequest();

    xhr.open('GET', TMDB + '/movie/now_playing' + '?api_key=' + APIKEY, true);
    xhr.onload = mostraFilmes();
    xhr.send();
}

function pesquisaFilmes() {
    xhr = new XMLHttpRequest();

    query = document.getElementById('pesquisa').value;

    xhr.open('GET', TMDB + '/search/movie' + '?api_key=' + APIKEY + '&query=' + query, true);
    xhr.onload = mostraFilmes();
    xhr.send();
}


function mostraFilmes() {

    let data = JSON.parse(xhr.responseText);
    let textoHTML = '';

    for (let i = 0; i < data.results.length; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="card col-md-4">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nomeFilme}</h5>
                <p class="card-text">${sinopse}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;
}