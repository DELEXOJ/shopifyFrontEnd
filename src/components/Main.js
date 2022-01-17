import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
    const apiKey=process.env.REACT_APP_NASA_KEY;
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div/>;

  return (
      <div className="home1">
       <h6>Did you guess right?</h6>
    <div className="nasa-photo">
    <div className="nasa-photo-frame">
    {/*check if its a image or a video*/}
      {photoData.media_type==="image"?(
        <img
          src={photoData.url}
          alt={photoData.title}
          className="photo"
        />):(<iframe
        title="space-video"
        src={photoData.url}
        frameborder="2"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        className="photo"
        />
        )}</div>
      <div className=".nasa-photo-frame">
        <h1 className="nasa-title">{photoData.title}</h1>
        <p className="date">Date : {photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </div>
    <Link className="nav-back" to="/">Go Back</Link>
    </div>
  );
}
