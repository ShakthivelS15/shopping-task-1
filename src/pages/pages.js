import React from 'react';
import { Carousel, Col, Row, Nav, Link, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Truck, Wallet2, ShieldLock } from 'react-bootstrap-icons';
import './pages.css';
import newImage from '../images/new.jpg';
import img1 from '../images/img/img1.png';
import img2 from '../images/img/img2.png';
import img3 from '../images/img/img3.png';
import img4 from '../images/img/img4.png';
import img5 from '../images/img/img5.png';
import img6 from '../images/img/img6.png';
import men from '../images/k.png';
import men1 from '../images/men/menof1.jpg';
import men2 from '../images/men/menof2.jpg';
import men3 from '../images/men/menof3.jpg';
import brand1 from '../images/brand/brand1.jpg';
import brand2 from '../images/brand/brand2.jpg';
import brand3 from '../images/brand/brand3.jpg';
import gril from '../images/GRIL/one.jpg';
import gril1 from '../images/GRIL/brend22.jpg';
import gril2 from '../images/GRIL/brend23.jpg';
import gril3 from '../images/GRIL/brend24.jpg';
import offer from '../images/offer.jpg';
import new0 from '../images/Camera/new.jpg';
import new1 from '../images/Camera/new2.jpg';
import new2 from '../images/Camera/new3.jpg';
import new3 from '../images/Camera/new4.jpg';



function Pages() {
  return (
    <>
      {/* section1 */}
      <section>
        <Carousel slide={false} className='section1media'>
          <Carousel.Item>
            <img className="d-block w-100" src={newImage} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={newImage} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={newImage} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* section2 */}
      <section className="py-4" >
        <Row className="w-100 maininfo" style={{marginLeft:'20px'}}>
          <Col xs={12} md={3} className="mb-4 info ">
            <div className="d-flex align-items-center ">
              <Truck className="icon1 me-3 text-left" size={30} />
              <div>
                <div>FREE SHIPPING</div>
                <div className="offertext ">On all orders of USD 250.00+</div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-4 info">
            <div className="d-flex align-items-center">
              <Truck className="icon1 me-3 text-left" size={30} />
              <div>
                <div>2 YEARS WARRANTY</div>
                <div className="offertext ">Damaged products will be refunded</div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-4 info">
            <div className="d-flex align-items-center">
              <Wallet2 className="icon1 me-3 text-left" size={30} />
              <div>
                <div>SECURE PAYMENT</div>
                <div className="offertext ">We offer a safe shopping guarantee</div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="mb-4 info">
            <div className="d-flex align-items-center">
              <ShieldLock className="icon1 me-3 text-left" size={30} />
              <div>
                <div>MONEY BACK IN 15 DAYS</div>
                <div className="offertext ">15-day money-back guarantee</div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* section3*/}
      <section >
        <Row className="align-items-center">
          <Col xs={12} lg={4} className="text-center">
            <img src={men} className="img-fluid menlagre" alt="For Men's" />
          </Col>
          <Col xs={12} lg={8}>
            <Row className="text-center">
              <Col xs={12} >
             <div className='menhead'>   | FOR MEN'S | </div>
              </Col>
              <Col xs={12} >
                <Nav className="ms-auto justify-content-center mt-2 section2text">
                  <Nav.Link className='menlink2' href="/NEWPRODUCTS">NEW PRODUCTS</Nav.Link>
                  <Nav.Link className='menlink menlink2' href="/BESTSELLER">BEST SELLER</Nav.Link>
                  <Nav.Link className='menlink2' href="/TOPRATED">TOP RATED</Nav.Link>
                  <Nav.Link className='menlink2' href="/SALEOFF">SALE OFF</Nav.Link>
                </Nav>
              </Col>
              <Col xs={12} className="text-center">
                <img src={men1} className="img-foot my-2 menimg" alt="foot1" />
                <img src={men2} className="img-foot my-2 menimg" alt="foot1" />
                <img src={men3} className="img-foot my-2 menimg" alt="foot1" />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      {/* section4 */}
      <section >
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} className="col-auto">
              <div className="cap-border"></div>
            </Col>
            <Col xs={12} md={4} className="text-center ">
              <img src={brand1} className="brand brand1" alt="Adidas" />
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img src={brand2} className="brand brand2" alt="Reebok" />
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img src={brand3} className="brand brand3" alt="New Balance" />
            </Col>
            <Col xs={12} className="col-auto">
              <div className="cap-border"></div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* section5 */}
      <section >
        <Row>
          <div className='offer'>
          </div>
        </Row>
      </section>

      {/* section6 */}
      <section >
        <Row className="align-items-center">
          <Col xs={12} lg={8}>
            <Row className="">
              <Col xs={12} className="text-center menlink2">
                | FOR LADIES |              </Col>
              <Col xs={12}>
                <Nav className="ms-auto justify-content-center mt-2 mr-4">
                  <Nav.Link className='menlink2' href="/NEWPRODUCTS">NEW PRODUCTS</Nav.Link>
                  <Nav.Link className='menlink menlink2' href="/BESTSELLER">BEST SELLER</Nav.Link>
                  <Nav.Link className='menlink2' href="/TOPRATED">TOP RATED</Nav.Link>
                  <Nav.Link className='menlink2' href="/ SALE OFF"> SALE OFF</Nav.Link>
                </Nav>
              </Col>
              <Col md={12} className="menof ">
                <img src={gril1} className="img-foot mx-1 my-2 menimg" alt="foot1" />
                <img src={gril2} className="img-foot mx-1 my-2 menimg" alt="foot1" />
                <img src={gril3} className="img-foot mx-1 my-2 menimg" alt="foot1" />
              </Col>

            </Row>
          </Col>
          <Col xs={12} lg={4} className="grilimg">
            <img src={gril} className="img-fluid" alt="For Men's" />
          </Col>
        </Row>
      </section>

      {/* section7 */}
      <section >
        <Row className="footer-section text-center py-4">
          <Col lg={12}>
            <div>
              <div className="imgtop inline-block mt-5 mb-3">@ Toby's Boutique</div>
              <div className="imgtop1 mt-1 mb-3">Follow us on Instagram</div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              <img src={img1} className="img-foot mx-1 my-2" alt="foot1" />
              <img src={img2} className="img-foot mx-1 my-2" alt="foot2" />
              <img src={img3} className="img-foot mx-1 my-2" alt="foot3" />
              <img src={img4} className="img-foot mx-1 my-2" alt="foot4" />
              <img src={img5} className="img-foot mx-1 my-2" alt="foot5" />
              <img src={img6} className="img-foot mx-1 my-2" alt="foot6" />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Pages;
