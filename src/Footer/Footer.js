import React from 'react';
import { Row, Col, Image, InputGroup } from 'react-bootstrap';
import { JournalMedical, EnvelopeOpen, Telephone } from 'react-bootstrap-icons';
import './footer.css';

function Footer() {
    return (
        <div className='bg-img'>
            <Row className='HEADER'>
                <Col md={3} className='ft-text'>
                    <div>LATEST PRODUCTS</div>
                    <div className='line'></div>
                    <div className='mt-3'>
                        <JournalMedical className="icon icons" /> 
                        <span className='ft-footer-p'> Buford, GA 21346 USA </span>
                    </div>
                    <div className='mt-3'>
                        <Telephone className="icon icons" /> 
                        <span className='ft-footer-p'> (800) 555-0175</span>
                    </div>
                    <div className='mt-3'>
                        <EnvelopeOpen className="icon icons" /> 
                        <span className='ft-footer-p'> tobysboutique@gmail.com </span>
                    </div>
                </Col>
                <Col md={3} className='ft-text'>
                    <div>INFORMATION</div>
                    <div className='line'></div>
                    <div className='ft-footer-p mt-3'>Order Status </div>
                    <div className='ft-footer-p mt-3'> Gift Cards </div>
                    <div className='ft-footer-p mt-3'> Free Shipping</div>
                    <div className='ft-footer-p mt-3'> Returns & Exchanges </div>
                    <div className='ft-footer-p mt-3'>International </div>
                </Col>
                <Col md={3} className='ft-text'>
                    <div>NEED HELP</div>
                    <div className='line'></div>
                    <div className='ft-footer-p mt-3'>Help Center </div>
                    <div className='ft-footer-p mt-3'>Allure Market Terms </div>
                    <div className='ft-footer-p mt-3'> Author Terms</div>
                    <div className='ft-footer-p mt-3'> Meet the Maker</div>
                    <div className='ft-footer-p mt-3'>International → Contact </div>
                </Col>
                <Col md={3} className='ft-text'>
                    <div>NEWSLETTER</div>
                    <div className='line'></div>
                    <div className='ft-footer-p'>Get All the Latest Information Events Sales and Offers</div>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
