import React from "react";
import { Link } from "react-router-dom";
import "./AboutPage.css";
import dogphoto from "./Photos/buster.jpg";

function AboutPage() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h2 className="hero-title">Our Journey</h2>
          <p className="hero-text">
            <p>
              Fosterfund is a non-profit organisation founded in 2015 with a
              mission to help animals in need through connecting those who need
              help to those who want to help. Through our platform, we help
              provide financial assistance to pets in shelters, foster homes,
              and veterinary clinics, so they can receive the care they need to
              live happy, healthy lives.
            </p>
            <p>
              At Fosterfund, we believe that every animal deserves a chance at a
              better life and perhaps, we can be their chance at a more secure
              future. We know that behind every animal in need, there is a
              story, and we are dedicated to creating happy endings. Since our
              founding, we have helped hundreds of animals across the country
              through our platform. Our donors have made it possible for us to
              assist clinics, vets, fosterhomes and organisations provide
              life-saving medical care, food, and shelter to pets in need. We
              also work with rescue organizations and animal shelters to help
              find permanent, loving homes for the animals in our care. Our work
              would not be possible without the support of our generous donors
              and volunteers.
            </p>
            <p>
              We are grateful for every donation, big or small, that helps us
              continue our mission to help animals in need. At Fosterfund, we
              believe that together, we can make a difference in the lives of
              animals in need. We invite you to join us in our mission to help
              animals in need. Whether you choose to donate, volunteer, or
              spread the word about our organization, you can help us create
              happy endings for animals in need.
            </p>
          </p>
          <Link to="/projects" className="hero-btn">
            Donate Now
          </Link>
          <div>
            <div className="buddy-story-container">
              <h2>BUDDY'S STORY</h2>
              <p>
                Buddy's life started off on the wrong foot. He was born into a
                puppy mill, a place where dogs are bred in mass quantities for
                profit without proper care or attention. As a result, Buddy was
                severely malnourished and suffered from several health issues.
                Despite his condition, Buddy was forced to live in a cramped and
                unsanitary environment with little to no human interaction. One
                day, a Fosterfund volunteer visited the puppy mill and
                discovered Buddy.
              </p>
              <p>
                The volunteer was horrified by Buddy's condition and knew that
                they had to do something to help. They brought Buddy to a
                veterinarian and discovered that he had several health issues
                that needed immediate attention. Thanks to the support of
                Fosterfund, Buddy received the medical care and attention he
                needed to make a full recovery. He was given a proper diet,
                medication, and plenty of love and attention from his
                caretakers. Buddy's health slowly began to improve, and he
                eventually became strong and healthy enough to find a new home.
              </p>
              <p>
                After spending some time in a Fosterfund foster home, Buddy was
                adopted by a loving family. His new family provided him with a
                warm bed, plenty of toys, and all the love and attention he
                could ever want. Buddy quickly adjusted to his new life and
                became a beloved member of the family. Today, Buddy is a happy
                and healthy dog who loves to play fetch and cuddle with his
                family.
              </p>
              <p>
                His story is a testament to the power of Fosterfund and the
                impact that we can have on the lives of animals in need. Your
                donation to Fosterfund can help make more stories like Buddy's
                possible. With your support, we can continue to provide medical
                care, food, and shelter to animals in need, and work to find
                them permanent loving homes.
              </p>
              <p>
                <Link to="/projects">
                  Click here to donate and help more animals in need
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="more-stories-container">
        <section className="more-stories-section">
          <h2 className="more-stories-h2">Neuter Program</h2>
          Helping a Local Animal Shelter Fosterfund helped a local animal
          shelter by raising funds for their spay and neuter program. The
          shelter was struggling to cover the cost of the program, and
          Fosterfund was able to raise enough funds to cover the expenses. This
          allowed the shelter to continue to provide essential services to
          animals in need, and helped reduce the number of unwanted animals in
          the community. Thanks to the generous donations from Fosterfund and
          its supporters, the shelter was able to make a significant difference
          in the lives of animals and pet owners alike.
        </section>
        <section className="more-stories-section">
          <h2 className="more-stories-h2">Equiptment Funds</h2>
          Supporting a Veterinarian Clinic Fosterfund also supported a
          veterinary clinic in need of funding to purchase new equipment. The
          clinic had been using outdated equipment, which made it difficult for
          them to provide the best possible care to their patients. Fosterfund
          was able to raise enough funds to purchase the equipment, which
          improved the clinic's ability to provide high-quality care to their
          patients. The clinic was incredibly grateful for the support they
          received from Fosterfund, and the new equipment helped them to save
          the lives of many animals in need.
        </section>
        <section className="more-stories-section">
          <h2 className="more-stories-h2">Resourcing Funds</h2>
          Helping an Animal Rescue Organization Fosterfund was able to help an
          animal rescue organization that was struggling to cover the cost of
          caring for their rescued animals. The organization had taken in many
          animals that required extensive medical care and rehabilitation, which
          was very expensive. Fosterfund was able to raise enough funds to cover
          the cost of the care and rehabilitation of these animals, which helped
          the organization to continue to provide vital services to animals in
          need. Thanks to Fosterfund's support, many animals were able to
          receive the care they needed to recover and find new homes.
        </section>
      </div>
      <section className="about about-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <p className="section-text">
            Since our founding, Fosterfund has helped hundreds of animals across
            the country. Our donors have made it possible for us to provide
            financial support to pets in need, and to help them find permanent
            loving homes.
          </p>
          <p className="section-text">
            We believe that every animal deserves to be happy and healthy, and
            we're committed to making that a reality. With your support, we can
            continue to make a difference in the lives of animals in need.
          </p>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>© 2023 Fosterfund. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
