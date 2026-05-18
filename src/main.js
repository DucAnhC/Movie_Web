// =====================================================
// SECTION 01: IMPORTS
// =====================================================
import './style.css'
import posterImage from './assets/download.jpg'
import fallbackImage from './assets/fallback.jpg'
import queryString from 'query-string';


// =====================================================
// SECTION 02: CONFIG & CONSTANTS
// =====================================================
const fallbackImg = fallbackImage;

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjZiZGUwMjMxZGMyYzI4ZGY5MjRjM2JiODlmMzY3YSIsIm5iZiI6MTc3ODU3ODA0MC4xNDMwMDAxLCJzdWIiOiI2YTAyZjI3ODY2MjQ3NzZlZGVmYjg2MTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.rM80sL-S96yHkWXustwhisn_Fc4_vNa_MpItuM4rRF4";
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIES_LIMIT = 10;

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


// =====================================================
// SECTION 03: DOM ELEMENTS
// =====================================================
const movieGrid = document.querySelector('#movieGrid');

const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');

const movieDetailModal = document.querySelector('#movieDetailModal');

const movieSectionTile = document.querySelector('#movieSectionTile');

const homeLink = document.querySelector('#homeLink');
const trendingLink = document.querySelector('#trendingLink');
const libraryLink = document.querySelector('#libraryLink');
const heroSection = document.querySelector('#heroSection');
const genreFilter = document.querySelector('#genreFilter');
const viewAllLink = document.querySelector('#viewAllLink');
const movieListSection = document.querySelector('#movieListSection');
const browseBtn = document.querySelector('#browseBtn');

const loadMoreBtn = document.querySelector('#loadMoreBtn');

// =====================================================
// SECTION 04: APP STATE
// =====================================================
let currentMovieDetail = null;
let currentPage = 1;
let currentUrlBuilder = null;
let currentTitle = "Popular Movies";
let isLoadingMovies = false;
const loadMoreDefaultHTML = loadMoreBtn.innerHTML;

// =====================================================
// SECTION 05: URL BUILDERS
// =====================================================
function buildUrl(endpoint, params) {
  const query = queryString.stringify(params);
  return `${BASE_URL}${endpoint}?${query}`;
}

function getPopularMoviesUrl(page = 1) {
  return buildUrl('/movie/popular', {
    page,
    language: 'en-US'
  });
}

function getSearchMoviesUrl(query, page = 1) {
  return buildUrl('/search/movie', {
    query,
    page,
    include_adult: false,
    language: 'en-US',
  });
}

function getMovieDetailUrl(movieId) {
  return buildUrl(`/movie/${movieId}`, {
    append_to_response: 'credits',
    language: 'en-US'
  });
}

function getTrendingMoviesUrl(timeWindow = 'week', page = 1) {
  return buildUrl(`/trending/movie/${timeWindow}`, {
    page,
    language: 'en-US'
  });
}

function getGenreMoviesUrl(genreId, page = 1) {
  return buildUrl('/discover/movie', {
    with_genres: genreId,
    page,
  });
}


// =====================================================
// SECTION 06: DATA FORMATTERS
// =====================================================
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

function formatMovieDetailData(movie) {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date || 'N/A',
    runtime: movie.runtime || 'N/A',
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    overview: movie.overview || 'No overview available.',
    poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : fallbackImg,
    genres: movie.genres ? movie.genres.map(genre => genre.name) : [],
    credits: {
      cast: movie.credits && movie.credits.cast ? movie.credits.cast.slice(0, 5).map(cast => cast.name) : [],
      crew: movie.credits && movie.credits.crew ? movie.credits.crew.filter(member => member.job === 'Director').map(director => director.name) : [],
    }
  };
}


