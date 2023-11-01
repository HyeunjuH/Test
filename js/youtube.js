const videoChannel = document.querySelector('#video-channel')
const videoContainer = document.querySelector('#video-container')
const apiKey ='AIzaSyAh0b7FZqEwvN5wP4m8Yc0fcfrOpzdfWC0'
const channelId="UCkxgKwety1ZpIJ8hBqiYvzA"

const channelEndpoint = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=snippet, contentDetails, statistics`

// const ytPromise = fetch(channelEndpoint)
// console.log(ytPromise)
fetch(channelEndpoint)
  .then(res=>res.json())
  .then(data=>{
    // My Youtube Channel
    console.log(data)
    // Lastest Youtube Video
    const playlistId = data.items[0].contentDetails.relatedPlaylists.uploads;
    console.log(playlistId)
    requestPlaylist(playlistId);
  })

// Lastest Youtube Video
function requestPlaylist(playlistId) {
  const maxResult = 12;
  const playlistURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=snippet&maxResults=${maxResult}`;
  // const playList = fetch(playlistURL)
  // console.log(playList)
  fetch(playlistURL)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => loadVideo(data));
}
function loadVideo(data) {
  const playListItems = data.items;
  if(playListItems) {
    let output ='';
    playListItems.map(item => {
      const videoId = item.snippet.resourceId.videoId;
      // console.log(videoId)
      output +=`
          <div>
            <iframe height="auto" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>`
});
videoContainer.innerHTML = output;
  } else {
  videoContainer.innerHTML = 'Sorry, No videos uploaded!'
  }
}