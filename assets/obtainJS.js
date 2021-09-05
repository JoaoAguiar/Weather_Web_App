const apiKey = "ee363e3dd3c8a53213a883871da1c4b6";

const list1 = document.querySelector(".cities");
const list2 = document.querySelector(".other_cities");
const list3 = document.querySelector(".info");

const cities = [];
const citiesSelection = []
const allCities = ['Lisboa', 'Porto', 'Braga', 'Setúbal', 'Aveiro', 'Leiria', 'Faro', 'Coimbra', 'Viseu', 'Madeira', 
                   'Açores', 'Viana do Castelo', 'Vila Real', 'Castelo Branco', 'Guarda', 'Évora', 'Portalegre', 'Arcos de Valdevez', 'Caminha', 'Melgaço', 
                   'Monção', 'Paredes de Coura', 'Ponte da Barca', 'Ponte de Lima', 'Vila Nova de Cerveira', 'Fafe', 'Celorico de Basto', 'Guimarães', 'Vila Nova de Famalicão', 'Póvoa de Lanhoso', 
                   'Vizela', 'Barcelos', 'Esposende', 'Vila Verde', 'Alijó', 'Mondim de Basto', 'Peso da Régua', 'Montalegre', 'Macedo de Cavaleiros', 'Mirandela',
                   'Amadora', 'Azambuja', 'Cascais', 'Loures', 'Serpa', 'Odivelas', 'Sintra', 'Torres Vedras', 'Vila Franca de Xira', 'Alcácer do Sal', 
                   'Alcochete', 'Almada', 'Seixal', 'Barreiro', 'Sines', 'Montijo', 'Espinho', 'Oliveira de Azeméis', 'Santa Maria da Feira', 'São João da Madeira', 
                   'Castelo de Paiva', 'Águeda', 'Albergaria-a-Velha', 'Ílhavo', 'Ovar', 'Mealhada', 'Caldas da Rainha', 'Peniche', 'Castanheira de Pera', 'Figueiró dos Vinhos', 
                   'Pedrógão Grande', 'Gondomar', 'Maia', 'Matosinhos', 'Póvoa de Varzim', 'Valongo', 'Vila do Conde', 'Vila Nova de Gaia', 'Santo Tirso', 'Trofa', 
                   'Felgueiras', 'Lousada', 'Paços de Ferreira', 'Penafiel', 'Cartaxo', 'Entroncamento', 'Fátima', 'Rio Maior', 'Tomar', 'Torres Novas', 
                   'Caxarias', 'Ferreira do Zêzere', 'Golegã', 'Albufeira', 'Faro', 'Lagoa', 'Loulé', 'Olhão', 'Portimão', 'Quarteira', 
                   'Silves', 'Tavira', 'Aljezur', 'Monchique', 'Odeceixe', 'Sagres', 'Figueira da Foz', 'Montemor-o-Velho', 'Penacova', 'Góis', 
                   'Lousã', 'Miranda do Corvo', 'Oliveira do Hospital', 'Pampilhosa da Serra', 'Lamego', 'Tabuaço', 'Tarouca', 'Cinfães', 'Mangualde', 'Tondela', 
                   'Vila Nova de Paiva', 'Vouzela', 'Câmara de Lobos', 'Funchal', 'Porto Moniz', 'Porto Santo', 'Machico', 'Angra do Heroísmo', 'Ponta Delgada', 'Calheta', 
                   'Madalena', 'Horta', 'Santa Cruz das Flores', 'Vila do Corvo', 'Idanha-a-Nova', 'Penamacor', 'Covilhã', 'Sertã', 'Vila Nova de Foz Côa', 'Celorico da Beira', 
                   'Manteigas', 'Sabugal', 'Aguiar da Beira', 'Gouveia', 'Seia', 'Arraiolos', 'Estremoz', 'Montemor-o-Novo', 'Mourão', 'Redondo', 
                   'Reguengos de Monsaraz', 'Viana do Alentejo', 'Vila Viçosa', 'Odemira', 'Castro Verde', 'Ourique'];

