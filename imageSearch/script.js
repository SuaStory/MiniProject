const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://`; /*API-URL & KEY*/

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    console.log(data);

    const results = data.results;
    
    results.map(function(result){
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener(function(event){
    event.preventDefault();
    page = 1;
    searchImages();
    
})

showMoreBtn.addEventListener("click",function(){
    page ++;
    searchImages();
})

