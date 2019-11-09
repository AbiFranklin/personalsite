import React from 'react';
import arrow from '../downArrow.svg'

class Landing extends React.Component{
    render(){
        return(
            <section className="panel landing">
                <div className="introLeft">
                </div>
                <div className="introRight">
                    <h1>Abigayle Franklin</h1>
                    <h2>Full Stack Developer</h2>
                    <img src={ arrow } />
                </div>
          </section>
        )
    }
}

export default Landing