import React from 'react';
import { Link } from 'react-router-dom';

const DisplayListCity = ({city,citySearchResult,handleLoadMore}) => {
    return (
        <>
        <div className="d-flex justify-content-center">
            <table class="table table-hover table-bordered w-75">
                <tbody>
                    {city.slice(0, 10).map(country => <tr>

                        {/* <Link to={`/regions/${country.slice(-2)}`}></Link> */}
                        <td id="allCountry" colspan="4" ><Link to={`/cities/${country.slice(-2)}`} style={{textDecoration:'none'}}>{country.split(',')[0]} </Link></td>

                    </tr>)}
                    <tr>
                        <td id="moreCountryDiv"></td>
                    </tr>
                    {citySearchResult.map(country => <tr>
                        
                        
                        <td id="countrySearch" colspan="4" >{country}</td>

                    </tr>)}
                </tbody>
            </table>
        </div>
        <button onClick={() => handleLoadMore(city,'moreCountryDiv')} className="btn btn-primary mt-3 mb-3">Load More</button>
    </>
    );
};

export default DisplayListCity;