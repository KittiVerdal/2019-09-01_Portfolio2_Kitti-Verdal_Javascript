
 // Connect to the API  using a promise

 fetch('http://www.amiiboapi.com/api/amiibo/?name=mario')
  .then((response) => {
      return response.json()
  })
  .then(jsonResult => {
      console.log(jsonResult);
  })
