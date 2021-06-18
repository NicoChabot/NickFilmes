const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = '6ca16e3d0799d76ccd0782685dba8f89';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function mostrarfilmes() {
    xhr = new XMLHttpRequest();
    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = exibeFilmes;
    xhr.send();
    $.ajax({
        url: TMDB_ENDPOINT + '/movie/now_playing',
        data: {
            api_key: '6ca16e3d0799d76ccd0782685dba8f89'
        }
    })

    .done(function data() {
        let codigoHTML = '';
        for (let i = 0; i < data.results.length; i++) {
            let nomeFilme = data.results[i].title;
            let sinopse = data.results[i].overview;
            let imagem = IMG_PREFIX + data.results[i].poster_path;

            textoHTML += `<div class="card col-md-2">
                <img src="${imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nomeFilme}</h5>
                    <p class="card-text">${sinopse}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`;
            $('#listafilmes').html(codigoHTML);

    document.getElementById('tela').innerHTML = textoHTML

        }
    });
    $(document).ready(function() {
        mostrarfilmes()
        $('#btnbusca').click(pesquisaFilmes)
    })

    function pesquisaFilmes() {
        xhr = new XMLHttpRequest();

        query = document.getElementById('pesquisa').value;

        xhr.open('GET', TMDB_ENDPOINT + '/search/movie' + '?api_key=' + APIKEY + '&query=' + query, true);
        xhr.onload = mostraFilmes();
        xhr.send();
    }

}
