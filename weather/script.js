
function getLocation(){
    var cityName=document.getElementById("searchBox").value;
    // console.log(cityName);
    var apiKey=`bf5436c2caadaeca439d46ad7ba77df1`;
    var url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;


    fetch(url).then(res=>res.json()).then(data=> {
        console.log(data);
    
        
        var htmlData=`
                <div class="card mb-3 mt-5">
                    <h3 class="card-header">${data.name}, ${data.sys.country}</h3>
                    <div class="card-body">
                        <h5 class="card-title">Weather : ${data.weather[0].description}</h5>
                        <h6 class="card-subtitle text-muted mb-2">Temperature : ${Math.round(data.main.temp -273.15)}°C</h6>
                        <h6 class="card-subtitle text-muted">Feels like ${Math.round(data.main.feels_like-273.15)}°C</h6>
                    </div>
                    
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Humidity: ${data.main.humidity}%</li>
                        <li class="list-group-item">Wind Speed: ${data.wind.speed} m/s</li>
                        <li class="list-group-item">Pressure: ${data.main.pressure} hPa</li>
                    </ul>

                </div>
                `;

        document.getElementById("contentBox").innerHTML=htmlData;
    });




}

