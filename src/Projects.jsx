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
                <p>HTML,CSS,JS</p>
                <Project desc={quotingToolDesc} imgSrc="/quoting_tool/" />
            </div>

            <div className="project mb-3">
                <h2>Fedora Learning</h2>
                <p>React, CSS</p>
                <Project desc={fedoraDesc} imgSrc="/fedora/" />
            </div>
        </div>
    );
}

export default Projects;