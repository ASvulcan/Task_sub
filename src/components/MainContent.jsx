import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
// import mainImage from '../asset/home.jpg'; 

function MainContent() {
  return (
    <>
        <div className="container">
      <div className = "head-text">
        <div className = "head-image1">
          <img src = {require ('../asset/home.jpg')} alt = "home img" />
        </div>
        <div class='text-on-image1'>
        <h1>YOUR HANSA-FLEX ONLINE-SHOP</h1>
        <p>Choose from over 60,000 articles and always find exactly the right product for your needs. We stock the full range.</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default MainContent;

{/* <h1>YOUR HANSA-FLEX ONLINE-SHOP</h1>
<p>Choose from over 60,000 articles and always find exactly the right product for your needs. We stock the full range.</p> */}