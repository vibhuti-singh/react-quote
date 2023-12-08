import React, { useContext, useEffect, useState } from 'react';
import QuoteContext from '../context/QuoteContext';

let autoplay;

const Card = () => {
  const { quoteData, dispatch } = useContext(QuoteContext);
  const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');

  useEffect(() => {
    
    startAutoplay();

    
    return () => {
      clearInterval(autoplay);
    };
  }, [quoteData]); 

  const handleClick = async () => {
    const response = await fetch('http://quotable.io/random');
    const data = await response.json();
    dispatch({
      type: 'GET_DATA',
      payload: data,
    });
    setBackgroundColor(getRandomColor());
  };

  const startAutoplay = () => {
    autoplay = setInterval(() => {
      handleClick(); 
    }, 5000);
  };

  const stopAutoplay = () => {
    clearInterval(autoplay);
  };

  const getRandomColor = () => {
    const colors = ['#f0f0f0', '#e6f7ff', '#ffe6e6', '#e6ffe6', '#f9e79f']; 
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="card p-5 shadow-lg" style={{ backgroundColor }}>
      {quoteData ? (
        <>
          <h1 className="display-4">{quoteData.content}</h1>
          <p className="text-secondary">-{quoteData.author}</p>
          <span>
            <span className="badge rounded-0 text-bg-primary">{quoteData.tags[0]}</span>
          </span>
        </>
      ) : (
        <h1 className="display-4">No data yet</h1>
      )}
      <span>
       
        <button className="btn btn-success border rounded-0 w-25 my-2" onClick={startAutoplay}>
          Play
        </button>
        <button className="btn btn-danger border rounded-0 w-25 my-2" onClick={stopAutoplay}>
          Pause
        </button>
      </span>
    </div>
  );
};

export default Card;
