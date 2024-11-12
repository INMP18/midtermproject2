const apiKey = 'c717d8b63235a122602b21582f79e988'

async function displayMovies() {


    const select = document.querySelector('select');
    let url;
    switch (select.value) {
        case 'Popularity':
            url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey;
            break;
        case 'Rating':
            url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey;
            break;
        default:
            url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey;
            break;
    }
    let response = await fetch(url);
    let movies = await response.json();
    console.log(url)
    console.log(movies);
    const showmovies = document.querySelector('.showfilms');
    showmovies.innerHTML = '';    
    movies.results.map((movie) => {
        const card = document.createElement('div');
        card.classList.add('cardwirhfilm');
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        img.classList.add('img');
        const moviename = document.createElement('div');
        moviename.classList.add('moviename');
        moviename.innerHTML = movie.title;
        card.appendChild(img);
        card.appendChild(moviename);
        showmovies.appendChild(card);
        card.onclick = () => {
            window.location.href = 'Movie2.html?id=' + movie.id;
        }
    })
}

displayMovies();

async function searchMovies() {
    const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + document.querySelector('input').value);
    const movies = await response.json();
    console.log(movies);
    const showmovies = document.querySelector('.showfilms');
    showmovies.innerHTML = '';
    movies.results.map((movie) => {
        const card = document.createElement('div');
        card.classList.add('cardwirhfilm');
        const img = document.createElement('img');
        img.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        img.classList.add('img');
        const moviename = document.createElement('div');
        moviename.classList.add('moviename');
        moviename.innerHTML = movie.title;
        card.appendChild(img);
        card.appendChild(moviename);
        showmovies.appendChild(card);
        card.onclick = () => {
            window.location.href = 'Movie2.html?id=' + movie.id;
        }
    })
}
