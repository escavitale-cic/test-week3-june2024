const id = new URLSearchParams(window.location.search).get('id');

fetch(`https://jsonplaceholder.typicode.com/posts/` + id)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            titolo = document.querySelector("#title");
            paragrafo = document.querySelector("#paragrafo");
            titolo.textContent = data.title;
            paragrafo.textContent = data.body;
        });
