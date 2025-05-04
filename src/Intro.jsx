
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
        { id: 10, text: //Git
            <i class="devicon-git-plain-wordmark"></i>
        },

      ];    
    
    return( //#282c34 #2E2E2E
        <div className="background pt-5">
            <div id="intro">
                    <h1 className="display-1">Ernest Sarna</h1>
                    <p className="lead">
                        Hi, I'm a Software Engineering graduate from the University of Calgary with a passion for building clean, functional, and engaging digital experiences. I specialize in full-stack development, with a particular love for front-end technologies and creating intuitive user interfaces. Along the way, I’ve built a variety of projects that showcase my skills in both front-end and back-end development, as well as database design. I'm always looking to learn something new, collaborate with others, and contribute to meaningful work that has real-world applications.
                    </p>
            </div>
            <div className="skills ms-4">
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