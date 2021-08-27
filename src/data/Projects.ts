import Employers from "./Employers";

const Projects = [
    {
        employerSlug: 'ict-group',
        name: 'Merlion - PSA Antwerpen',
        url: '/project/ict-group/merlion',
        image: '/images/projects/ict-group/merlion.jpg',
        image2x: '/images/projects/ict-group/merlion@2x.jpg',
    }, 
    {
        employerSlug: 'webnl',
        name: 'Expeditie Haringvliet',
        url: '/project/webnl/expeditie-haringvliet',
        image: '/images/projects/webnl/expeditie-haringvliet.jpg',
        image2x: '/images/projects/webnl/expeditie-haringvliet@2x.jpg',
        extrastack: ['Laravel', 'vue.js', 'Amazon AWS S3']
    }, 
    {
        employerSlug: 'webnl',
        name: 'Vakantiehuistekoop.nl',
        url: '/project/webnl/vakantiehuistekoop',
        image: '/images/projects/webnl/vakantiehuistekoop.jpg',
        image2x: '/images/projects/webnl/vakantiehuistekoop@2x.jpg',
        extrastack: ['Laravel', 'vue.js', 'Amazon AWS S3']
    }, 
    {
        employerSlug: 'webnl',
        name: 'Thegreencloud.nl',
        url: '/project/webnl/thegreencloud',
        image: '/images/projects/webnl/thegreencloud.jpg',
        image2x: '/images/projects/webnl/thegreencloud@2x.jpg',
        extrastack: ['Laravel', 'vue.js', 'Exact Online', 'Amazon AWS S3']
    }, 
    {
        employerSlug: 'webnl',
        name: 'FST Group',
        url: '/project/webnl/fst-group',
        image: '/images/projects/webnl/fst-group.jpg',
        image2x: '/images/projects/webnl/fst-group@2x.jpg',
        extrastack: ['Zend Framework', 'jQuery'],
    }, 
    {
        employerSlug: 'webnl',
        name: 'Site Launch Knop',
        url: '/project/webnl/site-launch',
        image: '/images/projects/webnl/site-launch.jpg',
        image2x: '/images/projects/webnl/site-launch@2x.jpg',
        tools: ['Raspberry PI', 'Debian'],
        stack: ['PHP', 'Python', 'Node.js', 'Socket.io'],
    },
];

export const ProjectsMapped = Projects.map(project => {
    const employer = Employers.find(item => item.slug === project.employerSlug);
    
    return {
        name: project.name,
        employer: employer ? employer.name : '',
        employerSlug: employer ? employer.slug : '',
        url: project.url,
        stack: employer ? employer.stack : [],
        tools: employer ? employer.tools : [],
        image: project.image,
        image2x: project.image2x
    }
});

export default Projects;