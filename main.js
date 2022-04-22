
const mainURL = "https://api.themoviedb.org/3";
let apiKey = 'api_key=d2bc8eb92eb2f9b904f9bf39c554df4b'
searchTitle = " "
const searchURL = `${mainURL}/search/movie?${apiKey}`;
let inputbox = document.querySelector('.input').value
let search_movie = (`${searchURL}&query=${inputbox}`);
if (inputbox = " "){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=d2bc8eb92eb2f9b904f9bf39c554df4b&language=en-US&page=1')
    
        .then(response => response.json())
        .then(response => {
          data = response;
          let overall_data = data.results
          let img_url =  "https://image.tmdb.org/t/p/w500"
          for (result of overall_data){
            let section_1 = document.querySelector('.header')
            let movie_titles = result.title
            let movie_poster = result.backdrop_path
            let movie_urls = img_url+movie_poster
            let movie_description = result.overview
            // section_1.innerHTML = `<img src = ${movie_urls} />`
            section_1.insertAdjacentHTML('beforeend',
            `
            <div class = media>
              <img src = ${movie_urls} />
              <h3 id ='titlelabel'>${movie_titles}</h3>
              <p id =mdes>${movie_description}</p>
            </div>
            `)
          }
        })
}
else
{
  alert('Enter movie name:')
  fetch(search_movie)
        .then(response => response.json())
        .then(response => {
          data = response;
          let overall_data = data.results
          let img_url =  "https://image.tmdb.org/t/p/w500"
          for (result of overall_data){
            let section_1 = document.querySelector('.header')
            let movie_titles = result.title
            let movie_poster = result.backdrop_path
            let movie_urls = img_url+movie_poster
            // section_1.innerHTML = `<img src = ${movie_urls} />`
            section_1.insertAdjacentHTML('beforeend',
            `
            <div class = media>
              <img src = ${movie_urls} />
            </div>
            `)
          }
        })
}



console.log(search_movie)




var handleSearch = function(event){
  event.preventDefault
  var searchterm = event.target.elements['input'].values
}