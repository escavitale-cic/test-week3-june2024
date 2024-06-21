fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(post => {
                let myrow = document.querySelector("#myrow");
                let mycol = document.createElement("div");
                mycol.innerHTML = `<div class="card" style="width: 15rem; min-height: 24rem;">
                                        <div class="card-body justify-content-center text-center">
                                            <h5 class="card-title"><strong>${post.title}</strong></h5>
                                            <p class="card-text">${post.body}</p>
                                            <a href="dettaglio.html?id=${post.id}" class="btn justify-content-center">Dettaglio</a>
                                        </div>
                                    </div>`;
                mycol.classList.add("col-12", "col-md-4", "mt-5");
                myrow.appendChild(mycol);
            });
        });