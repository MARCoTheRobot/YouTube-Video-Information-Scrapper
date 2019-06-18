const ytSearch = require( 'yt-search' )
const fs = require('fs');

var outputJson = [];

ytSearch( {query:'Programming Videos'}, function ( err, r ) {
  if ( err ) throw err
  
      const videos = r.videos
      const playlists = r.playlists
      const accounts = r.accounts
     // const firstResult = videos[i]
      //const firstResultName = firstResult.title;
     
     

    var selector = Math.floor(Math.random()*25);
    
      var outputURL = "https://www.youtube.com/watch?v=" + videos[selector].videoId + "?autoplay=1";
      var outputTitle = videos[selector].title;
      var outputAuthor = videos[selector].author.name;
    

      /*var myJson = {
        TITLE: videos[i].title,
        TYPE: "video",
        OWNER: videos[i].author.name,
        URL: "https://www.youtube.com/embed/" + videos[i].videoId + "?autoplay=1",
        SOURCE: "youtube"
        }*/


        console.log("Your video is called " + outputTitle + ", is made by " + outputAuthor + " and is found at " + outputURL)
  
} )


function mhHuntShort3(agent)
  {
  	return new Promise((resolve, reject) => {
    var sourceURL = "https://storage.googleapis.com/newagent-e3a67.appspot.com/mhHuntResponses.json";
    urlRequest({url: sourceURL, json:true}, function (error, response, body) {
            if(error){
                //console.log('error:', error); // Print the error if one occurred
                console.log(body);
                agent.add(new Payload(agent.UNSPECIFIED, {"startCustomFollowup":["tell a joke", "Tell me a story"]}, {"sendAsMessage":true,"rawPayload":true}));
            }
            else{
            	console.log("File found");
              
              var txtSelectionArray = [];
              var payloadSelectionArray = [];

              var shortResponses = body.short;
              
              for(let i = 0; i < shortResponses.length; i++)
              {
              	if(shortResponses[i].category == 3)
                {
                	txtSelectionArray.push(shortResponses[i].text);
                  	payloadSelectionArray.push(shortResponses[i].payload);
                }
              }
              
              let randomSelector = Math.floor(Math.random()*txtSelectionArray.length);
              agent.add(txtSelectionArray[randomSelector]);
              let myPayload = payloadSelectionArray[randomSelector];
              /*let myPayloadString = JSON.stringify(myPayload);
              let finalPayloadString = myPayloadString.replace('\\',"");
              */
              agent.add(new Payload(agent.UNSPECIFIED, myPayload, {"sendAsMessage":true,"rawPayload":true}));
              resolve();
            }
        });
    });
  }

 if(gotVideoQuery && videoQuery != "funny" && videoQuery != "funny video" && videoQuery != "video" && videoQuery != "videos")
    {
      let sourceSelector = Math.floor(Math.random()*2);
      
      switch(sourceSelector){
        case 0:
          	async function urlHandler(){
              var formattedURL = await urlFormatter(1,videoQuery);
              agent.add(`Here is what I found for your request of ${videoQuery} videos, check it out!`);
              var customVideoPayload = {"newWindowView": [formattedURL]}
              agent.add(new Payload(agent.UNSPECIFIED, customVideoPayload, {"sendAsMessage":true,"rawPayload":true}));
                }
          urlHandler();
          break;
        case 1:
          return new Promise((resolve,reject) => {
          ytSearch( {query:videoQuery}, function ( err, r ) {
  			if ( err ) throw err
  
      const videos = r.videos
      const playlists = r.playlists
      const accounts = r.accounts

    	var vidSelector = Math.floor(Math.random()*25);
    
      var outputURL = "https://www.youtube.com/watch?v=" + videos[vidSelector].videoId + "?autoplay=1";
      var outputTitle = videos[vidSelector].title;
      var outputAuthor = videos[vidSelector].author.name;
    
        agent.add(`So I looked up videos of ${videoQuery} and I found one called ${outputTitle}, made by ${outputAuthor}. I like it, and I think you will too. Here, I'm pulling it up now!`);
            var outputPayload = { "newWindowView":[outputURL]};
            agent.add(new Payload(agent.UNSPECIFIED, outputPayload, {"sendAsMessage":true,"rawPayload":true}));
			resolve();
            
  
} ) });
               break;
                      
      
      }
       
    }