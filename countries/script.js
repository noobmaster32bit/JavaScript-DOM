var countries=[]
fetch("https://restcountries.com/v2/all").then(res=>res.json()).then(data=>{
    countries=[...data]
    populateCountries(countries);
    displayCountry(countries); 
    sortByRegions(countries);

})



function populateCountries(countries) {

    let selectBox = document.getElementById("selectcountry");


    for (let c of countries) {
        let countryName = c.name;

        let tag = document.createElement("option");
        tag.value = countryName;
        tag.text = countryName;

        selectBox.appendChild(tag);
    }
}


function displayCountryDetails(event) {
    let selectedCountry = event.target.value;
    // console.log(selectedCountry);



    let countryDetails = countries.find(c => c.name == selectedCountry);
    // console.log(countryDetails);


    if (countryDetails) {
        let htmlData = `
            <div class="card p-3" style="width: 18rem;">
                <img src="${countryDetails.flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${countryDetails.name}</h5>
                    <p class="card-text">Population : ${countryDetails.population}</p>
                    <p class="card-text">Population : ${countryDetails.area}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Capital : ${countryDetails.capital}</li>
                    <li class="list-group-item">Currency : ${countryDetails.currencies[0].name}</li>
                    <li class="list-group-item">Languages : ${countryDetails.languages[0].name}</li>
                    <li class="list-group-item">TImezone : ${countryDetails.timezones}</li>
                </ul>
                
            </div>
        `;

        document.getElementById("root").innerHTML = htmlData;
    }
    else {

        document.getElementById("root").innerHTML = `<p>No such country exist.</p>`;
    }

}



function sortByRegions(countries){

    let allRegions=new Set(countries.map(c=>c.region));
    // console.log(allRegions);

    let selectedRegionBox=document.getElementById("selectRegion");

    for(let r of allRegions){
        let tag=document.createElement("option");
        tag.value=r;
        tag.text=r;

        selectedRegionBox.appendChild(tag);
    }
    
    
    
}


function displayRegionDetails(event){

    let selectedRegion=event.target.value;
    console.log(selectedRegion);

    let countryByRegion=countries.filter(c=> c.region==selectedRegion)
    
    // console.log(countryByRegion); 
    
    displayCountry(countryByRegion);
}

function displayCountry(selectedRegion){
    let htmlData=``;

    for (let c of selectedRegion){
        console.log(c.name);
        
        htmlData+=`
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="${c.flag}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">${c.name}</p>
                    </div>
                </div>
            </div>
        `;
        
    }

    document.getElementById("root").innerHTML=htmlData;
}



