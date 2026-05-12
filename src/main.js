import './style.css'
import posterImage from './assets/download.jpg'


const movieGrid = document.querySelector('#movieGrid');

const fallbackImg = 'src/assets/fallback.jpg';

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjZiZGUwMjMxZGMyYzI4ZGY5MjRjM2JiODlmMzY3YSIsIm5iZiI6MTc3ODU3ODA0MC4xNDMwMDAxLCJzdWIiOiI2YTAyZjI3ODY2MjQ3NzZlZGVmYjg2MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rM80sL-S96yHkWXustwhisn_Fc4_vNa_MpItuM4rRF4";


//Map các id thể loại phim sang tên thể loại
const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  27: "Horror",
  9648: "Mystery",
  878: "Sci-Fi",
  53: "Thriller",
};

const fakeMovies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    rating: 9.3,
    poster: posterImage,
    genres: ['Drama'],
  },
  {
    title: 'The Godfather',
    year: 1972,
    rating: 9.2,            
    poster: posterImage,
    genres: ['Crime', 'Drama'],
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    rating: 9.0,            
    poster: posterImage,
    genres: ['Action', 'Adventure'],
  }
];


//render movies to the DOM
function renderMovies(movies) {
    movieGrid.innerHTML = movies.map(function(movie) {
        return `
            <article class=" overflow-hidden rounded-xl bg-amber-950"> 
              <div class="relative">
                <img 
                    src="${movie.poster}" 
                    alt="${movie.title}" 
                    onerror="this.onerror=null; this.src='${fallbackImg}'"
                    class="w-full aspect-2/3 object-cover rounded-t-lg"
                >
                
                <span class="absolute top-2 right-2 bg-red-600 rounded-full">
                  IMDb ${movie.rating}
                </span>
              </div>
              <!------- Movie Information ----->
              <div class="movie-info p-3">
                <div class="flex justify-between items-center gap-2">
                  <h3 class="truncate">${movie.title}</h3>
                  <span class="shrink-0">${movie.year}</span>
                </div>

                <div class="mt-2 flex gap-2 flex-wrap">
                    ${movie.genres.map(genre => `
                        <span class="bg-amber-700 px-2 py-1 rounded">${genre}</span>
                        `).join('')}
                </div>
              </div>
            </article>
        `
    }).join('');
}
//format movie id to movie data
function formatMovieData(movie) {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date ? movie.release_date.slice(0, 4) : 'N/A',
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : fallbackImg,
    genres: movie.genre_ids ? movie.genre_ids.map((id) => GENRE_MAP[id]).filter(Boolean) : [],
  };
}
// Fetch movies from TMDb API
async function fetchMovies() {
  try {
    const res = await fetch (`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,{
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        accept: 'application/json',
      }
    });
    if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    } 
    const data = await res.json();
    const formattedMovies = data.results.map(formatMovieData);
    renderMovies(formattedMovies);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

//call function
fetchMovies();
console.log(fakeMovies);
renderMovies(fetchMovies);
