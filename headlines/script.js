var apiKey="e6a7709e23244a64963a4fda19593c47";
var url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
var articles=[]

fetch(url).then(res=>res.json()).then(data=>expandNews(data.articles))


function expandNews(articles) {

    let htmlData = "";

    for (let a of articles) {
        htmlData += `
        <div class="col-4">
            <div class="card" mb-3 style="width: 18rem;">
                <img src="${a.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${a.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${a.author}</h6>
                    <p class="card-text">${a.description}.</p>
                    <p class="card-text"><small class="text-body-secondary">${a.publishedAt}</small></p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("root").innerHTML=htmlData;
}






