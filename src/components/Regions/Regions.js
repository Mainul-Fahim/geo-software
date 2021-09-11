import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DisplayList from '../DisplayList/DisplayList';
import DisplayListRegion from '../DisplayListRegion/DisplayListRegion';
import SortAndFilter from '../SortAndFilter/SortAndFilter';
import SortAndFilterRegion from '../SortAndFilterRegion/SortAndFilterRegion';
import { handleLoadMore } from '../StatesAndFunctions/StatesAndFunctions';
import { handleOnSubmitRegion } from '../StatesAndFunctions/StatesAndFunctions';
import { handleClickRefresh } from '../StatesAndFunctions/StatesAndFunctions';

const Regions = () => {

    const { id } = useParams();

    const [region,setRegion] = useState([]);
    const [regionName, setRegionName] = useState('');
    const [sorting, setSorting] = useState('');
    const [totalRegion, setTotalRegion] = useState({});
    const [regionSearchResult, setRegionSearchResult] = useState([]);

    useEffect(() => {
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${id}/regions`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "1c8bec90d8msh4fe16494e72b79ep16f4c4jsn4f21e6d6fea7"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setTotalRegion(data.metadata);
                const allCountries = data.data.map(data =>data.name+ ','+data.countryCode);
                const ascendingCountries= sorting==='Descending'?allCountries.sort().reverse():allCountries.sort();
                console.log(allCountries);
                console.log(ascendingCountries);
                setRegion(ascendingCountries);
            })
            .catch(err => {
                console.error(err);
            });
    }, [])

    const handleSort = () => {

        console.log('clicked');
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${id}/regions`, {
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
                setRegion(ascendingCountries);
            })
            .catch(err => {
                console.error(err);
            });

    }

    const handleOnSubmitRegion = (regionName,sorting,setRegionSearchResult) => {
        
        console.log(regionName, 'clicked');
        
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${id}/regions?namePrefix=${regionName}`, {
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
    
                if(regionName===""){
                    alert("Please enter!");
                }
                else {
                setRegionSearchResult(ascendingCountries);
                }
            })
            .catch(err => {
                console.error(err);
            });
    };
    
    

    return (
        <div className="text-center mt-5">
            <h1>Geo Software {id}</h1>
            <div className="d-flex mt-5 ms-5 justify-content-center">
                <h3>Country Selected : {id}</h3>
                <h3 className="ms-5 ps-5">Total no of Regions: {totalRegion.totalCount>0?totalRegion.totalCount:'Sorry no regions'}</h3>

                <div className="ms-5 pt-4 mt-3">
                    <div className="btn btn-success" onClick={() => handleClickRefresh()}>Refresh Page</div>
                </div>
                
            </div>
            {/* filter by countryName and sorting div starts */}

            <SortAndFilterRegion sorting={sorting} setSorting={setSorting} setRegionName={setRegionName} setRegionSearchResult={setRegionSearchResult} regionName={regionName} handleOnSubmitRegion={handleOnSubmitRegion} handleSort={handleSort} />
            

            {/* Country list table div starts       */}
            
             <DisplayListRegion region={region} regionSearchResult={regionSearchResult} handleLoadMore={handleLoadMore} />
        </div>
    );
};

export default Regions;