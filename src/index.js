import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import CardData from './CardData'

const alldata=(val)=>{
   return(
    <Cards ImageSrc={val.imagesrc}
    Info={val.info}
    SeriesName={val.seriesname}
    TargetURL={val.targetURL}
  />
   )
};


ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    {CardData.map(alldata)}
  </>
  ,
  document.getElementById("root")
);