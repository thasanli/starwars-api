import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DisplayData = (props) => {


    const [type, setType] = useState('');
    const [id, setId] = useState('');
    const [apiData, setApiData] = useState([])
    const [btn, setBtn] = useState(false)



    axios.get('https://swapi.dev/api/' + type + '/' + id)
        .then(response => { setApiData(response.data) })


    const displayData = () => {
        if (type === '') {
            return (
                ''
            );
        }
        if (type === 'planets') {
            return (
                <div>
                    <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                    <p>Name:  {apiData.name}</p>
                    <p>Climate: {apiData.climate}</p>
                    <p>Diametr: {apiData.diameter}</p>
                    <p>Population:  {apiData.population}</p>
                </div>
            );
        }
        if (type === 'starships') {
            return (
                <div>
                    <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                    <p>Name:  {apiData.name}</p>
                    <p>Model: {apiData.model}</p>
                    <p>Manufacturer: {apiData.manufacturer}</p>
                    <p>Length:  {apiData.length}</p>
                </div>
            );
        }
        if (type === 'vehicles') {
            return (
                <div>
                    <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                    <p>Name:  {apiData.name}</p>
                    <p>Model: {apiData.model}</p>
                    <p>Passengers: {apiData.passengers}</p>
                    <p>Length:  {apiData.length}</p>
                </div>
            );
        }

    }

    console.log(apiData);



    return (
        <div>
            <label> Search for:
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="planets">planets</option>
                    <option value="starships">starships</option>
                    <option value="vehicles">vehicles</option>
                </select>
            </label>
            <label> ID:
                <input type="text" onChange={(e) => setId(e.target.value)} />
            </label>
            <button>Search</button>

            {displayData()}

        </div>
    );
}


export default DisplayData;