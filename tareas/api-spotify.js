// api-spotify-NombreDeUsuario
console.log('API de Spotify');

const fetch = require('node-fetch');

fetch("https://api.spotify.com/v1/search?q=bunny&type=track%2Cartist&market=ES&limit=10&offset=5", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${"BQAI7qPBRdeG3EYam92Wez9mAPEUT2mSyU75tMr_hersnDcmpjCS-UcumtTtTEzKwpbFOLoMeHZAMhiMoQ8FO8y0AG7FYE7va19NMSPvyu6mQgh1bVu27gEGq_mDkYDA82Y-J7YeXk_cABknDMm3IEe9sI6KnGeIvoSxRa2gjq1eHkd4lzlKTKV7qoTwYP1ry8Q"}`
  }
})
.then(response => response.json())
.then((body) => {
    console.log(body.tracks.items[0]);
  })
