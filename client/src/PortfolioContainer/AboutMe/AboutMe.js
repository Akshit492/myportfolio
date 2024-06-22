import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'
export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) =>{
    if(screen.fadeInScreen !== props.id)
    return 
    Animations.animations.fadeInScreen(props.id)
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  const SCREEN_CONSTSANTS ={
    description: "Currently a student and working on my skills as a developer. Front end and backend web development are the my areas of expertise. Also the knowlege of Programming languages like C , C++ and Python. Writing and Gaming are the desserts of my life",
    highlights : {
      bullets :[
         "Website Designing",
         "Front and Back end Web Development",
         "Languages like C and C++",
         "Data Structures and Algorithms",
         "Competetive Coding",
      ],
      heading : "The Skills I am Improving:"
    }
  }
  const renderHighlight = () =>{
    return(
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i)=>(
        <div className='highlight' key={i}>
          <div className=' highlight-blob'></div>
          <span>{value}</span>
        </div>
      ))
    )
  }

  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
       <div className='about-me-parent'>
         <ScreenHeading title={'About Me'} subHeading={'What Am I working on?'}/>
         <div className='about-me-card'>
           <div className='about-me-profile'></div>
           <div className='about-me-details'>
             <span className='about-me-description'>{SCREEN_CONSTSANTS.description}</span>
           <div className='about-me-highlights'>
             <div className='highlight-heading'>
               <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
             </div>
             {renderHighlight()}
           </div>
           <div className='about-me-options'>
           <button className='btn primary-btn'
           onClick={()=>ScrollService.scrollHandler.scrolltoHireMe()}
           >
              {""}
              Contact Me{" "}
            </button>
            <a href='AkshitResume.pdf' download='AkshitResume.pdf' >
              <button className='btn highlighted-btn'>Get Resume</button>
            </a> 
           </div>
           </div>
         </div>
         </div>    
    </div>
  );
}