// =====================================================
// SECTION 07: RENDER FUNCTIONS
// =====================================================
function renderMovies(movies, isAppend = false) {
    const moviesHTML = movies.map(function(movie) {
        return `
            <article class="movie-card overflow-hidden border border-[#5C3F40]/10 bg-[#281718] transition duration-300 hover:border-[#3F3F46] hover:scale-[1.03]" data-movie-id="${movie.id}">
              <div class="relative">
                <img
                    src="${movie.poster}"
                    alt="${movie.title}"
                    onerror="this.onerror=null; this.src='${fallbackImg}'"
                    class="w-full aspect-2/3 object-cover "
                >

                <span class="absolute top-2 right-2 bg-[#E11D48] text-[#FBDBDB] rounded-md p-1">
                  IMDb ${movie.rating}
                </span>
              </div>
              <!------- Movie Information ----->
              <div class="movie-info p-4">
                <div class="flex justify-between items-center gap-2">
                  <h3 class="truncate text-[#FBDBDB]">${movie.title}</h3>
                  <span class="shrink-0 text-[#FBDBDB]">${movie.year}</span>
                </div>

                <div class="mt-2 flex gap-2 flex-wrap">
                    ${movie.genres.slice(0, 2).map(genre => `
                        <span class="bg-[#443030] px-2 py-1 rounded text-xs text-[#E5BDBE]">${genre}</span>
                        `).join('')}
                </div>
              </div>
            </article>
        `
    }).join('');
    if(isAppend) {
      movieGrid.insertAdjacentHTML('beforeend', moviesHTML);
    } else {
      movieGrid.innerHTML = moviesHTML;
    }
}

function renderMovieDetail(movie) {
  movieDetailModal.innerHTML = `
      <div class="relative grid max-h-[85vh] w-full max-w-250 grid-cols-1 md:grid-cols-[1.4fr_1fr] items-stretch overflow-hidden bg-[#281718] border border-[#5C3F40]/20 rounded-2xl shadow-2xl">
        <!--Close button-->
        <button id="closeMovieModal" class="absolute top-4 right-4 ">
          <i class="fa-solid fa-xmark text-[#FAFAFA] cursor-pointer w-5 h-5 transition hover:text-[#E11D48]"></i>
        </button>
        <!--left content-->
        <div class="self-stretch overflow-hidden">
          <img src="${movie.poster}" alt="Movie Poster" class="w-full h-full object-cover">
        </div>
        <!--right content-->
        <div class="flex flex-col overflow-y-auto py-10 px-8">
          <h2 class="text-3xl pb-2 text-[#FBDBDB] font-semibold">${movie.title}</h2>

          <div class="flex gap-3 pb-6">
            <span class="text-[#AE5BDBE] top-0 font-semibold">${movie.year}</span>
            <div class="flex items-center gap-1">
              <i class="fa-solid fa-star text-[#E5BDBE]"></i>
              <span class="text-[#E5BDBE] font-semibold">${movie.rating}</span>
            </div>
            <span class="text-[#E5BDBE] font-semibold">${movie.runtime} min</span>
          </div>
          <div class="flex flex-wrap gap-2 pb-8">
            ${movie.genres.map(genre => `
              <span class="bg-[#443030] text-[#E5BDBE] text-[12px] font-semibold border rounded-2xl border-[#5C3F40]/30 px-3 py-1 ">${genre}</span>
              `).join('')}
          </div>

          <span class="text-[#E5BDBE] text-[12px] font-semibold">Overview</span>

          <p class="text-[#E5BDBE] text-[16px] pb-8 font-semibold">${movie.overview}</p>

          <div class="flex flex-col w-full gap-3">

              <button type="button" data-movie-id="${movie.id}" class="js-add-to-watchlist bg-[#E11D48] hover:bg-[#BE123C] font-bold text-[#FFFAF9] rounded-lg px-6 py-4 w-full gap-3 flex items-center justify-center">
                <i class="fa-regular fa-floppy-disk"></i>
                Add to WatchList</button>



              <button class="rounded-lg border border-[#5C3F40] bg-[#281718] hover:bg-[#27272A] text-[#FBDBDB] px-6 py-4 mt-2 gap-3 w-full flex items-center justify-center ">
                <i class="fa-regular fa-heart"></i>
                Favorite</button>

          </div>
          <div class="grid grid-cols-[1fr_1fr] gap-4 pt-10">
            <!--left content-->
            <div class="flex flex-col pt-6 gap-2 text-[#E5BDBE]">
              <p class="text-[12px] font-semibold">Director</p>
              ${movie.credits.crew.length > 0 ? `<h3 class="text-[#FBDBDB] text-[16px]">${movie.credits.crew[0]}</h3>` : '<h3 class="text-[#FBDBDB] text-[16px]">N/A</h3>'}
            </div>
            <!--right content-->
            <div class="flex flex-col pt-6 gap-2 text-[#E5BDBE]"> 
              <p class="text-[12px] font-semibold">Starring</p>
              ${movie.credits.cast.length > 0 ? `<h3 class="text-[#FBDBDB] text-[16px]">${movie.credits.cast.join(', ')}</h3>` : '<h3 class="text-[#FBDBDB] text-[16px]">N/A</h3>'}
            </div>
          </div>
        </div>
      </div>
      `;
      movieDetailModal.classList.remove('hidden');
}

