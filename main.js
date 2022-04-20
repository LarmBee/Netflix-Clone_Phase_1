const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      'X-RapidAPI-Key': 'ca64d2d9dfmsh6afc51225969620p1ee859jsn1d825a80fe88'
    }
  };
  
fetch('https://movie-database-alternative.p.rapidapi.com/?s=game%20of%20thrones&r=json&page=1', options)
    .then(response => response.json())
    .then(response => {
      movies = response ;
      let body = document.querySelector('body')
      let movie_results =  movies.Search
      let details = document.createElement('p')
      for (movie in movie_results){
        let img = document.createElement('img')
        let first = movie_results[movie]
        img.src = first.Poster
        body.append(img)
        img.classList.add('images')
      }
      
    })
    .catch(err => {});

    //   for (movie in movie_results){
    //     let movie_list = (movie_results[movie])
    //     let movie_title= (movie_list.titleOriginal)
    //     let movie_rating = (movie_list.rating)
    //     let movie_release = (movie_list.release)
    //     let movie_poster = (movie_list.image)
    //     let movie_genres = (movie_list.genres)