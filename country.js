
const search= async()=>{
    console.log(countryName.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`)
    response.json().then((data)=>{
        console.log(data);

        let name = data[0].name.common
        console.log(name);

        let official = data[0].name.official
        console.log(official);

        // console.log(data[0].currencies.name);
        // console.log(data[0].currencies.INR.symbol);
        for(var curr in data[0].currencies){
            var currencyName = data[0].currencies[curr].name
            var symbol = data[0].currencies[curr].symbol
        }
        console.log(currencyName);
        console.log(symbol);
        
        //languages
        let nationalLanguage = []
        for(var lang in data[0].languages){
            nationalLanguage.push(data[0].languages[lang])
        }
        console.log(nationalLanguage);
        
        let capital = data[0].capital
        console.log(capital);

        let languages = data[0].languages
        console.log(languages);

        let borders = data[0].borders
        console.log(borders);

        let area = data[0].area
        console.log(area);

        let googleMaps = data[0].maps.googleMaps
        console.log(googleMaps);

        let population = data[0].population
        console.log(population);

        let timeZones = data[0].timezones
        console.log(timeZones);

        let continents = data[0].continents
        console.log(continents);

        let flags = data[0].flags.png
        console.log(flags);
        
        result.innerHTML =`
        <div class="card mx-3 " style="width: 18rem;">
            <img src=${flags} id="flag" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${official}</li>
              <li class="list-group-item">${capital}</li>
              <li class="list-group-item">${currencyName}/li>
              <li class="list-group-item">${symbol}</li>
              <li class="list-group-item">${nationalLanguage}</li>
              <li class="list-group-item">${borders}</li>
              <li class="list-group-item">${area}</li>
              <li class="list-group-item">${googleMaps}</li>
              <li class="list-group-item">${timeZones}</li>
              <li class="list-group-item">${continents}</li>
            </ul>
          </div>
        `
    })
}

// common,official name,currency name,currency Symbol,capital,languages,borders,area,google maps, population, time zones, continent, flags-png