function renderGenreFilter() {
  const renderGenres = Object.entries(GENRE_MAP).map(([id, name]) => {
    return `
        <li>
          <button
            data-genre-id="${id}"
            data-genre-name="${name}"
            class="genreBtn bg-[#382526] text-[#E5BDBE] hover:bg-[#E11D48] hover:text-[#FFFAF9] rounded-full tracking-wide inline-block py-2 px-6">
          ${name}
          </button>
        </li>
    `;
  }).join('');
  genreFilter.innerHTML = `
    <ul class="flex flex-wrap gap-4 mb-4">
      <li>
        <button
          class="genreBtn bg-[#382526] text-[#E5BDBE] hover:bg-[#E11D48] hover:text-[#FFFAF9] rounded-full tracking-wide inline-block py-2 px-4"
          data-genre-id="all"
          data-genre-name="All Movies">
        All Movies
        </button>
      </li>
      ${renderGenres}
    </ul>
  `;
}


// =====================================================
// SECTION 08: API FUNCTIONS
// =====================================================
async function fetchAndRenderMovies(url, title, isAppend = false, limit) {
  try {
    if(!isAppend) {
      showMovieSkeleton();
    }
    const res = await fetch(url,{
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        accept: 'application/json',
      }
    });
    if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if(data.results.length === 0) {
      if(isAppend) {
        setLoadMoreButtonState('done');
      } else {
        showEmptyState('No movies found. Try a different keyword or explore popular movies');
      }
      return false;
    }
    const formattedMovies = data.results.map(formatMovieData);
    const moviesToRender = Number.isInteger(limit) ? formattedMovies.slice(0, limit) : formattedMovies;
    movieSectionTile.textContent = title;
    renderMovies(moviesToRender, isAppend);
    setLoadMoreButtonState('default');
    return true;
  } catch (error) {
    console.error('Error fetching movies:', error);
    if(isAppend) {
      setLoadMoreButtonState('error');
    } else {
      movieGrid.innerHTML = '<p class="text-center col-span-full w-full text-[#A1A1AA]">Failed to load movies. Please try again later.</p>';
    }
    return false;
  }
}

async function fetchMovieDetail(movieId) {
  try {
    const res = await fetch(getMovieDetailUrl(movieId), {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        accept: 'application/json',
      }
    });
    if(!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    const formattedMovie = formatMovieDetailData(data);
    currentMovieDetail = formattedMovie;
    renderMovieDetail(formattedMovie);

  } catch (error) {
    console.error('Error fetching movie detail:', error);
    return null;
  }
}

async function searchMovies(query) {
  currentPage = 1;
  currentTitle = `Search results for "${query}"`;
  currentUrlBuilder = function(page) {
    return getSearchMoviesUrl(query, page);
  }

  fetchAndRenderMovies(currentUrlBuilder(currentPage), currentTitle, false, MOVIES_LIMIT);
}


// =====================================================
// SECTION 09: VIEW ACTIONS
// =====================================================
function showHomeSection() {
  heroSection.classList.remove('hidden');
  viewAllLink.classList.remove('hidden');
  genreFilter.classList.remove('hidden');
}

function showLibrarySection() {
  heroSection.classList.add('hidden');
  viewAllLink.classList.add('hidden');
  genreFilter.classList.add('hidden');
}

function showTrendingSection() {
  heroSection.classList.add('hidden');
  viewAllLink.classList.add('hidden');
  genreFilter.classList.add('hidden');
}