const urlThunderstorm = ['https://i.imgur.com/prodbnH.png', 'https://i.imgur.com/OQUEtxW.png', 'https://i.imgur.com/TuOMtqi.png'];
const urlDrizzle = ['https://i.imgur.com/CPUPdv0.png', 'https://i.imgur.com/T8vhXW9.png'];
const urlRain = ['https://i.imgur.com/JdqEekU.png', 'https://i.imgur.com/EzBpkfO.png', 'https://i.imgur.com/FrjKfNL.png', 'https://i.imgur.com/GcqLaYy.png'];
const urlSnow = ['https://i.imgur.com/ZWgfEWY.png', 'https://i.imgur.com/MqhBf1V.png', 'https://i.imgur.com/Dbvz9QT.png', 'https://i.imgur.com/XHWyTBj.png'];
const urlMistAndFog = ['https://i.imgur.com/IxE5JpO.png', 'https://i.imgur.com/bXIY0cI.png', 'https://i.imgur.com/7vFkXEZ.png', 'https://i.imgur.com/R949ZyS.png', 'https://i.imgur.com/qe0I63n.png'];
const urlSmoke = ['https://i.imgur.com/3rDKsbo.png'];
const urlHaze = ['https://i.imgur.com/yOETeVu.png', 'https://i.imgur.com/ho6iXso.png', 'https://i.imgur.com/vPJYI4Q.png'];
const urlDustAndSand = ['https://i.imgur.com/5Ai0w6J.png'];
const urlAsh = ['https://i.imgur.com/vOJd4Jo.png', 'https://i.imgur.com/fSSOuqp.png', 'https://i.imgur.com/RAi8gEM.png'];
const urlSquall = ['https://i.imgur.com/wu1BY9f.png', 'https://i.imgur.com/xrMjMWP.png'];
const urlTornado = ['https://i.imgur.com/lcjbEGk.png', 'https://i.imgur.com/GOohJ65.png'];
const urlClear = ['https://i.imgur.com/Hn9NrJY.png', 'https://i.imgur.com/yxhkte0.png', 'https://i.imgur.com/YvUmTsd.png', 'https://i.imgur.com/f1YIikt.png', 'https://i.imgur.com/wymCFed.png'];
const urlClouds = ['https://i.imgur.com/PPZdnhp.png', 'https://i.imgur.com/A315Jfw.png', 'https://i.imgur.com/zk9egih.png', 'https://i.imgur.com/5GTf6pU.png', 'https://i.imgur.com/CW4ncXE.png']

var name_;
var description;
var mainDescription;
var feels;
var humidity;
var temperature;
var temperature_max;
var temperature_min;
var country;
var country;
var latitude;
var longitude;

