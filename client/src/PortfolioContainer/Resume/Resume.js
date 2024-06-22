import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import index from 'react-typical'
import "./Resume.css"

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})


    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return 
        Animations.animations.fadeInScreen(props.id)
      };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props)=>{
        return(
<div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>
                            {props.fromDate + "-" + props.toDate}
                            </div>
                    ):(
                        <div></div>
                    )}
                    </div>
                    <div className='resume-sub-heading'>
                        <span>{props.subHeading ? props.subHeading : ""}</span>
                        </div>
                        <div className='resume-heading-description'>
                            <span>{props.description ? props.description:""}</span>
                            </div>
                </div>
            
        )
        
    };

    const resumeBullets = [
       {label: "Education", logoSrc:"education.svg"},
       {label: "Work Experience", logoSrc:"work-history.svg"},
       {label: "Programming Skills", logoSrc:"programming-skills.svg"},
       {label: "Projects", logoSrc:"projects.svg"},
       {label: "Technical Skills", logoSrc:"interests.svg"},
       

      ];
      
      const programmingSkillDetails=[
        {skill:"C" , ratingPercentage: 75 },
        {skill:"C++" , ratingPercentage: 75 },
        {skill:"Python" , ratingPercentage: 60 },
        {skill:"HTML" , ratingPercentage: 75 },
        {skill:"CSS" , ratingPercentage: 70 },
        {skill:"JavaScript" , ratingPercentage: 70 },
        {skill:"React Js" , ratingPercentage: 80 },
        {skill:"PHP" , ratingPercentage: 60 },
      ];

      const TechnicalSkillDetails=[
        {skill:"Jenkins" , ratingPercentage: 75 },
        {skill:"Docker" , ratingPercentage: 75 },
        {skill:"Kubernetes" , ratingPercentage: 60 },
        {skill:"ROBOT(Python)" , ratingPercentage: 75 },
        {skill:"ActiveMQ" , ratingPercentage: 70 },
        {skill:"Automation Scripting" , ratingPercentage: 70 },
        {skill:"PGSQL" , ratingPercentage: 80 },
        {skill:"CI/CD" , ratingPercentage: 60 },
      ];

const projectDetails=[
    {
        title:"Sending Automated E-mails",
        duration:{fromDate:"2020" , toDate: "2021"},
        description: "Sending Automated E-mails using Python without using G-mail",
        subHeading: "Technologies Used: Python ",
    },
    {
        title:"Examining The Air Quality Index",
        duration:{fromDate:"2020" , toDate: "2021"},
        description: "Using IOT for examining Air Quality Index",
        subHeading: "Technologies Used: Python , Arduino & Sensors ",
    },
    {
        title:"Personal Portfolio Website",
        duration:{fromDate:"2020" , toDate: "2021"},
        description: "A Personal Portfolio Website to show all my details at one place",
        subHeading: "Technologies Used: React JS , Bootstrap & CSS ",
    },
];







