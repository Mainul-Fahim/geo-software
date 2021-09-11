import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DisplayListCity from '../DisplayListCity/DisplayListCity';
import SortAndFilterCIty from '../SortAndFilterCity/SortAndFilterCIty';
import { handleClickRefresh } from '../StatesAndFunctions/StatesAndFunctions';
import { handleLoadMore } from '../StatesAndFunctions/StatesAndFunctions';

const Cities = () => {

    const { id } = useParams();

    const [city, setCity] = useState([]);
    const [cityName, setCityName] = useState('');
    const [sorting, setSorting] = useState('');
    const [citySearchResult, setCitySearchResult] = useState([]);
    const [metaData, setMetaData] = useState([]);
    const [totalCities, setTotalCities] = useState({});

    useEffect(() => {
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "1c8bec90d8msh4fe16494e72b79ep16f4c4jsn4f21e6d6fea7"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTotalCities(data.metadata);
                const extraData = data.data;
                console.log(extraData);
                setMetaData(extraData);
                const allCountries = data.data.map(data => data.name + ',' + data.countryCode);
                const ascendingCountries = sorting === 'Descending' ? allCountries.sort().reverse() : allCountries.sort();
                console.log(allCountries);
                console.log(ascendingCountries);
                setCity(ascendingCountries);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    const handleSort = () => {

        console.log('clicked');
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "1c8bec90d8msh4fe16494e72b79ep16f4c4jsn4f21e6d6fea7"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const allCountries = data.data.map(data => data.name);
                const ascendingCountries = sorting === 'Descending' ? allCountries.sort().reverse() : allCountries.sort();
                console.log(allCountries);
                console.log(ascendingCountries);
                setCity(ascendingCountries);
            })
            .catch(err => {
                console.error(err);
            });

    }

    const handleOnSubmitCity = (cityName, sorting, setCitySearchResult) => {

        console.log(cityName, 'clicked');

        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${id}&namePrefix=${cityName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "1c8bec90d8msh4fe16494e72b79ep16f4c4jsn4f21e6d6fea7"
            }
        })
            .then(response => response.json())
            .then(data => {
                const allCountries = data.data.map(data => data.name);
                const ascendingCountries = sorting === 'Descending' ? allCountries.sort().reverse() : allCountries.sort();

                if (cityName === "") {
                    alert("Please enter!");
                }
                else {
                    setCitySearchResult(ascendingCountries);
                }
            })
            .catch(err => {
                console.error(err);
            });
    };



    return (

        <div className="text-center mt-5">
            <h1>Geo Software </h1>
            <div className="d-flex mt-5 ms-5 justify-content-center">
                <h3>Region Selected : {id}</h3>
                <h3 className="ms-5 ps-5">Total no of Cities: {totalCities.totalCount>0?totalCities.totalCount:'Sorry no of cities'}</h3>

                <div className="ms-5 pt-4 mt-3">
                    <div className="btn btn-success" onClick={() => handleClickRefresh()}>Refresh Page</div>
                </div>

            </div>
            {/* filter by countryName and sorting div starts */}

            <SortAndFilterCIty sorting={sorting} setSorting={setSorting} setCityName={setCityName} setCitySearchResult={setCitySearchResult} cityName={cityName} handleOnSubmitCity={handleOnSubmitCity} handleSort={handleSort} />


            {/* Country list table div starts       */}

            <div>
                <DisplayListCity city={city} citySearchResult={citySearchResult} handleLoadMore={handleLoadMore} metaData={metaData} />
            </div>

        </div>
    );
};

export default Cities;