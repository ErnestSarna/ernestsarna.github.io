import Project from "./Project";

function Projects(){
    const quotingToolDesc = [
        "a",
        "b",
        "c"
    ];
    const fedoraDesc = [
        "a",
        "b",
        "c"
    ];

    return(
        <div id="projects-display" className="pb-5">
            <h1>Projects</h1>

            <div className="project my-3" >
                <h2>Quoting Tool</h2>
                <div className="project-tech my-2 d-flex">
                    <p className="badge rounded-pill">HTML</p>
                    <p className="badge rounded-pill">CSS</p>
                    <p className="badge rounded-pill">Bootstrap</p>
                    <p className="badge rounded-pill">JavaScript</p>
                    <p className="badge rounded-pill">JQuery</p>
                </div>
                <Project desc={quotingToolDesc} imgSrc="/quoting_tool/" />
            </div>

            <div className="project mb-3">
                <h2>Fedora Learning</h2>
                <div className="project-tech my-2 d-flex">
                    <p className="badge rounded-pill">React</p>
                    <p className="badge rounded-pill">CSS</p>
                    <p className="badge rounded-pill">Node.js</p>
                    <p className="badge rounded-pill">SQL</p>
                </div>
                <Project desc={fedoraDesc} imgSrc="/fedora/" />
            </div>
        </div>
    );
}

export default Projects;