const resumeDetails=[
    <div className='resume-screen-container' key="education">
        <ResumeHeading
        heading={"Chandigarh University , CHANDIGARH"}
        subHeading={"Bachelors In COMPUTER SCIENCE ENGINNERING"}
        fromDate={"2020"}
        toDate={"2024"}
        />
        <ResumeHeading
        heading={"HIGHER SECONDARY EDUCATION "}
        subHeading={"D.C MODEL SENIOR SECONDARY SCHOOL"}
        fromDate={"2008"}
        toDate={"2020"}
        />
        </div>,

         <div className='resume-screen-container' key="work-experience">
             <div className='experience-container'>
             <ResumeHeading
        heading={"R&D Intern"}
        subHeading={"Nokia Solution and Networks Limited"}
        fromDate={"July 2023"}
        toDate={"August 2024"}
        />
        <div className='experience-description'>
            <span className='resume-description-text'>
                Contributed as a part of DevOps team at Nokia 
                </span>
            </div>

              <div className='experience-description'>
                  <span className='resume-description-text'>
                  I developed a software solution to facilitate Selective Functional Testing within NCC utilizing ML. I was also immersed in a new project focused on integrating Generative AI into NCC through LLM
and training procedures. Concurrently, I continued to identify manual tasks and deploy automation processes to optimize efficiency, reduce human effort, and minimize manual
intervention
                      </span>
                      <br/>
                              </div>
                              </div>
                  </div>,
                <div className='resume-screen-container programming-skills-container'
                key="programming-skills"
                >
                    {programmingSkillDetails.map((skill,index)=>(
                        <div className='skill-parent' key={index}>
                             <div className='heading-bullet'></div>
                             <span>{skill.skill}</span>
                             <div className='skill-percentage'>
                                 <div style={{width:skill.ratingPercentage + "%"}}
                                    className='active-percentage-bar'>
                                     </div>
                            </div>
                            </div>
                    ))}
                    </div>,

                    <div className='resume-screen-container' key="projects">
                        {projectDetails.map((projectDetails, index)=>(
                            <ResumeHeading
                            key={index}
                            heading={projectDetails.title}
                            subHeading={projectDetails.subHeading}
                            description={projectDetails.description}
                            fromDate={projectDetails.duration.fromDate}
                            toDate={projectDetails.duration.toDate}
                            />

                        ))}
                        </div>,

                        // <div className='resume-screen-container' key='interests'>
                        //     <ResumeHeading
                        //     heading='Gaming'
                        //     description='Gaming is my passion. It makes me feel great when I play with my friends. '
                        //     />
                        //     <ResumeHeading
                        //     heading='Music'
                        //     description='Music is the real stress reliever of my life. Whenever I feel exhausted Music charges me up with energy'
                        //     />
                        //     <ResumeHeading
                        //     heading='Writing'
                        //     description='“Writing is the only thing that when I do it, I don’t feel I should be doing something else.” —Gloria Steinem.I really love to write about different possibilities in this Universe'
                        //     />

                        //     </div>,

                        <div className='resume-screen-container programming-skills-container'
                        key="programming-skills"
                        >
                            {TechnicalSkillDetails.map((skill,index)=>(
                                <div className='skill-parent' key={index}>
                                     <div className='heading-bullet'></div>
                                     <span>{skill.skill}</span>
                                     <div className='skill-percentage'>
                                         <div style={{width:skill.ratingPercentage + "%"}}
                                            className='active-percentage-bar'>
                                             </div>
                                    </div>
                                    </div>
                            ))}
                            </div>,

             

];

const handleCarousal =(index)=>{
     let offsetHeight =360;
     let newCarousalOffset = {
         style: {transform:"translateY("+index*offsetHeight* -1 + "px)"}
     };
     setCarousalOffSetStyle(newCarousalOffset)
     setSelectedBulletIndex(index);
    };

    const getBullets=()=>{
        return resumeBullets.map((bullet, index)=>(
            <div 
            onClick={()=>handleCarousal(index)}
            className={index===selectedBulletIndex ? "bullet selected-bullet": "bullet"}
            key={index}
            >
                <img className='bullet-logo'
                src={require(`../../assets/Resume/${bullet.logoSrc}`)}
             alt="n"             
             />
              <span className="bullet-label">{bullet.label}</span>
                    </div>
        ))
    }
  
    const getResumeScreen=()=>{
        return(
            <div 
            style={carousalOffSetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail)=>ResumeDetail)}
                </div>
        );
    };
 return (
    <div className="resume-container screen-container fade-in" id={props.id || ''} >
        <div className='resume-content'>
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
           <div className='resume-card'>
               <div className='resume-bullets'>
                   <div className='bullet-container'>
                       <div className='bullet-icons'></div>
                       <div className='bullets'>{getBullets()}</div>
                       </div>
                   </div>
                   <div className='resume-bullets-details'>{getResumeScreen()}</div>
               </div>
            </div>
    </div>
  );
}
