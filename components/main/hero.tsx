import HeroContent from '../sub/hero-content';

const Hero = () => {
    return (
        <section id='about-me' className='relative flex h-full w-full flex-col'>
            <video
                autoPlay
                loop
                muted
                className='absolute left-0 top-[-340px] z-[1] h-full w-full rotate-180 object-cover'>
                <source src='/blackhole.webm' type='video/webm' />
            </video>
            <HeroContent />
        </section>
    );
};

export default Hero;
