import "./about.css"
import { AiOutlineWhatsApp,AiFillLinkedin ,AiFillFacebook,AiFillYoutube} from 'react-icons/ai';
import React from "react";
import { Animation } from "react-easy-animations";
import { BsArrowRight } from 'react-icons/bs';
export const Story=()=>{
    return (
      <div style={{ width:"100%" }}>
        <div
        className="flex justify-content-start align-items-end ms-5"
        style={{
          position: "absolute",
          zIndex: "5",
          top: "10%",
          height: "20vh",
          width: "50%",
        }}
      >
        <h1 className="study_heading">
          <span className="pipe">|</span>Services
        </h1>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/18/19/04/graduation-995042_1280.jpg"
        className="study_bg"
      />
       
        <div className="paragraph col-lg-12 col-sm-12">
        <Animation
           type="fadeInFromBottom"
           duration="1000ms"
          //  delay="1s"
           direction="normal"
           timing="ease"
           iteration="1"
           fillMode="none"
           className="w-100"
        >
             <p style={{fontSize:"14px",fontWeight:"500",fontStyle:"Fantasy",fontVariant:"smallCaps"}}>Welcome to Dream2Degree, a leading consultancy dedicated to providing exceptional guidance and support for students aspiring to pursue higher education in esteemed institutions across the world. We understand that studying abroad is not merely a phase 
              of academic life but a transformative journey that shapes your future and opens doors to boundless 
              opportunities. At Dream2Degree, we are committed to being your trusted companion throughout this life-changing experience</p>
              </Animation>
                   </div>
                   <div className="about-sub-card"> 
                     <div className="col-lg-4 col-sm-12 ">
                     <Animation
           type="fadeInFromLeft"
           duration="1000ms"
          //  delay="1s"
           direction="normal"
           timing="ease"
           iteration="1"
           fillMode="none"
           className="w-100"
        >
                         <img src="https:media.istockphoto.com/id/1083619800/photo/crazy-angry-professor-yelling-and-pointing-with-a-stick.jpg?s=612x612&w=0&k=20&c=ykXbJvGrrRltXpJNl9iB55cf393d4NtCkDSg9tsuqU0=" style={{height:"100%",width:"100%"}}/>
                         </Animation>
                     </div>
                    
                     <div className="col-lg-8 col-sm-12" style={{padding:"20px"}}>
                     <Animation
           type="fadeInFromRight"
           duration="1000ms"
          //  delay="1s"
           direction="normal"
           timing="ease"
           iteration="1"
           fillMode="none"
           className="w-100 "
        >
                         <h2 id="main-heading">ABOUT US</h2>
                         <p style={{fontStyle:"Fantasy",fontVariant:"smallCaps"}}>About Dream2Degree: Empowering Your Dreams of Global Education</p>
                              <p  style={{fontStyle:"Fantasy",fontVariant:"smallCaps"}}>Our mission is clear - to empower and inspire students from all walks of life to achieve their dream of studying abroad.
                                 We strive to remove barriers, bridge gaps, and provide a seamless pathway to quality education in countries like Australia, the UK, USA, Canada, Ireland, and New Zealand. At Dream2Degree,
                                  we believe that education is a force that transcends borders and transforms lives. Our goal is to make this force accessible to you, regardless of your background or circumstances.</p>
                         <h2 id="main-heading">Our Mission</h2>
                         <p  style={{fontStyle:"Fantasy",fontVariant:"smallCaps"}}>Our mission is clear - to empower and inspire students from all walks of life to achieve their dream of studying abroad. We strive to remove barriers, bridge gaps, and provide a 
                          seamless pathway to quality education in countries like Australia, the UK, USA, Canada, Ireland, and New Zealand. At Dream2Degree, we believe that education is a force that transcends borders and transforms lives. Our goal is
                           to make this force accessible to you, regardless of your background or circumstances.
</p>
<div className="col-lg-12 col-sm-12" style={{textAlign:"start"}}>
                    <h3 style={{textAlign:"center"}} id="main-heading">Our Values</h3>
                    <ul class="list-group">
    <li style={{fontSize:"16px"}}><BsArrowRight style={{fontSize:"15px"}}/>  Integrity: <span style={{fontSize:"13px",fontWeight:"600",fontStyle:"Fantasy",fontVariant:"smallCaps"}}>Honesty and transparency form the foundation of our interactions with students, parents, and partner institutions</span></li>
    <li style={{fontSize:"16px"}}><BsArrowRight style={{fontSize:"15px"}}/>  Empathy: <span style={{fontSize:"13px",fontWeight:"600",fontStyle:"Fantasy",fontVariant:"smallCaps"}}>We understand the hopes and dreams of aspiring students and approach our services with genuine empathy and compassion.
</span></li>
    <li style={{fontSize:"16px"}}><BsArrowRight style={{fontSize:"15px"}}/>  Excellence: <span style={{fontSize:"13px",fontWeight:"600",fontStyle:"Fantasy",fontVariant:"smallCaps"}}>Our commitment to excellence drives us to continually improve and deliver the best possible services to our students</span></li>
  </ul>
  <div style={{textAlign:"center" ,marginTop:"10px"}}>
  <h3 id="main-heading">Join the Dream2Degree Family</h3>
  <p style={{fontStyle:"Fantasy",fontVariant:"smallCaps"}}>Embark on a life-changing journey with Dream2Degree, where your dreams take center stage. Whether you are a high school student planning for undergraduate studies or a working professional seeking advanced degrees, 
    we are here to guide you towards a brighter future</p></div>
                   </div>
</Animation> 
                     </div>
                    
                   
                   </div> 
                  
                   
      </div>
    );
    
}


