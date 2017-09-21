// bandsintown API - get request when the submit button is clicked -
// output expected is the artist name and img

document.querySelector("#searchForm").addEventListener("submit", function (event){
  event.preventDefault();
    var searchTerm = document.querySelector("#artist").value;
    // console.log(searchTerm);

    var location = document.querySelector("#current_location").value;
    // console.log(location);


    $.get("https://rest.bandsintown.com/artists/"+searchTerm+"?app_id=lineupapp", function(data){

      var name = data.name;
      var nameNode = document.createTextNode(name);
      var createNameElement = document.createElement('p');
      createNameElement.appendChild(nameNode);
      var address = document.querySelector('#artistName');
      address.appendChild(createNameElement);

      var image = data.image_url;
      var imageNode = document.createTextNode(image);
      console.log(imageNode);
      var createImageElement = document.createElement('img');
      console.log(createImageElement);
      // createImageElement.appendChild(imageNode);
      var imageAddress = document.querySelector('#artistName');
      createImageElement.src = image;
      imageAddress.appendChild(createImageElement);

// End of BandinTown API to get artist name and image
  })

// Beginning of BandsinTown API to get event information

    $.get("https://rest.bandsintown.com/artists/"+searchTerm+"/events?app_id=lineupapp", function (data){
      var unorderedList = document.createElement('ul');
      console.log(data);
      for (var i = 0; i <data.length; i++){
        var artistEvent = document.createElement('a');
        var artistEventNode = document.createElement('li');
        artistEvent.setAttribute('href', data[i].offers[0].url);
        artistEvent.innerHTML = data[i].venue.name;
        artistEventNode.appendChild(artistEvent);
        unorderedList.appendChild(artistEventNode);
        document.getElementById('artistEvents').appendChild(unorderedList);

      }


//       // End of BandsinTown API to get event infomation
})


// End of eventListener
})
