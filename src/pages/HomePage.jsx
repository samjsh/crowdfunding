import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import catphoto from "./Photos/cat.jpg";

function Homepage() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">Help us support animals in need</h2>
          <p className="hero-text">
            Fosterfund is a crowdfunding platform that helps raise money for
            pets in shelters, foster homes, and vets. Your donation can make a
            big difference in the life of an animal in need.
          </p>
          <Link to="/projects" className="hero-btn">
            Donate Now
          </Link>
          <div className="cat-and-button-container">
            <div className="photo-container">
              <img src={catphoto} alt="cat" className="catphoto" />
            </div>
            <div className="photo-and-story-container">
              <h2 className="story-text">KOA'S STORY</h2>
              <p className="story-text">
                Interestingly, Koa's story gained a bit of fame when a street
                photographer snapped a stunning photo of her one day while she
                was out exploring her new neighbourhood with her foster family.
                The photographer initially thought Koa might be a wild cat due
                to her lack of collar, but upon speaking with her owners, he
                learned about Koa's past and the important role that Fosterfund
                played in helping her find a loving home.
              </p>
              <p className="story-text">
                The photographer was so moved by Koa's story that he decided to
                donate a portion of the profits from the photo sales to
                Fosterfund. His photo has since been featured in several art
                exhibits and magazines, bringing attention to the work that
                Fosterfund does to help animals like Koa.
              </p>
              <p className="story-text">
                Your donation to Fosterfund can help ensure that more animals
                like Koa receive the care they need to live happy and healthy
                lives. With your support, Fosterfund can continue to provide
                medical care, food, and shelter to animals in need, as well as
                work to find them permanent loving homes.
              </p>
              <p className="story-text">
                <Link to="/about" className="more-stories-link">
                  Click here for more stories
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about about-section">
        <div className="container">
          <h2 className="section-title">About Fosterfund</h2>
          <p className="section-text">
            Fosterfund was founded with the mission of providing financial
            support to pets in need. Whether it's for food, medical expenses, or
            other necessities, we aim to help animals in shelters, foster homes,
            and vets get the care they need to live happy and healthy lives.
            With the help of our community of donors, we've already helped
            hundreds of pets across the country.
          </p>
          <Link to="/about" className="about-btn">
            Learn More
          </Link>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2023 Fosterfund. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
