console.log("Let's get this party started!");

const $gifs = $("#gifs");
const $searchInput = $("#search-term");

function addGif(res){
    let numResults = res.data.length;
    if(numResults){
        let randomIndex = Math.floor(Math.random()* numResults);
        let $newGif = $("<div>");
        let $newImg = $("<img>", {
          src: res.data[randomIndex].images.original.url
        });
        $newGif.append($newImg);
        $gifs.append($newGif);
    }
}

$("form").on("submit", async function(evt){
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    //$searchInput.val('');

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params:{
            q: searchTerm, 
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

$("#remove").on("click", function(){
    $gifs.empty();
});