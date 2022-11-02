const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data))
    }
    
    const displayCountries = countries => {
    //for(const country of countries){
    //console.log(country)
    //}
    const countriesContainer = document.getElementById('countries-container')
    countries.forEach(country => {
    const countriesDiv = document.createElement('div')
    countriesDiv.classList.add('country')
    countriesDiv.innerHTML = `<img class='w-50' src='${country.flags.png}'>
    <h6>Name: ${country.name.common}</h6>
    <p>Capital: ${country.capital?country.capital[0] : "No Capital"}</p>
    <button class='btn btn-danger' onClick="loadCountryDetails('${country.cca2}')">Details</button>
    `
    countriesContainer.appendChild(countriesDiv)
    })
    }
    const loadCountryDetails= (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
    }
    
    const displayCountryDetails = country =>{
    console.log(country)
    const detailsContainer = document.getElementById('details-container')
    detailsContainer.innerHTML = ``;
    const detailsDiv = document.createElement('div')
    detailsDiv.innerHTML = `<img src='${country.flags.png}'>
    <h6>Name: ${country.name.common}</h6>
    <p>Capital: ${country.capital?country.capital[0] : "No Capital"}</p>
    <small>Population: ${country.population},</small>
    <small>Languages: ${country.languages.eng}</small>`
    detailsContainer.appendChild(detailsDiv)
    }
    loadCountries();