export const CoreTeam=()=>{
    return(
        <div>
        <div className="about-card"></div>
       
                <div className="about-sub-card"> 
                  <div className="col-lg-4 col-sm-12 image">
                      <img src="https://thumbs.dreamstime.com/b/confident-math-professor-teaching-front-chalkboard-confident-young-math-professor-standing-front-chalkboard-197220191.jpg" style={{height:"100%",width:"100%"}}/>
                  </div>
                  <div className="col-lg-8 col-sm-12 " style={{padding:"20px"}}>
                      <h4 style={{color:"blue"}} >Founder</h4>
                      <h1 >NAVEEN YATHAPU</h1>
                      <h5>Experience:</h5>
                      <p>Naveen Yathapu (Founder of i20fever) along with his friends had researched for long hours to learn about US University application process and had documented all their study abroad
                          university search experience. Little did they know that the “Scrapbook” they developed would help them build i20fever.</p>
                          <p>Naveen Yathapu (Founder of i20fever) along with his friends had researched for long hours to learn about US University application process and had documented all their study abroad
                          university search experience. Little did they know that the “Scrapbook” they developed would help them build i20fever.</p>
                          <h5>Education</h5>
                          <p>Naveen Yathapu (Founder of i20fever) along with his friends had researched for long hours to learn about US University application process and had documented all their study abroad
                          university search experience. Little did they know that the “Scrapbook” they developed would help them build i20fever.</p>
                  </div>
                </div>
                <div
      className="welcome-section-cont card-deck row card-container ms-0"
      style={{ width: "100%" }}
    >
     
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top "
          src="https://leadershipcircle.com/wp-content/uploads/2020/08/Katie-Everett-.png"
          style={{ height: "90%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">GRE</h5>
          <p className="card-text">
            IELTS test is both paper and computer based, Skills evaluated
            Listening, Reading, Writing & Speaking...
          </p>
          <div className="flex ">
            <div className="coreteam-card-icon "><a href=""><AiOutlineWhatsApp style={{color:"green"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillLinkedin style={{color:"black"}}/></a></div>
            <div className="coreteam-card-icon "><a href=""><AiFillFacebook style={{color:"black"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillYoutube style={{color:"red"}}/></a> </div>
          </div>
        </div>
      </div>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top "
          src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
          style={{ height: "90%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">IELTS</h5>
          <p className="card-text">
            IELTS test is both paper and computer based, Skills evaluated
            Listening, Reading, Writing & Speaking...
          </p>
          <div className="flex ">
            <div className="coreteam-card-icon "><a href=""><AiOutlineWhatsApp style={{color:"green"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillLinkedin style={{color:"black"}}/></a></div>
            <div className="coreteam-card-icon "><a href=""><AiFillFacebook style={{color:"black"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillYoutube style={{color:"red"}}/></a> </div>
          </div>
        </div>
      </div>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0YazIavyG5ZyOCZQd_zMp5ca3aFgE5UntA&usqp=CAU"
          style={{ height: "90%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">TOEFL</h5>
          <p className="card-text">
            IELTS test is both paper and computer based, Skills evaluated
            Listening, Reading, Writing & Speaking...
          </p>
          <div className="flex ">
            <div className="coreteam-card-icon "><a href=""><AiOutlineWhatsApp style={{color:"green"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillLinkedin style={{color:"black"}}/></a></div>
            <div className="coreteam-card-icon "><a href=""><AiFillFacebook style={{color:"black"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillYoutube style={{color:"red"}}/></a> </div>
          </div>
        </div>
      </div>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top "
          src="https://images.squarespace-cdn.com/content/v1/58e167a8414fb5c0b2b8c13e/1503561540900-K0FXVM3QNP4843AJGQCD/Circle+Profile.jpg"
          style={{ height: "90%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">IELTS</h5>
          <p className="card-text">
            IELTS test is both paper and computer based, Skills evaluated
            Listening, Reading, Writing & Speaking...
          </p>
          <div className="flex ">
            <div className="coreteam-card-icon "><a href=""><AiOutlineWhatsApp style={{color:"green"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillLinkedin style={{color:"black"}}/></a></div>
            <div className="coreteam-card-icon "><a href=""><AiFillFacebook style={{color:"black"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillYoutube style={{color:"red"}}/></a> </div>
          </div>
        </div>
      </div>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuki5lrBmRRvk5KhjrMwByvTFz2c5Cb9vWTA&usqp=CAU"
          style={{ height: "90%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">GMAT</h5>
          <p className="card-text">
            IELTS test is both paper and computer based, Skills evaluated
            Listening, Reading, Writing & Speaking...
          </p>
          <div className="flex ">
            <div className="coreteam-card-icon "><a href=""><AiOutlineWhatsApp style={{color:"green"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillLinkedin style={{color:"black"}}/></a></div>
            <div className="coreteam-card-icon "><a href=""><AiFillFacebook style={{color:"black"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillYoutube style={{color:"red"}}/></a> </div>
          </div>
        </div>
      </div>
      <div
        className="card col-lg-3 col-md-3 m-2 p-2"
        style={{ boxShadow: "0px 4px 16px 0px #bfbfbf" }}
      >
        <img
          className="card-img-top "
          src="https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png"
          style={{ height: "90%", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">IELTS</h5>
          <p className="card-text">
            IELTS test is both paper and computer based, Skills evaluated
            Listening, Reading, Writing & Speaking...
          </p>
          <div className="flex ">
            <div className="coreteam-card-icon "><a href=""><AiOutlineWhatsApp style={{color:"green"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillLinkedin style={{color:"black"}}/></a></div>
            <div className="coreteam-card-icon "><a href=""><AiFillFacebook style={{color:"black"}}/></a> </div>
            <div className="coreteam-card-icon "><a href=""><AiFillYoutube style={{color:"red"}}/></a> </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

