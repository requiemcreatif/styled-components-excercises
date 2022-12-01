import React from "react";
//import styled from "styled-components";

//Add your Styled Components code here:


const Cards = ({images}) => {
  return( 
  <div>
        {images.map((image) => (
            <div key={image.id}>
                <img src={image.imgUrl} alt="" />
                <section>
                <h2>{image.title} </h2>
                <p>{image.text} </p>
                </section>
            </div>
        ))}  
  </div>);
};

export default Cards;
