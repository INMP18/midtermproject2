const apiKey = 'c717d8b63235a122602b21582f79e988'

const id = new URLSearchParams(window.location.search).get('id');
console.log(id);

const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + apiKey;

async function getMovie() {
    const response = await fetch(url);
    const movieDetails = await response.json();
    console.log(movieDetails);

    const movieinfo = document.querySelector('.movieinfo');
    const synopsis = document.querySelector('.synopsis');
    const title = document.createElement('h1');
    const img = document.createElement('img');
    img.classList.add('img');
    img.style.width = '300px';
    img.src = 'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path;
    title.innerHTML = movieDetails.title;
    title.style.color = 'white';
    movieinfo.appendChild(title);
    movieinfo.appendChild(img);

    const overview = document.createElement('p');
    overview.innerHTML = movieDetails.overview;
    overview.style.color = 'white';
    synopsis.appendChild(overview);

    const rating = document.createElement('p');
    rating.innerHTML = 'Rating: ' + movieDetails.vote_average;
    rating.style.color = 'white';
    synopsis.appendChild(rating);

    const runtime = document.createElement('p');
    runtime.innerHTML = 'Runtime: ' + movieDetails.runtime + ' minutes';
    runtime.style.color = 'white';
    synopsis.appendChild(runtime);

    let castUrl = 'https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=' + apiKey;
    const responseCast = await fetch(castUrl);
    const castDetails = await responseCast.json();
    console.log(castDetails);

    const castInfo = document.createElement('div');
    castInfo.classList.add('castinfo');

    castDetails.cast.map((cast) => {
        const castCard = document.createElement('div');
        castCard.classList.add('castcard');
        const castImg = document.createElement('img');
        castImg.style.width = '100px';
        castImg.classList.add('castimg');
        castImg.src = 'https://image.tmdb.org/t/p/w500' + cast.profile_path;
        const castName = document.createElement('p');
        castName.innerHTML = cast.name;
        castName.style.color = 'white';
        castCard.appendChild(castName);
        castCard.appendChild(castImg);
        castInfo.appendChild(castCard);
    })

    synopsis.appendChild(castInfo);
}

getMovie();