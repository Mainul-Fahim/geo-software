import React, { useState } from 'react';
import allCurrency from '../../CurrencyData/CurrencyData';

const Countries = () => {

    const [currency, setCurrency] = useState('');
    const [country, setCountry] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [sorting, setSorting] = useState('');
    const [countrySearchResult, setCountrySearchResult] = useState([]);

    const handleClickFindCountries = () => {
        
        document.getElementById('moreCountry').innerHTML = "";

        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries?currencyCode=${currency}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "1c8bec90d8msh4fe16494e72b79ep16f4c4jsn4f21e6d6fea7"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const allCountries = data.data.map(data =>data.name);
                const ascendingCountries= sorting==='Descending'?allCountries.sort().reverse():allCountries.sort();
                console.log(allCountries);
                console.log(ascendingCountries);
                setCountry(ascendingCountries);
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    const handleLoadMore = () => {

        const moreCountry = country.slice(10);
        console.log(moreCountry);
        if (moreCountry.length !== 0) {

            document.getElementById('moreCountry').innerText = moreCountry.map(country => country.name);

        }
        else {
            document.getElementById('moreCountry').innerText = "Sorry nothing to Load";
        }
    }

    const handleOnSubmit = () => {
        
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
                const ascendingCountries= sorting==='Descending'?allCountries.sort().reverse():allCountries.sort();

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

    const handleClickRefresh = ()=>{

        window.location.reload();
    }

    return (
        
        <div className="text-center mt-5">
            <h1>Geo Software</h1>
            
            <div className="d-flex mt-5 ms-5 justify-content-center">

                {/* filter country by currency Div starts */}
                <div className="mt-1">
                    <p className="text-secondary">Select a currency</p>
                    <select class="form-select form-select-sm" onChange={(e) => {
                        const selectedCurrency = e.target.value;
                        setCurrency(selectedCurrency);
                    }} aria-label=".form-select-sm example">
                        {allCurrency.map(currency => <>
                            <option selected>{currency}</option>
                        </>)}
                    </select>
                </div>
                <div className="ms-5 pt-4 mt-3">
                    <div className="btn btn-primary" onClick={() => handleClickFindCountries()}>Find Countries</div>
                </div>

                <div className="ms-5 pt-4 mt-3">
                    <div className="btn btn-success" onClick={() => handleClickRefresh()}>Refresh Page</div>
                </div>
                
            </div>
              
              {/* filter country by currency div ends   */}

              {/* filter by countryName and sorting div starts */}

            <div className="d-flex justify-content-center">
                <p className="me-5 mt-3 pt-2 mb-3">List of Countries: </p>

                <input className="p-1 mt-3 mb-2" onChange={(e) => {
                    const selectedCountry = e.target.value;
                    setCountryName(selectedCountry);
                }} name="search" placeholder="Enter country name" />

                <button onClick={() => handleOnSubmit()} className="btn btn-secondary p-1 mt-3 mb-2 ms-3">Submit</button>
                
                <div className="m-3">
                    <select class="form-select form-select-sm ps-4 ms-2" onChange={(e) => {
                        const selectedSorting = e.target.value;
                         setSorting(selectedSorting);
                    }} aria-label=".form-select-sm example">
                        
                        <option selected>Ascending</option>
                        <option >Descending</option>
                      
                    </select>
                </div>
            </div>

              {/* Country list table div starts       */}
              
            <div className="d-flex justify-content-center">
                <table class="table table-hover table-bordered w-75">
                    <tbody>
                        {country.slice(0, 10).map(country => <tr>

                            <td id="allCountry" colspan="4" >{country}</td>

                        </tr>)}
                        <tr>
                            <td id="moreCountry"></td>
                        </tr>
                        {countrySearchResult.map(country => <tr>

                            <td id="countrySearch" colspan="4" >{country}</td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
            <button onClick={() => handleLoadMore()} className="btn btn-primary mt-3 mb-3">Load More</button>
        </div>
    );
};

export default Countries;