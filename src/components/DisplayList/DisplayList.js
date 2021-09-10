import React from 'react';
import { Link } from 'react-router-dom';

const DisplayList = ({country,countrySearchResult,handleLoadMore}) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <table class="table table-hover table-bordered w-75">
                    <tbody>
                        {country.slice(0, 10).map(country => <tr>

                            {/* <Link to={`/regions/${country.slice(-2)}`}></Link> */}
                            <td id="allCountry" colspan="4" ><Link to={`/regions/${country.slice(-2)}`} style={{textDecoration:'none'}}>{country.split(',')[0]} </Link></td>

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
        </>
    );
};

export default DisplayList;