
const DisplayListCity = ({ city, citySearchResult, handleLoadMore, metaData }) => {

    // useEffect(() => {
    //     setInterval(() => {
    //         window.location.reload();
    //     }, 3000)
    // }, [])

    const handleClickPlus = () => {
        setInterval(() => {
            window.location.reload();
        }, 30000)
        // const finalMetaData = metaData.filter(city => city.name === cityName);

        //finalMetaData.map(city =>city.longitude)

        // const div = document.createElement('div');

        // div.innerHTML = `
        //               <li>Longitude: ${finalMetaData[0].longitude}</li>
        //               <li>Latitude: ${finalMetaData[0].latitude}</li>
        //               <li>Population: ${finalMetaData[0].population}</li>
        //               `;
        //         document.getElementById('final-data').appendChild(div);

        // console.log(finalMetaData);
        // setFinalData(finalMetaData);


    }

    return (
        <div>
            {/* <div className="d-flex justify-content-center">
                <table class="table table-hover table-bordered w-75">
                    <tbody>
                        {city.slice(0, 10).map(country => <tr>

                            <Link to={`/regions/${country.slice(-2)}`}></Link>
                            <td id="allCountry" colspan="4" ><Link to={`/cities/${country.slice(-2)}`} style={{ textDecoration: 'none' }}>{country.split(',')[0]} </Link></td>

                        </tr>)}
                        <tr>
                            <td id="moreCountryDiv"></td>
                        </tr>
                        {citySearchResult.map(country => <tr>


                            <td id="countrySearch" colspan="4" >{country}</td>

                        </tr>)}
                    </tbody>
                </table>
            </div> */}



            <div className="d-flex m-3 p-3">
                {metaData.slice(0, 10).map(city => <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <h5 class="card-title">{city.name}</h5>
                        {/* <button id="plus-btn" onClick={() => handleClickPlus(city.id)} class="btn btn-primary mt-3 mb-2">+</button> */}

                        {/* <div id="meta-div" style={{ display: 'none' }}>
                            <li>Longitude : {city.longitude}</li>
                            <li>Latitude: {city.latitude}</li>
                            <li>Population: {city.population}</li>
                        </div> */}

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


                        {/* <li>{data.longitude}</li>
                                <li>{data.latitude}</li>
                                <li>{data.population}</li> */}
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