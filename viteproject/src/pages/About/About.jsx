import React from "react";
import founder from "../../assets/founder-pic.jpg";
import "./about.css";

const About = () => {
  return (
    <div id="about" style={{ height: "100vh" }}>
      <h1>About DREAM2DE</h1>
      <p>
        Explore the World with Us: Where Dreams Take Flight! Hi there! We're
        like superheroes for people who want to go to different countries for
        cool adventures and learning. Our name is [Consultancy Name], and we're
        here to help you have amazing experiences in faraway places! Imagine
        meeting new friends, learning about different cultures, and going on
        exciting journeys. We started because we love traveling and learning
        from people all around the world. We want to help you do the same! Have
        you ever thought about going to school or working in a different country
        when you grow up? Well, we're the ones who can help make that happen. We
        know everything about how to make your dreams come true – from finding
        great schools to helping your family move to a new place. Our team is
        like a group of friendly experts who know all the tricks to make your
        journey smooth and fun. We understand that it can be a little scary to
        go to a new place, but don't worry – we'll be with you every step of the
        way! Our special power is making sure you have a fantastic time while
        you explore the world. We've helped lots of kids, parents, and even
        grown-ups make their wishes of living and studying in different
        countries come true. Just imagine the stories you'll have to tell when
        you're older – stories about making new friends, trying yummy foods
        you've never heard of, and learning things you never knew existed. We're
        here to make those stories happen! So, if you're excited about going on
        big adventures and discovering new things, come join us at [Consultancy
        Name]. We're like your travel buddies, and we can't wait to help you
        make your dreams take flight. Let's start this amazing journey together!
      </p>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "300px" }}
      >

        <div className="col-md-4" style={{textAlign:"center", height: "100%" }}>
          <img src={founder} style={{ height: "100%" }} />
        </div>
        <div className="col-md-8">
          <h2>Founder Profile</h2>
          <p>
            Today, [Founder's Name] stands as a symbol of courage and
            determination, proving that dreams are worth chasing no matter how
            far they seem. Through their guidance and the legacy they've built
            at [Consultancy Name], [Founder's Name] continues to inspire
            countless individuals to explore, learn, and grow on the global
            stage. So, as you embark on your own journey with [Consultancy
            Name], remember that [Founder's Name]'s spirit of discovery and
            compassion is guiding your way. Their story is a reminder that with
            the right guidance and a heart full of dreams, there's no limit to
            what you can achieve in this wide world.
          </p>
        </div>

        {/* </div> */}
      </div>
    
    </div>
  );
};

export default About;
