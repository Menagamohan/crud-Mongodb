import React from 'react';

// Import images
import plate from './images/plate.png';
import bun from './images/bun.png';
import cream from './images/cream.png';
import dinner from './images/dinner.png';
import juice from './images/juice.png';
import sec from './images/sec.jpg';
import background from './images/background.png';
import food from './images/food.png';
import fried from './images/fried.png';
import bigimg from './images/bigimg.jpg';
import c1 from './images/c1.jpg';
import c2 from './images/c2.jpg';
import c3 from './images/c3.jpg';
import c4 from './images/c4.jpg';
import c5 from './images/c5.jpg';
import c6 from './images/c6.jpg';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import p6 from './images/p6.png';
import fd from './images/fd.jpg';
import biryani from './images/biryani.webp';
import error from './images/error.png';
import pizza2 from './images/pizza2.png';
import a13 from './images/a13.webp';
import a76 from './images/a76.jpg';
import a77 from './images/a77.webp';
import a78 from './images/a78.jpg';
import Desktop from './images/Desktop.jpg';
import food2 from './images/food2.jpg';
import Gs from './images/Gs.jpg';
import Indian from './images/Indian.jpg';
import wp from './images/wp.webp';
import wp8 from './images/wp8.jpg';
import pngfood2 from './images/pngfood2.png';
import logo from './images/logo.png';

// Import your CSS file
import './Home.css';
import { redirect } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="intro-container">
        <div className="flex-container">
          <div className="flex-row">
            <img src={plate} alt="Plate" className="image" />
            <div className="text-container">
            <h4 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'blue', marginBottom: '15px' }}>
  The Spectacle Before Us Was Indeed Sublime.
</h4>

              <p className="description">
                Apparently, we had reached a great height in the atmosphere, for the sky was a dead black,
                and which lifts the horizon of the sea to the level of the spectator on a hillside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="card-container">
        <div className="card">
          <img src={bun} className="card-img" alt="Card 1" />
        </div>
        <div className="card">
          <img src={cream} className="card-img" alt="Card 2" />
        </div>
        <div className="card">
          <img src={dinner} className="card-img" alt="Card 3" />
        </div>
        <div className="card">
          <img src={juice} className="card-img" alt="Card 4" />
        </div>
        <div className="card">
          <img src={sec} className="card-img" alt="Card 5" />
        </div>
      </section><br/>

      <center>
        <h1 style={{color:'blue'}}>Taste Our Foods & Enjoy</h1>
        <p>Allow our Chef to deliver the perfect private dinner or cocktail party experience in your <br/>
        home; or let us simply add a little extra flavor to your next office meeting, boat trip, or beach picnic.<br/> 
        By partnering with our sibling location Rosewater Wine & Spirits, we can offer a full array of bar<br/> 
        services and beverage selections. Email us to learn more.</p>
      </center>

      {/* Food Items Section */}
      <section className="food-items">
        <div className="food-item">
        <img 
      src={a13} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Breakfast Bowl</h2>
          <p>Black Bean Cake, Greens, Tomato & Avocado<br/> Pico drizzled with Lime Cream (Add egg $1)</p>
        </div>
        <div className="food-item">
        <img 
      src={a76} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Egg Sandwich</h2>
          <p>Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
        </div>
        <div className="food-item">
        <img 
      src={a77} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Breakfast Burrito</h2>
          <p>Three Scrambled Eggs, Cheddar, Housemade Black Bean Cake, Avocado, Pico, & Lime Cream</p>
        </div>
        <div className="food-item">
        <img 
      src={a78} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '650px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Veggie Jammie</h2>
          <p>Everything Bagel with Homemade Tofu Herb Spread, Cucumber, Tomato, Red Onion, & Arugula</p>
        </div>
        <div className="food-item">
        <img 
      src={Desktop} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Bagel with Cream Cheese</h2>
          <p>Plain, Cranberry, or Everything</p>
        </div>
        <div className="food-item">
        <img 
      src={food2} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Breakfast Pastries</h2>
          <p>Three Scrambled Eggs, Cheddar, Housemade Black Bean Cake, Avocado, Pico, & Lime Cream</p>
        </div>
        <div className="food-item">
        <img 
      src={Gs} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Fried Egg</h2>
          <p>Everything Bagel with Homemade Tofu Herb Spread, Cucumber, Tomato, Red Onion, & Arugula</p>
        </div>
        <div className="food-item">
        <img 
      src={Indian} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Breakfast Jammie</h2>
          <p>Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
        </div>
        <div className="food-item">
        <img 
      src={wp} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Smoked Salmon Bagel</h2>
          <p>Black Bean Cake, Greens, Tomato & Avocado Pico drizzled with Lime Cream (Add egg $1)</p>
        </div>
        <div className="food-item">
        <img 
      src={wp8} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '600px', height: '130px' }}
       />
          <h2 style={{color:'blue'}}>Breakfast Jammie</h2>
          <p>Everything Bagel with Cream Cheese, Bacon, Tomato, Red Onion, Basil Pesto, Arugula</p>
        </div>
        
        
      </section>

      <section className="pb-0 pt-7 bg-dark" data-zanim-timeline='{"delay":0}' data-zanim-trigger="scroll">
        <center>
  <div className="container">
    <div className="row">
      <div className="row-lg-3 row-md-4 row-5 d-none d-md-block">
        <div className="overflow-hidden position-relative">
          <img 
            className="position-absolute bottom-0" 
            src={background}
            alt="Fried food image" 
            style={{ maxWidth: '200px', height: 'auto' }}
            data-zanim-xs='{"animation":"","from":{"y":100},"to":{"y":0},"delay":0,"duration":1.5}'
          />
        </div>
      </div>
      <div className="row-lg-4 row-md-6 text-center text-md-left">
        <p className="text-primary mb-1 font-weight-bold">Hungry?</p>
        <h4 className="text-white">We will home deliver!</h4>
        <button className="btn btn-primary mt-3" type="button">Make an Order</button>
      </div>
    </div>
    
  </div>
  </center>
