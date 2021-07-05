import React from 'react';
import "./VideoCard.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            
            <img src= { `${base_url}${movie.backdrop_path}`} alt="movie poster" />

            <p>This is a film about coding</p>

            <h2>Movie title</h2>

            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard;
