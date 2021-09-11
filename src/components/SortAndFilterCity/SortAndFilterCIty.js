import React from 'react';

const SortAndFilterCIty = ({setSorting,setCityName,handleOnSubmitCity,sorting,cityName,setCitySearchResult,handleSort}) => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <p className="me-5 mt-3 pt-2 mb-3">List of Countries: </p>

                <input className="p-1 mt-3 mb-2" onChange={(e) => {
                    const selectedCountry = e.target.value;
                    setCityName(selectedCountry);
                }} name="search" placeholder="Enter country name" />

                <button onClick={() => handleOnSubmitCity(cityName,sorting,setCitySearchResult)} className="btn btn-secondary p-1 mt-3 mb-2 ms-3">Submit</button>
                
                <div className="m-3">
                    <select class="form-select form-select-sm ps-4 ms-2" onChange={(e) => {
                        const selectedSorting = e.target.value;
                         setSorting(selectedSorting);
                    }} onClick={() =>handleSort()}  aria-label=".form-select-sm example">
                        
                        <option selected>Ascending</option>
                        <option >Descending</option>
                      
                    </select>
                </div>
            </div>
        </>
    );
};

export default SortAndFilterCIty;