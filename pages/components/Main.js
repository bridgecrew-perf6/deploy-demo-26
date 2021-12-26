import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Thing from './Thing';


const backendUrl = process.env.NEXT_PUBLIC_THINGS_API;
const getThingsURL = `${backendUrl}api/v1/things`;
const refreshJWT = `${backendUrl}api/refresh`;


const  Main= (props)=> {
    const [thingsList, setThingsList] = useState([]);
    // Get Data on Component Load/reload/Mount
    useEffect(()=>{
        const config = {
            headers: {
                'Authorization': `Bearer ${props.token}`
            }
        }
        axios.get(getThingsURL, config).then(response=>{
            console.log(response.data);
            setThingsList(response.data);
        });
    }, [props.token]);

    return (
        <div>
            <h1>Things List Demo</h1>
            {thingsList.map((thing, index) =>{
                return <Thing key={index} name={thing.name} description={thing.description}/>
            })}
        </div>
    )
}

export default Main