window.addEventListener('load', (e) => {
    e.preventDefault();

    const input = sessionStorage.getItem('RESULT');
    //const input = window.location.search.substring(6, window.location.search.length);
    
    name_ = input;

    for(let index=0; index<allCities.length; index++) {
        const city = allCities[index];

        if(city == input) {
            allCities.splice(index, 1)
            break;
        }
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather, coord } = data;

            country = sys.country
            description = weather[0]['description'];
            mainDescription = weather[0]['main'];
            feels = Math.round(main.feels_like);
            humidity = main.humidity;
            temperature = Math.round(main.temp);
            temperature_max = Math.round(main.temp_max);
            temperature_min = Math.round(main.temp_min);
            country = sys.country;
            latitude = coord.lat;
            longitude = coord.lon;
      
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            const li = document.createElement("li"); 
            
            li.classList.add("city");
            
            const markup = `
                <h2 class="city-name" data-name="${name},${country}">
                    <span>${name}</span><sup>${country}</sup>
                </h2>
            
                <div class="city-temp">
                    <h4>${temperature}<sup>°C</sup></h4>
                </div>
                
                <figure>
                    <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                    <h4><figcaption>${weather[0]["description"]}</figcaption></h4>
                </figure>
                `;
            
            li.innerHTML = markup;
            list1.appendChild(li);

            var urlMainDescription;

            switch(mainDescription) {
                case 'Clouds':
                    var aux = Math.floor(Math.random() * 4);
                    urlMainDescription = urlClouds[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";


                    break;
                case 'Clear':
                    var aux = Math.floor(Math.random() * 4);
                    urlMainDescription = urlClear[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Tornado':
                    var aux = Math.floor(Math.random() * 2);
                    urlMainDescription = urlTornado[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Squall':
                    var aux = Math.floor(Math.random() * 2);
                    urlMainDescription = urlSquall[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Ash':
                    var aux = Math.floor(Math.random() * 3);
                    urlMainDescription = urlAsh[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Dust':
                case 'Sand':
                    urlMainDescription = urlDustAndSand[0];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Haze':
                    var aux = Math.floor(Math.random() * 3);
                    urlMainDescription = urlHaze[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Smoke':
                    urlMainDescription = urlSmoke[0];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Fog':
                case 'Mist':
                    var aux = Math.floor(Math.random() * 5);
                    urlMainDescription = urlMistAndFog[aux];
                    
                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Snow':
                    var aux = Math.floor(Math.random() * 4);
                    urlMainDescription = urlSnow[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Rain':
                    var aux = Math.floor(Math.random() * 4);
                    urlMainDescription = urlRain[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Drizzle':
                    var aux = Math.floor(Math.random() * 2);
                    urlMainDescription = urlDrizzle[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                case 'Thunderstorm':
                    var aux = Math.floor(Math.random() * 3);
                    urlMainDescription = urlThunderstorm[aux];

                    document.getElementById("weather_content").style.background = "url('" + urlMainDescription + "')";
                    document.getElementById("weather_content").style.backgroundSize = "100% 100%";

                    break;
                default:
                    console.log(cityMainDescription);
            }
        });

    getCities();
});

function getCities() {
    for(let index=0; index<allCities.length; index++) {   
        var i = 0;         
        const element = allCities[index];
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { main, weather } = data;

                var cityDescription = weather[0]['description'];
                var cityFeels = Math.round(main.feels_like);
                var cityHumidity = main.humidity;
                var cityTemperature = Math.round(main.temp);

                if((cityHumidity >= humidity-10 && cityHumidity <= humidity+10) && cityDescription == description && (cityFeels >= feels-2 && cityFeels <= feels+2) && (cityTemperature >= temperature-2 && cityTemperature <= temperature+2)) {
                    cities.push(element); 
                }
            })
    }

    setTimeout(function(){ 
        const center = { lat: 39.7436, lng: -8.8071 };
        const aux = { lat: latitude, lng: longitude };
        
        // The map, centered at Caldas da Rainha
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6.5,
          center: center,
        });

        const marker = new google.maps.Marker({
            position: aux,
            map: map,
            title: name_,
        });

        var numbers_random = [];
        var i_places = 0;
        
        for(let index=0; index<cities.length; index++) {
            var random = Math.floor(Math.random() * cities.length);
            
            if(!numbers_random.includes(random)) {
                numbers_random.push(random);
            }
            else {
                while(numbers_random.includes(random)) {
                    random = Math.floor(Math.random() * cities.length);
                }

                numbers_random.push(random);
            }
        
            const random_element = cities[random];
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${random_element}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const { name, sys, coord } = data;
                    const li = document.createElement("li"); 

                    var randomCityName = name;
                    var randomCityCoutry = sys.country;
                    var randomCityLatitude = coord.lat;
                    var randomCityLongitude = coord.lon;
                    const aux1 = { lat: randomCityLatitude, lng: randomCityLongitude };

                    if(randomCityName.includes('Municipality')) {
                        randomCityName = randomCityName.replace("Municipality", "");
                    }

                    var myCity = { lat: latitude, lng: longitude };
                    var random_city = { lat: randomCityLatitude, lng: randomCityLongitude };

                    const near = citiesNear(myCity, random_city, 25);

                    if(near == false && i_places < 5) {
                        const marker = new google.maps.Marker({
                            position: aux1,
                            map: map,
                            title: randomCityName,
                        });

                        i_places++; 

                        li.classList.add("city");
                    
                        const markup = `
                            <h2 class="city-name" data-name="${randomCityName},${randomCityCoutry}">
                                <span>${randomCityName}</span>
                                <sup>${randomCityCoutry}</sup>
                            </h2>
                            `;
                        
                        li.innerHTML = markup;
                        list2.appendChild(li); 
                    }
                })          
        }

        const h = document.createElement("div"); 
            
        h.classList.add("city");
        
        const markup = `
            <h2 class="city-feels" data-feels="${feels}">
                Feels: <span>${feels}</span><sup>°C</sup>
            </h2>
            <h2 class="city-temperature" data-temperature="${temperature_max}, ${temperature_min}">
                Temperature Between: <span>${temperature_min}</span><sup>°C</sup> and <span>${temperature_max}</span><sup>°C</sup>
            </h2>
            <h2 class="city-wind" data-wind="${humidity}">
                Humidity: <span>${humidity}</span>%
            </h2>
            `;
        
            h.innerHTML = markup;
        list3.appendChild(h);
    }, 2000);
}

function citiesNear(checkPoint, centerPoint, km) {
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    
    return Math.sqrt(dx * dx + dy * dy) <= km;
}