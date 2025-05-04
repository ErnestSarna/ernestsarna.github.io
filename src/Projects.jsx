import Project from "./Project";

function Projects(){
    const quotingToolInfo = {
        name: 'Quoting Tool',
        languages: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery'],
        path: '/quoting_tool/',
        desc: 'te testtest test test test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test',
    };

    const fedoraInfo = {
        name: <a href="http://project.fedora.mom/" target="_blank" rel="noreferrer" title="Fedora Learning">Fedora Learning</a>,
        languages: ['React', 'CSS', 'Node.js', 'SQL'],
        path: '/fedora/',
        desc: 'test test testtetest testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test testtest test test test',
    };

    return(
        <div style={{backgroundColor: '#4B0012'}}>
            <h1>Projects</h1>
        
            <div className="left py-5">
                <Project info={quotingToolInfo} reverse={false} />
            </div>
            
            <div className="right py-5">
                <Project info={fedoraInfo} reverse={true} />
            </div>
        </div>
    );
}

export default Projects;