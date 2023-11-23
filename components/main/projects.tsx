import ProjectCard from '../sub/project-card';

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-20 text-[40px] font-semibold text-transparent'>
                My Projects
            </h1>
            <div className='flex h-full w-full flex-col gap-10 px-10 md:flex-row'>
                <ProjectCard
                    src='/NextWebsite.png'
                    title='Modern Next.js Portfolio'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <ProjectCard
                    src='/CardImage.png'
                    title='Interactive Website Cards'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <ProjectCard
                    src='/SpaceWebsite.png'
                    title='Space Themed Website'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
            </div>
        </div>
    );
};

export default Projects;