</section><br/><br/><br/>

<center>
  <h2>Catering</h2>
  <h1 style={{color:'blue'}}>We Manage Your Events</h1>
  <p>Allow our Chef to deliver the perfect private dinner or cocktail party experience in your<br/> 
  home; or let us simply add a little extra flavor to your next office meeting, boat trip, or<br/> 
  beach picnic. By partnering with our sibling location Rosewater Wine & Spirits, we can <br/>
  offer a full array of bar services and beverage selections. Email us to learn more.</p><br/><br/>
 
  <div className="d-flex flex-row bd-highlight mb-3">
  {/* Left Image */}
  <div className="p-2 bd-highlight">
    <img 
      src={food} 
      alt="Wedding Catering" 
      className="img-fluid" 
      style={{ maxWidth: '500px', height: 'auto' }}
    />
  </div>
  
  {/* Middle Section with Text and Button */}
  <div className="p-2 bd-highlight text-center">
    <p className="lead mb-3">We Cater in Weddings,<br/>
       Corporate Functions<br/>
       and Events</p>
    <button className="btn btn-primary">HIRE US NOW</button>
  </div>
  
  {/* Right Image */}
  <div className="p-2 bd-highlight">
    <img 
      src={fried} 
      alt="Event Catering" 
      className="img-fluid" 
      style={{ maxWidth: '900px', height: '300px' }}
    />
  </div>
</div>

</center>
<center>
<div className="d-flexs flex-row bd-highlight mb-3">
  <div className="p-2 bd-highlight">
  <img 
      src={bigimg} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '1000px', height: '400px' }}
    />
  </div>
  <div class="p-2 bd-highlight">
  <img 
      src={c1} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '500px', height: '200px' }}
    /><br/>
    <img 
      src={c2} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '500px', height: '200px' }}
    />
  </div>
  <div class="p-2 bd-highlight">
  <img 
      src={c3} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '500px', height: '200px' }}
    /><br/>
    <img 
      src={c4} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '500px', height: '200px' }}
    />
  </div>
  <div class="p-2 bd-highlight">
  <img 
      src={c5} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '500px', height: '200px' }}
    /><br/>
     <img 
      src={c6} 
      alt="Event Catering" 
      className="img-f" 
      style={{ maxWidth: '500px', height: '200px' }}
    />
  </div>
</div>
</center>


    <div className="about-us-container d-flex flex-row bd-highlight mb-3">
  <div className="text-container p-2 bd-highlight">
    <h3>About Us</h3>
    <h1 style={{color:'blue'}}>Who Are We?</h1>
    <p>
      We are a chain of theme restaurants founded in 1971 in London. In <br />
      1979, the cafe began covering its walls with rock and roll <br />
      memorabilia, a tradition which expanded to others in the chain.
    </p>
    <br />
    <div className="image-gallery d-flex flex-row bd-highlight mb-3">
      <div className="image-container p-2 bd-highlight">
        <img src={p1} alt="Image 1" className="about-image" />
        <img src={p4} alt="Image 1" className="about-image" />
      </div>
      <div className="image-container p-2 bd-highlight">
        <img src={p2} alt="Image 2" className="about-image" />
        <img src={p5} alt="Image 1" className="about-image" />
      </div>
      <div className="image-container p-2 bd-highlight">
        <img src={p3} alt="Image 3" className="about-image" />
        <img src={p6} alt="Image 1" className="about-image" />
      </div>
    </div>
  <div className="main-image p-2 bd-highlight">
    <img src={fd} alt="Main Image" className="main-image" />
  </div>
  </div>
</div><br/><br/>


<center>
  <h3 style={{color:'red'}}>Location & Timing</h3>
  <h1 style={{color:'blue'}}>Contact with us</h1>
