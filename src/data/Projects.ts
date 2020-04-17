import Employers from "./Employers";

const Projects = [
    {
        employerIndex: 0,
        name: 'Merlion | PSA Antwerpen',
        url: '/project/ict-group/merlion',
        image: '/images/projects/ict-group/merlion.jpg',
        image2x: '/images/projects/ict-group/merlion@2x.jpg',
        tools: [],
        techstack: [],
        extraTechstack: [],
    }, 
    {
        employerIndex: 1,
        name: 'Expeditie Haringvliet',
        url: '/project/webnl/expeditie-haringvliet',
        image: '/images/projects/webnl/expeditie-haringvliet.jpg',
        image2x: '/images/projects/webnl/expeditie-haringvliet@2x.jpg',
        description: 'projects:webnl.expeditieHaringvliet',
        tools: [],
        techstack: [],
        extraTechstack: ['Laravel', 'vue.js', 'Amazon AWS S3']
    }, 
    {
        employerIndex: 1,
        name: 'Vakantiehuistekoop.nl',
        url: '/project/webnl/vakantiehuistekoop',
        image: '/images/projects/webnl/vakantiehuistekoop.jpg',
        image2x: '/images/projects/webnl/vakantiehuistekoop@2x.jpg',
        description: 'projects:webnl.vakantiehuistekoop',
        tools: [],
        techstack: [],
        extraTechstack: ['Laravel', 'vue.js', 'Amazon AWS S3']
    }, 
    {
        employerIndex: 1,
        name: 'Thegreencloud.nl',
        url: '/project/webnl/thegreencloud',
        image: '/images/projects/webnl/thegreencloud.jpg',
        image2x: '/images/projects/webnl/thegreencloud@2x.jpg',
        description: 'projects:webnl.thegreencloud',
        tools: [],
        techstack: [],
        extraTechstack: ['Laravel', 'vue.js', 'Exact Online', 'Amazon AWS S3']
    }, 
    {
        employerIndex: 1,
        name: 'FST Group',
        url: '/project/webnl/fst-group',
        image: '/images/projects/webnl/fst-group.jpg',
        image2x: '/images/projects/webnl/fst-group@2x.jpg',
        description: 'projects:webnl.fst-group',
        tools: [],
        techstack: [],
        extraTechstack: ['Zend Framework', 'jQuery'],
    }, 
    {
        employerIndex: 1,
        name: 'Site Launch Knop',
        url: '/project/webnl/site-launch',
        image: '/images/projects/webnl/site-launch.jpg',
        image2x: '/images/projects/webnl/site-launch@2x.jpg',
        description: 'projects:webnl.site-launch-knop',
        tools: ['Raspberry PI', 'Debian'],
        techstack: ['PHP', 'Python', 'Node.js', 'Socket.io'],
        extraTechstack: [],
    },
];

export const ProjectsMapped = Projects.map(project => {
    const employer = Employers[project.employerIndex];

    return {
        employer: employer.name,
        filter: employer.filter ?? '',
        techstack: employer.techstack,
        tools: employer.tools,
        name: project.name,
        url: project.url,
        image: project.image,
        image2x: project.image2x,
        description: "",
    }
});

export default Projects;