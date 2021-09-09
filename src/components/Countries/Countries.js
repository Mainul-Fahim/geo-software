import React, { useState } from 'react';
import allCurrency from '../../CurrencyData/CurrencyData';

const Countries = () => {

    const [currency, setCurrency] = useState('');
    const [country, setCountry] = useState([]);

    const handleClick = () => {
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
                setCountry(data.data);
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    const handleLoadMore = () => {

        

    }

    return (
        <div className="text-center mt-5">
            <h1>Geo Software</h1>
            <div className="d-flex mt-5 ms-5 justify-content-center">

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
                    <div className="btn btn-primary" onClick={() => handleClick()}>Find Countries</div>
                </div>
            </div>
            <p className="me-5 mt-3 mb-3">List of Countries: </p>
            <div className="d-flex justify-content-center"> 
                <table class="table table-hover table-bordered w-75">
                    <tbody>
                        {country.slice(0,10).map(country=><tr>

                            <td colspan="4" >{country.name}</td>
                           
                        </tr>)}
                    </tbody>
                </table>
            </div>
            <button onClick={() => handleLoadMore()} className="btn btn-primary mt-3 mb-3">Load More</button>
        </div>
    );
};

export default Countries;