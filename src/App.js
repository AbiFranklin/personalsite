import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import './App.css'
import arrow from './downArrow.svg'
import typeracer from './typeracer.png'
import schmidthaus from './schmidthaus.png'
import linkedin from './linkedin.png'
import github from './github.png'

let heights = ["35vh", "40vh", "45vh", "50vh"]
let top = ["5%", "7.5%", "10%"]
const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #f9f9f9;
  }
  
  .panel.about {
    background-color: #f9f9f9;
  }
  
  .panel.portfolio {
    background-color: #f9f9f9;
  }
  
  .panel.contact {
    background-color: #f9f9f9;
  }
`;

const App = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin>
        <Timeline
          wrapper={<div id="pinContainer" />}>
          <section className="panel blue">
            <div className="introLeft">
            </div>
            <div className="introRight">
              <h1>Abigayle Franklin</h1>
              <h2>Full Stack Developer</h2>
              <img src={arrow} />
            </div>
          </section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel about">
            <p>I was born and raised in southeast Michigan. The daughter of an artist and a computer programmer. My journey with computers began before I could talk, sitting in my highchair. In the 1st grade, my dad taught me Fox Pro. I took notes in my Lisa Frank notebook. I went on to study the completely unrelated field of Biology at the University of Michigan (Go Blue!). Post graduation, I fell into environmental compliance and safety. My husband‘s career eventually brought us to coastal Texas.</p>
            <p>My wanderlust and desire for a more portable career lead me back to my original love for computers - coding & design.</p>
            </section>
            
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel portfolio">
            <h1>Portfolio</h1>
              <div className="portContainer">
                <div className="port" style={{marginTop: `${top[Math.floor(Math.random() * Math.floor(3))]}`}}>
                <a href="https://eager-bose-4d69cb.netlify.com/" target="_blank">
                <img src={typeracer} style={{height: `${heights[Math.floor(Math.random() * Math.floor(4))]}`}}/></a>
                <p>Project: TypeRacer <br/>
                Team Size: 1 <br/>
                Role: Owner/Developer/Designer <br/>
                Build Time: 1 week<br/>
                Stack: React<br/></p>
                </div>
                <div className="port" style={{marginTop: `${top[Math.floor(Math.random() * Math.floor(3))]}`}}>
                <a href="https://www.theschmidthaus.org/" target="_blank">
                <img src={schmidthaus} style={{height: `${heights[Math.floor(Math.random() * Math.floor(4))]}`}}/></a>
                <p>Project: SchmidtHaus Message Board <br/>
                Team Size: 1 <br/>
                Role: Owner/Developer/Designer <br/>
                Build Time: 3 weeks<br/>
                Stack:MySQL<br/>
                Node<br/>
                React<br/>
                Grommet<br/></p>
                </div>
                <div className="port" style={{marginTop: `${top[Math.floor(Math.random() * Math.floor(3))]}`}}>
                <img src="https://picsum.photos/200/300" style={{height: `${heights[Math.floor(Math.random() * Math.floor(4))]}`}}/>
                <p>Project: TypeRacer <b/>
                Team Size: 1 <b/>
                Role: Owner/Developer <b/>
                Build Time: 2 weeks<b/>
                Stack:</p>                </div>
                <div className="port" style={{marginTop: `${top[Math.floor(Math.random() * Math.floor(3))]}`}}>
                <img src="https://picsum.photos/200/300" style={{height: `${heights[Math.floor(Math.random() * Math.floor(4))]}`}}/>
                <p>Project: TypeRacer <b/>
                Team Size: 1 <b/>
                Role: Owner/Developer <b/>
                Build Time: 2 weeks<b/>
                Stack:</p>                </div>
                <div className="port" style={{marginTop: `${top[Math.floor(Math.random() * Math.floor(3))]}`}}>
                <img src="https://picsum.photos/200/300" style={{height: `${heights[Math.floor(Math.random() * Math.floor(4))]}`}}/>
                <p>Project: TypeRacer <b/>
                Team Size: 1 <b/>
                Role: Owner/Developer <b/>
                Build Time: 2 weeks<b/>
                Stack:</p>                </div>
                <div className="port" style={{marginTop: `${top[Math.floor(Math.random() * Math.floor(3))]}`}}>
                <img src="https://picsum.photos/200/300" style={{height: `${heights[Math.floor(Math.random() * Math.floor(4))]}`}}/>
                <p>Project: TypeRacer <b/>
                Team Size: 1 <b/>
                Role: Owner/Developer <b/>
                Build Time: 2 weeks<b/>
                Stack:</p>
                </div>
              </div>
            </section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel contact">
            <span>
              <h1>Contact</h1>
              abifranklin@gmail.com<br/>
              <img src={linkedin} />
              <img src={github} />
            </span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default App;