</center><br/><br/>
<div className="d-flex2 flex-row bd-highlight mb-3">
  {/* Address and Contact Info Section */}
  <div className="p-2 bd-highlight3">
    <p>Av. Paz Soldán 290, San<br />
      Isidro, Lima 27 - Peru</p>
    <p>+511 442-2777</p>
    <p>mail@restaurantpro.com</p>
  </div>

  {/* Hours of Service Section */}
  <div className="p-2 bd-highlight3">
    <h3>Hours of Service</h3>
    <h5>Monday to Saturday</h5>
    <p>1:00 pm - 3:00 pm and<br />
      7:00 pm - 11:00 pm</p>
    <h5>Sunday</h5>
    <p>12:30 pm - 3:30 pm</p>
  </div>

  {/* Telephone Support Section with Image */}
  <div className="p-2 bd-highlight3">
    <img src={biryani} alt="Support" className="support-image" />
    <h3>Telephone Support:</h3>
    <p>Monday to Saturday from<br />
      9:00 am to 9:00 pm</p>
    <button>MAKE A RESERVATION</button>
  </div>
</div><br/><br/><hr/><br/><br/>
<center>
<img src={error} 
        alt="Image 2" 
        className="img-fluid2" 
        style={{ maxWidth: '50px', height: '50px' }} />
        <h2 style={{color:'blue'}}>Oops! Something went wrong.</h2>
        <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
</center><br/><br/>
<hr/><br/><br/>
<center>
<section
      className="bg-white overflow-hidden"
      data-zanim-timeline="{&quot;delay&quot;:0}"
      data-zanim-trigger="scroll"
    >
      <img
        className="position-absolute r-0 b-0 d-none d-lg-block"
        src={pizza2}
        alt="Testimonial Image" // Add a meaningful alt description
        width="400px"
        data-zanim-xs='{"animation":"slide-left","delay":0.5,"duration":1}'
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-lg-5 text-center">
            <span className="fas fa-quote-left mb-2"></span>
            <div
              className="owl-carousel owl-theme owl-hvr-nav owl-nav-outer"
              data-options='{"autoplay":true,"loop":true,"items":1,"responsive":{"0":{"dots":true,"nav":false},"767":{"dots":false,"nav":true}}}'
            >
              {/* First Testimonial */}
              <div className="item">
                <div className="row mb-2">
                  <div className="col text-danger">
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                  </div>
                </div>
                <p>
                  Restaurant Pro probably makes one of the best pizzas in town. I would definitely post their pizza picture someday. But <br/>
                  today I have tasted their other items, so I’ve mentioned that.
                </p>
                <p className="fs-1 font-weight-bold" style={{color:'red'}}>- Richard Hendriks</p>
              </div>
              {/* Second Testimonial */}
              <div className="item">
                <div className="row mb-2">
                  <div className="col text-danger">
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                  </div>
                </div>
                <p>
                  Restaurant & Cafe aims at promoting the foodstuff industry through the branches we establish and through new dishes. We<br/>
                  integrate different cultures by merging Oriental and Western recipes.
                </p>
                <p className="fs-1 font-weight-bold" style={{color:'red'}}>- Lily Rose</p>
              </div>
              {/* Third Testimonial */}
              <div className="item">
                <div className="row mb-2">
                  <div className="col text-danger">
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                    <span className="fas fa-star">*</span>
                  </div>
                </div>
                <p>
                  I'm thrilled with the possibilities that Slick brought to my web design agency. <br/>
                  Creating is easier with Slick.
                </p>
                <p className="fs-1 font-weight-bold" style={{color:'red'}}>- Noah Kingon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</center><br/><br/><hr/><br/><br/>

<section class="food-section">
  <div class="container">
    <div class="flex-container">
      <div class="flex-item food-image">
        <img src={pngfood2} alt="Food Image" class="img-fluid" />
      </div>
      
    
      <div class="flex-item content">
        <img src={logo} alt="Logo" class="logo" />
        <h1 class="title" style={{color:'blue'}}>Want To Taste<br />Our Food?</h1>
        <button class="btn-order">ORDER ONLINE</button>
      </div><br/><br/>

      <div class="flex-item nav-column">
        <h2 class="nav-title" style={{color:'red'}}>ABOUT</h2>
        <ul class="nav-list">
          <li><a href="#!">About</a></li>
          <li><a href="#!">Services</a></li>
          <li><a href="#!">Careers</a></li>
          <li><a href="#!">Hire Us</a></li>
        </ul>
      </div>

      <div class="flex-item nav-column">
        <h2 class="nav-title"style={{color:'red'}}>RESOURCES</h2>
        <ul class="nav-list">
          <li><a href="#!">Terms</a></li>
          <li><a href="#!">Help</a></li>
          <li><a href="#!">Privacy</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>







    </>
  );
}

export default Home;
