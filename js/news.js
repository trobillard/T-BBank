function loadBlog() {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        let apiContent = document.querySelector('main section');
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                for (let i = 0 ; i< data.length; i++ ) {
                    apiContent.innerHTML += '<div class="card cardStyle">'+'<h5 class="card-header cardHead">'+ data[i].id +'</h5>'+
                    '<div class="card-body">'+ '<h5 class="card-title">'+ data[i].titre + '</h5>'+
                    '<p class="card-text">'+ data[i].contenu +'</p>'+
                    '<a href="#" class="btn btn-blue">'+ "En savoir plus" +'</a>'+'</div>'+'</div>';
                }
            } 
            else {
                apiContent.innerText = "Nous n'avons pas réussi à récupérer le contenu";
            }
        } 
    };
    httpRequest.open('GET', 'https://oc-jswebsrv.herokuapp.com/api/articles', true);
    httpRequest.send();
}