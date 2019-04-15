const ytSearch = require( 'yt-search' )
const fs = require('fs');

var outputJson = [];

ytSearch( {query:'incredible fishing stories',isEmbeddable:true}, function ( err, r ) {
  if ( err ) throw err
  for (var i = 0; i < 20; i++) { 
      const videos = r.videos
      const playlists = r.playlists
      const accounts = r.accounts
      const firstResult = videos[i]
      const firstResultName = firstResult.title;
     
      console.log( firstResult )
      console.log( firstResult.title )


      var myJson = {
        TITLE: videos[i].title,
        TYPE: "video",
        OWNER: videos[i].author.name,
        URL: "https://www.youtube.com/embed/" + videos[i].videoId + "?autoplay=1",
        SOURCE: "youtube"
        }


        outputJson.push(myJson);

        json = JSON.stringify(outputJson);
        fs.writeFile('./fishing.json', json, (err) => {
            if (!err) {
                console.log('done');
            }
      });
  }
} )



