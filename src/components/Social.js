import React from 'react';
import './Social.css'; 
import { Button } from 'react-bootstrap';

const Social = () => {
  return (
    <div className='text-center social-section mt-5 mb-5'>
      <div className="company-logos d-flex justify-content-center align-items-center flex-wrap">
        
      </div>
      
      

      <div className='container mt-0'>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <img className='mt-2' src={`${process.env.PUBLIC_URL}messageicon.png`} alt='messageicon' />
            <h6 className='mb-1'>Share team inboxes</h6>
            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <Button className='button'>Learn more → </Button>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}Delivericon.png`} alt='delivericon' />
            <h6>Deliver instant answers</h6>
            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <Button className='button'>Learn more → </Button>
          </div>
          <div className='col-md-4 text-center'>
            <img src={`${process.env.PUBLIC_URL}reporticon.png`} alt='reporticon' />
            <h6>Manage your team with reports</h6>
            <p>Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.</p>
            <Button className='button'>Learn more → </Button>
          </div>
        </div>
      </div>
      <div >
        <h1>Frequently asked questions</h1>
      </div>
</div>  
  );
}

export default Social;
