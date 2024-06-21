function connectAPI() {
    var httpString = "https://jsonplaceholder.typicode.com/posts";
    //https://jsonplaceholder.typicode.com/posts/:id

    fetch(httpString)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(post => {
                let myrow = document.querySelector(".row,.d-flex ,.justify-content-between ,.p-3");
                let mycol = document.createElement("div");
                mycol.innerHTML = `
                                        <div class="card-body ">
                                            <h5 class="card-title">${post.title}</h5>
                                            <p class="card-text">${post.body}</p>
                                            <button onclick="passaId(${post.id})" class="btn btn-primary justify-content-center" >Dettaglio</a>
                                        
                                    </div>`;
                                         
                mycol.classList.add("col-md-4","card");
                
                mycol.style.width ="18rem"
                myrow.appendChild(mycol);
            });
        });
}

function passaId(id){
    
    console.log(id);
    window.location.href= "details.html?id=" +id;
}

connectAPI();