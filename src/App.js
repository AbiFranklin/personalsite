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
import Blog from './Components/Blog'

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
              </div>
            </section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel contact">
              <h1>Contact</h1>
              <p>abifranklin@gmail.com</p><br/>
              <br/>
              <a href='https://loving-bhabha-e247bb.netlify.com/' target='_blank'><h2>Developer Blog</h2></a>
              <div className='links'>
              <a href='https://www.linkedin.com/in/abi-franklin/' target='_blank'><img src={linkedin} width='100px'/></a>
              <a href='https://github.com/AbiFranklin' target='_blank'><img src={github} width='100px'/></a>
              </div>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default App;