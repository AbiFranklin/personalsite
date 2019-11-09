import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import './App.css'
import typeracer from './typeracer.png'
import schmidthaus from './schmidthaus.png'
import scratchmap from './scratchmap.png'
import linkedin from './linkedin.png'
import github from './github.png'
import Landing from './Components/Landing'

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
  
  .panel.landing {
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
            <Landing />
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel about">
              <div className="aboutLeft">
                <p>I was born and raised in southeast Michigan. The daughter of an artist and a computer programmer. My journey with computers began before I could talk, sitting in my highchair. In the 1st grade, my dad taught me Fox Pro. I took notes in my Lisa Frank notebook. I went on to study the completely unrelated field of Biology at the University of Michigan (Go Blue!). Post graduation, I fell into environmental compliance and safety. My husband‘s career eventually brought us to coastal Texas.
                <br/><br/>My wanderlust and desire for a more portable career lead me back to my original love for computers - coding & design.
                <br/><br/><i>P.S. I graduated Space Camp.</i></p>
              </div>
              <div className='aboutRight'>
              </div>
            </section>
            
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel portfolio">
            <h1>Portfolio</h1>
              <div className="portContainer">
                <a href="https://eager-bose-4d69cb.netlify.com/" target="_blank">
                <div className="port">
                <img src={typeracer}/>
                <p>Project: TypeRacer <br/>
                Team Size: 1 <br/>
                Role: Owner/Developer/Designer <br/>
                Build Time: 1 week<br/>
                Stack: React<br/></p>
                </div>
                </a>
                <a href="https://www.theschmidthaus.org/" target="_blank">
                <div className="port" >
                <img src={schmidthaus} />
                <p>Project: SchmidtHaus Message Board <br/>
                Team Size: 1 <br/>
                Role: Owner/Developer/Designer <br/>
                Build Time: 3 weeks<br/>
                Stack: React, Node.js, MySQL</p>
                </div>
                </a>
                <a href="https://scratchandmap.club/" target="_blank">
                <div className="port">
                <img src={scratchmap}/>
                <p>Project: Scratch & Map <br/>
                Team Size: 5 <br/>
                Role: Developer <br/>
                Build Time: 5 weeks<br/>
                Stack React, Flask, PostgreSQL</p>
                </div>
                </a>
                <a href="" target="_blank">
                <div className="port">
                <img src="https://picsum.photos/200/300"/>
                <p>Project: Want It <br/>
                Team Size: 3 <br/>
                Role: Owner/Front End Developer <br/>
                Build Time: 48 hours<br/>
                Stack: React, Node.js, PostgreSQL</p>
                </div>
                </a>
                <a href="https://www.theschmidthaus.org/" target="_blank">
                <div className="port">
                <img src="https://picsum.photos/200/300"/>
                <p>Project: Teresa Hunter Photography <b/>
                Team Size: 1 <b/>
                Role: Developer <b/>
                Build Time: 4 weeks<b/>
                Stack: React</p>
                </div>
                </a>
                <a href="" target="_blank">
                <div className="port">
                <img src="https://picsum.photos/200/300"/>
                <p>Project: Vacation Planner <b/>
                Team Size: 5 <b/>
                Role: Back End Developer <b/>
                Build Time: 2 month<b/>
                Stack: React, Node.js, PostgreSQL</p>
                </div>
                </a>
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