
const DisplayListCity = ({ city, citySearchResult, handleLoadMore, metaData }) => {

    const handleClickPlus = () => {
        setInterval(() => {
            window.location.reload();
        }, 30000)
       


    }

    return (
        <div>
            
            <div className="d-flex m-3 p-3">
                {metaData.slice(0, 10).map(city => <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <h5 class="card-title">{city.name}</h5>
            
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button onClick={() =>handleClickPlus()} class="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="btn btn-primary">+</div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div style={{listStyle:'none'}} class="accordion-body"><li>Longitude : {city.longitude}</li>
                                    <li>Latitude: {city.latitude}</li>
                                    <li>Population: {city.population}</li></div>
                            </div>
                        </div>

                    </div>
                    <div id="moreCountryDiv" className="card-body">

                    </div>

                </div>)}

            </div>
            {citySearchResult.map(country => <div style={{ border: '1px solid black', backgroundColor: 'lightYellow' }} className="m-2 p-2 w-30 ms-5">


                <div id="countrySearch" ><h5>{country}</h5></div>

            </div>)}
            <button onClick={() => handleLoadMore(city, 'moreCountryDiv')} className="btn btn-primary mt-3 mb-3">Load More</button>
        </div>
    );
};

export default DisplayListCity;