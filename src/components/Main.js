import React from "react";
import Cards from "./Cards";
import Side from "./Side";
//import styled from "styled-components";


//Add your Styled Components code here:

const Main = ({images}) => {
  return(
  <div>
    <Cards images={images}/>
    <Side />
  </div>);
};

export default Main;
