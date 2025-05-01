import Project from "./Project";

function Projects(){
    const quotingToolDesc = ["a","b","c"];
    const fedoraDesc = ["a","b","c"];

    return(
        <div id="projects">
            <h1>Projects</h1>

            <div>
                <h2>Quoting Tool</h2>
                <p>HTML,CSS,JS</p>
                <Project desc={quotingToolDesc} imgSrc="/quoting_tool/1.png" />
            </div>

            <div>
                <h2>Fedora</h2>
                <p>React, CSS</p>
                <Project desc={fedoraDesc} imgSrc="./fedora/" />
            </div>
        </div>
    );
}

export default Projects;