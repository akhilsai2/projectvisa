import "./about.css"
import { AiOutlineWhatsApp,AiFillLinkedin ,AiFillFacebook,AiFillYoutube} from 'react-icons/ai';

export const Story=()=>{
    return(
        <div >
            <div className="about-card"> </div>
            <div className="paragraph">
            <p>Having navigated the maze of studying abroad themselves, the founder of i20fever decided to make it their business to smoothen the process for others. A team of six members lay the foundation for i20 in 2006 in Hyderabad. In 2007, we helped over 350 students 
                achieve their dream. The number grew to over 10,000 by 2013. During the journey, we came to understand the importance of workshops and education fairs, and so we organized our own world education fairs and workshops to bring students and university representatives on a single
                 platform where they could communicate with one another directly. In 2015, our work was recognized by the AIRC
                  (American International Recruitment Council), who certified our contributions and services. Over the years we continue to learn, adapt, update and evolve with an unequivocal goal to help students find that right college. Now, with branches in several cities, 
                  expert counsellors and experienced staff, we are a family of more than 18,000 students who are studying across 5 countries.</p>
                  </div>
                  <div className="about-sub-card"> 
                    <div className="col-lg-4 col-sm-12 image">
                        <img src="https://media.istockphoto.com/id/1083619800/photo/crazy-angry-professor-yelling-and-pointing-with-a-stick.jpg?s=612x612&w=0&k=20&c=ykXbJvGrrRltXpJNl9iB55cf393d4NtCkDSg9tsuqU0=" style={{height:"100%",width:"100%"}}/>
                    </div>
                    <div className="col-lg-8 col-sm-12" style={{padding:"20px"}}>
                        <h2 id="main-heading">Founder Profile</h2>
                        <p >About Dream2Degree: Empowering Your Dreams of Global Education</p>
                             <p>Welcome to Dream2Degree, a leading consultancy dedicated to providing exceptional guidance and support for students aspiring to pursue higher education in esteemed institutions across the world. We understand that studying abroad is not merely a phase of academic life but a 
                              transformative journey that shapes your future and opens doors to boundless opportunities. At Dream2Degree,
                               we are committed to being your trusted companion throughout this life-changing experience.</p>
                    </div>
                  </div>
        </div>
    )
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