function showPopularMovies() {
  showHomeSection();
  currentPage = 1;
  currentTitle = 'Popular Movies';
  //bản chất là gán hàm vào biến, truyền page vào hàm đó để lấy url tương ứng với page đó
  //nếu gán bằng hàm luôn thì sẽ trả về string url, nó sẽ lưu là string không còn là hàm để lần sau gọi lại nữa
  currentUrlBuilder = function(page) {
    return getPopularMoviesUrl(page);
  } 
  //lúc này mới là truyền page vào thật
  fetchAndRenderMovies(currentUrlBuilder(currentPage), currentTitle, false, MOVIES_LIMIT);
}


function showTrendingMovies() {
  showTrendingSection();
  currentPage = 1;
  currentTitle = 'Trending Movies';
  currentUrlBuilder = function(page) {
    return getTrendingMoviesUrl('week', page);
  } 
  fetchAndRenderMovies(currentUrlBuilder(currentPage), currentTitle, false, MOVIES_LIMIT);
}

function showGenreMovies(genreId, genreName) {
  showHomeSection();
  currentPage = 1;
  currentTitle = `${genreName} Movies`;
  currentUrlBuilder = function(page) {
    return getGenreMoviesUrl(genreId, page);
  }
  fetchAndRenderMovies(currentUrlBuilder(currentPage), currentTitle, false, MOVIES_LIMIT);
}

function showLibrary() {
  showLibrarySection();
  currentPage = 1;
  currentTitle = 'Your WatchList';
  currentUrlBuilder = null;

  const watchList = getWatchList();
  if (watchList.length === 0) {
    movieSectionTile.textContent = 'Your WatchList is empty';
    movieGrid.innerHTML = '';
    return;
  }
  movieSectionTile.textContent = 'Your WatchList';
  renderMovies(watchList);
}

function closeMovieDetailModal() {
  movieDetailModal.classList.add('hidden');
  movieDetailModal.innerHTML = '';
}


// =====================================================
// SECTION 10: WATCHLIST STORAGE
// =====================================================
function getWatchList() {
  return JSON.parse(localStorage.getItem('watchList')) || [];
}

function saveToWatchList(movie) {
  localStorage.setItem('watchList', JSON.stringify(movie));
}

function addToWatchList(movie) {
  const watchList = getWatchList();
  if (watchList.some(item => item.id === movie.id)) {
    alert('This movie is already in your WatchList!');
    return;
  }
  watchList.push(movie);
  saveToWatchList(watchList);
  alert('Movie added to WatchList!');
}
// =====================================================
// SECTION 11: Active Nav Link
// =====================================================
function setActiveNavLink(activeLink) {
  const navLinks = [homeLink, trendingLink, libraryLink];

  navLinks.forEach(link => {
    link.classList.remove('text-[#E5BDBE]', 'border-[#E11D48]', 'border-current', 'hover:text-[#FFB3B6]');
    link.classList.add('border-b-2', 'border-transparent', 'text-[#FFB3B6]', 'hover:text-[#FFB3B6]');
  });

  activeLink.classList.remove('border-transparent', 'text-[#FFB3B6]', 'hover:text-[#FFB3B6]');
  activeLink.classList.add('text-[#E5BDBE]', 'border-current', 'hover:text-[#FFB3B6]');
}
// =====================================================
// SECTION 12: Active Genre Button
// =====================================================
function setActiveGenreButton(activeButton) {
  const genreButtons = document.querySelectorAll('.genreBtn');
  genreButtons.forEach(button => {
    button.classList.remove('bg-[#E11D48]', 'text-white');
    button.classList.add('bg-[#27272A]', 'text-[#A1A1AA]');
  });

  activeButton.classList.remove('bg-[#27272A]', 'text-[#A1A1AA]');
  activeButton.classList.add('bg-[#E11D48]', 'text-white');
}

function showMovieSkeleton() {
  movieGrid.innerHTML = Array(8) //class animate-pulse sẽ tạo hiệu ứng loading cho skeleton
    .fill("")
    .map(() => `
      <div class="animate-pulse"> 
        <div class="h-64 rounded-xl bg-[#2c1f20]"></div>
        <div class="mt-3 h-4 w-3/4 rounded bg-[#2c1f20]"></div>
        <div class="mt-2 h-3 w-1/2 rounded bg-[#2c1f20]"></div>
      </div>
    `)
    .join("");
}

function showEmptyState(message) {
  movieGrid.innerHTML = `
    <div class="col-span-full w-full text-center py-16">
      <p class="text-[#A1A1AA]">${message}</p>
    </div>
  `;
}

