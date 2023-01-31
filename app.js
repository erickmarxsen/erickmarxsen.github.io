const playlistCards = document.querySelector(".cards-container");

/* function getData() {
  fetch("http://127.0.0.1:5502/data/playlists.json")
    .then((response) => response.json())
    .then((json) => displayData(json));
} */

function displayData(data) {
  for (let i = 0; i < data.items.length; i++) {
    const dataName = data.items[i].snippet.title;
    // const dataDesc = data[i].desc;

    const playlistCard = document.createElement("div");
    playlistCard.classList.add("card");

    const playlistImg = document.createElement("img");
    playlistImg.classList.add("card-img");
    playlistImg.src = "./img/dog.jpg";
    playlistCard.appendChild(playlistImg);

    const playlistText = document.createElement("div");
    playlistText.classList.add("card-text");
    playlistCard.appendChild(playlistText);

    const playlistName = document.createElement("div");
    playlistName.classList.add("card-name");
    playlistName.innerHTML = dataName;
    playlistText.appendChild(playlistName);

    /*  const playlistDesc = document.createElement("div");
    playlistDesc.classList.add("card-desc");
    playlistDesc.innerHTML = dataDesc;
    playlistText.appendChild(playlistDesc); */

    playlistCards.appendChild(playlistCard);
  }
}

async function GetYouTubePlaylistVideos(playlistID, youtubeAPIKey) {
  const response = await fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=" +
      playlistID +
      "&key=" +
      youtubeAPIKey,
    {
      method: "GET",
    }
  ).catch((error) => {
    alert("HTTP-Error: " + response.status) + " Video ID invalid.";
    const message =
      "An error has occurred: ${response.status}. Video ID invalid.";
    throw new Error(message);
  });

  const data = await response.json();
  displayData(data);
}

GetYouTubePlaylistVideos(
  "PL6ZLc-zZUnxlkB9t8CcpFZeV6V5I_cVgu",
  "AIzaSyBMJPrYY7v7nYB1uQwaEyqM_sQbl-oksfU"
);
