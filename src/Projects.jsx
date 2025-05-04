import Project from "./Project";

function Projects(){
    const quotingTool = {
        path: '/quoting_tool/',
        desc: 'test test test testtest test test tt test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test',
    };

    const fedora = {
        path: '/fedora/',
        desc: 'test test test testtest test test tt test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test',
    };

    return(
        <div>
            <h1 style={{backgroundColor: '#4B0012'}}>Projects</h1>
        
            <div id="projects-display" className="pb-5">
                <div className="project left my-3" >
                    <h2>Quoting Tool</h2>
                    <div className="project-tech my-2 d-flex">
                        <p className="badge rounded-pill">HTML</p>
                        <p className="badge rounded-pill">CSS</p>
                        <p className="badge rounded-pill">Bootstrap</p>
                        <p className="badge rounded-pill">JavaScript</p>
                        <p className="badge rounded-pill">JQuery</p>
                    </div>
                    <Project desc={quotingTool.desc} imgSrc={quotingTool.path} reverse={false} />
                </div>
            </div>
            <div id="projects-display" className="right pb-5">
                <div className="project mb-3">
                    <h2><a href="http://project.fedora.mom/" target="_blank" rel="noreferrer" title="Fedora Learning">Fedora Learning</a></h2>
                    <div className="project-tech my-2 d-flex">
                        <p className="badge rounded-pill">React</p>
                        <p className="badge rounded-pill">CSS</p>
                        <p className="badge rounded-pill">Node.js</p>
                        <p className="badge rounded-pill">SQL</p>
                    </div>
                    <Project desc={fedora.desc} imgSrc={fedora.path} reverse={true} />
                </div>
            </div>
        </div>
    );
}

export default Projects;