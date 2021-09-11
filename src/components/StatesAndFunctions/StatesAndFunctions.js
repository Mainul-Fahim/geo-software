
export const handleLoadMore = (geoData,moreCountryDiv) => {

    const moreCountry = geoData.slice(10);
    console.log(moreCountry);
    if (moreCountry.length !== 0) {

        document.getElementById('moreCountryDiv').innerText = moreCountry.map(country => country.name);

    }
    else {
        document.getElementById('moreCountryDiv').innerText = "Sorry nothing to Load";
    }
}

export const handleOnSubmit = (countryName,sorting,setCountrySearchResult) => {
    
    console.log(countryName, 'clicked');
    
    fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries?namePrefix=${countryName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "1c8bec90d8msh4fe16494e72b79ep16f4c4jsn4f21e6d6fea7"
        }
    })
        .then(response => response.json())
        .then(data => {
            const allCountries = data.data.map(data =>data.name);
            const ascendingCountries = sorting==='Descending'?allCountries.sort().reverse():allCountries.sort();

            if(countryName===""){
                alert("Please enter!");
            }
            else {
            setCountrySearchResult(ascendingCountries);
            }
        })
        .catch(err => {
            console.error(err);
        });
};

 
export const handleClickRefresh = ()=>{

    window.location.reload();
}