function setLoadMoreButtonState(state) {
  if(state === 'loading') {
    loadMoreBtn.disabled = true;
    loadMoreBtn.classList.add('opacity-70', 'cursor-not-allowed');
    loadMoreBtn.innerHTML = 'Loading... <i class="fa-solid fa-spinner fa-spin m-0.5"></i>';
    return;
  }

  if(state === 'error') {
    loadMoreBtn.disabled = false;
    loadMoreBtn.classList.remove('opacity-70', 'cursor-not-allowed');
    loadMoreBtn.innerHTML = 'Try Again <i class="fa-solid fa-rotate-right m-0.5"></i>';
    return;
  }

  if(state === 'done') {
    loadMoreBtn.disabled = true;
    loadMoreBtn.classList.add('opacity-70', 'cursor-not-allowed');
    loadMoreBtn.innerHTML = 'No More Movies';
    return;
  }

  loadMoreBtn.disabled = false;
  loadMoreBtn.classList.remove('opacity-70', 'cursor-not-allowed');
  loadMoreBtn.innerHTML = loadMoreDefaultHTML;
}
// =====================================================
// SECTION 13: EVENT LISTENERS
// =====================================================
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    searchMovies(query);
  } else {
    return;
  }
});

movieDetailModal.addEventListener('click', function(e) {
  if (e.target.id === 'closeMovieModal' || e.target.closest('#closeMovieModal')) {
    closeMovieDetailModal();
  }
});

movieDetailModal.addEventListener('click', function(e) {
  if (e.target === movieDetailModal) {
    closeMovieDetailModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeMovieDetailModal();
  }
});

movieGrid.addEventListener('click', function(e) {
  const card = e.target.closest('.movie-card');
  if (!card) {
    return;
  }
  const movieId = card.dataset.movieId;
  fetchMovieDetail(movieId);
});

homeLink.addEventListener('click', function(e) {
  e.preventDefault();
  setActiveNavLink(homeLink);
  showPopularMovies();
});

trendingLink.addEventListener('click', function(e) {
  e.preventDefault();
  setActiveNavLink(trendingLink);
  showTrendingMovies();
});

libraryLink.addEventListener('click', function(e) {
  e.preventDefault();
  setActiveNavLink(libraryLink);
  showLibrary();
});

movieDetailModal.addEventListener('click', function(e) {
  const addToWatchListBtn = e.target.closest('.js-add-to-watchlist');
  if (!addToWatchListBtn) {
    return;
  }
  if(!currentMovieDetail) {
    return;
  }
  addToWatchList(currentMovieDetail);
});


browseBtn.addEventListener('click', function(e) {
  movieListSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

genreFilter.addEventListener('click', function(e) {
  const genreBtn = e.target.closest('.genreBtn');
  if (!genreBtn) {
    return;
  }
  setActiveGenreButton(genreBtn);
  const genreId = genreBtn.dataset.genreId;
  const genreName = genreBtn.dataset.genreName;
  if(genreId === 'all') {
    showPopularMovies();
    return;
  }
  showGenreMovies(genreId, genreName);
});
loadMoreBtn.addEventListener('click', async function(e) {
  if(!currentUrlBuilder || isLoadingMovies) {
    return;
  }
  isLoadingMovies = true;
  setLoadMoreButtonState('loading');
  const nextPage = currentPage + 1;
  const isLoaded = await fetchAndRenderMovies(currentUrlBuilder(nextPage), currentTitle, true, MOVIES_LIMIT);
  if(isLoaded) {
    currentPage = nextPage;
  }
  isLoadingMovies = false;
});
viewAllLink.addEventListener('click', function(e) {
  e.preventDefault();
  if(!currentUrlBuilder) {
    return;
  }
  currentPage = 1;
  fetchAndRenderMovies(currentUrlBuilder(currentPage), currentTitle, false, 20);
});

// =====================================================
// SECTION 14: APP INIT
// =====================================================
renderGenreFilter();
//set all genre buttons to default state (inactive)
const genreAllButtons = document.querySelectorAll('[data-genre-id="all"]');
setActiveGenreButton(genreAllButtons[0]);
setActiveNavLink(homeLink);
showPopularMovies();
