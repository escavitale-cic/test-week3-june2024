function createPost(){
    var httpString = "https://jsonplaceholder.typicode.com/posts/"+getIdFromUrl();
    
    fetch(httpString)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector(".titolo").innerHTML = data.title;
            document.querySelector(".body").innerHTML = data.body;
        });

}

function getIdFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

console.log(getIdFromUrl());
createPost()