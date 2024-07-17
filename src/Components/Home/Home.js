import React, { Fragment, useState } from 'react';
import Header from './Header';
import "./Home.css";
import { Carousel } from 'react-bootstrap';
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic6 from "../../assets/pic6.jpg";
import pic7 from "../../assets/pic7.jpg";
import FAQ from "../../FAQs/FAQS";
import Data from '../../Data';
import Footer from '../Footer/Footer';
import OrderFormModal from '../OrderNowModal/OrderNowModal'; 

const Home = () => {
  const [showModal, setShowModal] = useState(false); 


  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const plogsItems = Data.map((item, index) => (
    <div className='col-md-4' key={index}>
      <div className='box'>
        <img src={item.img} alt=" " />
        <h2>{item.title}</h2>
        <span>{item.time}</span>
        <h6>{item.price}</h6>
      </div>
      <button  className="ordernow" onClick={handleShowModal}>Order Now</button>
    </div>
  ));

  return (
    <Fragment>
      <Header />
      <section className='numbers'>
        <div className='container'>
          <div className="row">
            <div className='col-md-3'>
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className='col-md-3'>
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className='col-md-3'>
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className='col-md-3'>
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className='pride' id="aboutus">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={pic1} alt=" " />
            </div>
            <div className='col-md-6'>
              <h2>We pride ourselves on making real food from the best ingredients</h2>
              <p>Every dish is crafted with care, using only fresh, high-quality components to ensure great taste and nutrition. By focusing on wholesome foods, we create meals that are both delicious and healthy</p>
              <button><a href="mailto:yousefkhalil010@gmail.com" >Learn More</a></button>
            </div>
          </div>
        </div>
      </section>
      <section className='ingredients'>
        <div className='container'>
          <div className="row">
            <div className='col-md-6'>
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>We take pride in our craftsmanship and attention to detail, ensuring every dish is prepared with care and precision. By using only the finest ingredients, we guarantee a dining experience that delights the senses. Our commitment to excellence shines through in every handmade meal we serve</p>
              <ul>
                <li>Taste the love and care we put into every meal.</li>
                <li>We believe in the artistry of cooking and the joy it brings.</li>
                <li>From our kitchen to your table, enjoy a truly exceptional dining experience.</li>
                <li>Discover the unparalleled quality of our handmade dishes</li>
              </ul>
              <button><a href="mailto:yousefkhalil010@gmail.com" >Learn More</a></button>
            </div>
            <div className='col-md-6'>
              <img src={pic2} alt=" " />
            </div>
          </div>
        </div>
      </section>
      <section className='paralex'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>When a man's stomach is full it makes no
              difference whether he is rich or poor.</h2>
              <p>When a man's stomach is full, wealth and status no longer matter. In that moment of contentment,<br /> the difference between rich and poor disappears, reminding us of our shared humanity and the simple joys that unite us all.</p>
              <a href="https://brookrest.com/our-story/" >Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>
      <section className='blogs' id="explore">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <h2>Explore Our Foods</h2>
              <p>Discover a world of culinary delights at our restaurant! Our menu offers a diverse range of dishes, crafted with the freshest ingredients and inspired by global flavors. From succulent steaks and fresh seafood to vegetarian specialties and decadent desserts, there's something to satisfy every palate. Join us for an unforgettable dining experience where quality meets creativity.</p>
            </div>
          </div>
          <div className='row'>
            {plogsItems}
          </div>
        </div>
      </section>
      <section className='slider' id="reviews">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    src={pic6}
                    alt=""
                  />
                  <Carousel.Caption>
                    <h5>Rama Nizam</h5>
                    <p>"The food was absolutely delicious, with each dish bursting with flavor and beautifully presented. The service was exceptional; the staff were attentive and friendly ,Bravo"</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={pic7}
                    alt=""
                  />
                  <Carousel.Caption>
                    <h5>Fadi Tarazi</h5>
                    <p>"The service was top-notch. The staff went above and beyond to ensure we had a great evening. I highly recommend this place and look forward to my next visit!"</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h1 className="heading">
          contact us
        </h1>
        <div className="form-container">
          <div className="box-container">
            <div className="box">
              <i className="fa fa-globe" aria-hidden="true"></i>
              <h3>Address:</h3>
              <p>Zababdeh-Main Street</p>
            </div>
            <div className="box">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <h3>Email:</h3>
              <p>yousefkhalil010@gmail.com</p>
            </div>
            <div className="box">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <h3>PhoneNumber:</h3>
              <p>+970599873879</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
      <OrderFormModal show={showModal} handleClose={handleCloseModal} />
    </Fragment>
  )
}

export default Home;

