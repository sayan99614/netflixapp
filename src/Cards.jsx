import React from 'react';

function Cards(props){
    return(
      <>
     <div className="cards">
     <div className="card">
      <img src={props.ImageSrc}  alt="" className="card_img"></img>
      <div className="card_info">
        <span className="class_catagory">{props.Info}</span>
        <h3 className="card_title">{props.SeriesName}</h3>
        <a href={props.TargetURL} target="_blank">
          <button>WATCH NOW</button>
        </a>
      </div>
      </div>
     </div>
    </>
    );
  }

  export default Cards;