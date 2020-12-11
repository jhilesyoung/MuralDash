// const apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
// const queryString = $.param({
//     apikey: "00059902-9bbb-487a-b6ed-a9bf68779a68",
//     title: "rabbit",
//     classification: "Paintings"
// });

// $.getJSON(apiEndpointBaseURL + "?" + queryString, function(data) {
//    console.log(data); 
// });
 
export const puzzlePicture = () => {

    return $.ajax({
        url: "http://api.harvardartmuseums.org/object/303829?apikey=00059902-9bbb-487a-b6ed-a9bf68779a68",
        // dataType: "jsonp"
    }).then(
        picture => {
            // debugger
            document.getElementById("main-picture").innerHTML = `<img class="main-picture" src=${picture.primaryimageurl}>`
        }
    )
}

