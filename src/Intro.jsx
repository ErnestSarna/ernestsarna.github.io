
function Intro(){
    const hexagons = [
        { id: 1, text:  //HTML
            <i class="devicon-html5-plain-wordmark"></i>
        },
        { id: 2, text: //CSS
            <i class="devicon-css3-plain-wordmark"></i>
        },
        { id: 3, text: //Bootstrap
            <i class="devicon-bootstrap-plain-wordmark"></i>
        },
        { id: 4, text: //JavaScript
            <i class="devicon-javascript-plain"></i>
        },
        { id: 5, text: //JQuery
            <i class="devicon-jquery-plain-wordmark"></i>
        },
        { id: 6, text: //React
            <i class="devicon-react-original-wordmark"></i>
        },
        { id: 7, text: //SQL
            <i class="devicon-azuresqldatabase-plain"></i>
        },
        { id: 8, text: //Java
            <i class="devicon-java-plain-wordmark"></i>
        },
        { id: 9, text: //C++
            <i class="devicon-cplusplus-plain"></i>
        },

      ];    
    
    return( //#282c34
        <div style={{backgroundColor: '#2E2E2E'}} className="py-5">
            <div id="intro" className="pb-5">
                <div className="name me-5">
                    <h1 className="display-1">Ernest</h1>
                    <h1 className="display-1">Sarna</h1>
                </div>
                <div className="description mt-4">
                    <p className="lead">
                    Software Engineering graduate from the University of Calgary with a strong foundation in full-stack development and expertise in database management. 
                    Proficient in both front-end and back-end development, with a particular emphasis on front-end technologies. 
                    Demonstrates practical, hands-on experience through a portfolio of diverse software projects. 
                    Committed to continuous learning, driving impactful contributions, and fostering effective collaboration to ensure the success of team objectives.
                    </p>
                </div>
            </div>
            <div className="skills">
                {hexagons.map((hex) => (
                    <div key={hex.id} className="skill-cell">
                        <div>{hex.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Intro;