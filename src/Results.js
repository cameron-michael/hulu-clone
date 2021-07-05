import React, { useEffect, useState }from 'react';
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import requests from "./requests";

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // run this code once when the Results components loads/ mounts
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies);
            setMovies(requests.data.results);
            return request;
        }

        fetchData();
    }, []);

    return (
        <div className="results">
            {movies.map(movie => (
                <VideoCard movie={movie} />
                
                
            ))}
        </div>
    );
}

export default Results;
