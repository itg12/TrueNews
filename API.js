//Fetch Realtime data from API and Represent it on display.

const News=()=>{
    
    let p = fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=a78074cd0cd541a391fff25b6195ef75")
    p.then((value1) => {
        return value1.json();
    }).then((data) => {
        console.log(data)
        let repHtml = ""
        let articles = data.articles;
        articles.forEach(function(element) {
            let temp = `<div class="card mx-1 border-1" style="width: 20rem;">
                <div class="card-body">
                <img class="card-img-top" src="${element.urlToImage}" alt="Card image cap">
    
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description}</p>
                    <a href="${element.url}" class="btn btn-primary">Read</a>
                </div>
            </div>`
    
            repHtml += temp;
        })
        apidata.innerHTML = repHtml;
    })
    
}
