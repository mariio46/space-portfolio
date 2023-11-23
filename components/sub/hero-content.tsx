'use client';

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/lib/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Icon } from '../icons';

function HeroContent() {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='z-[20] mt-40 flex w-full flex-row items-center justify-center px-20'>
            <div className='m-auto flex h-full w-full flex-col justify-center gap-5 text-start'>
                <motion.div
                    className='welcome-box border border-[#7042f88b] p-2 opacity-[0.9]'
                    variants={slideInFromTop}>
                    <Icon name='IconSparkles' className='mr-[10px] h-5 w-5 text-[#b49bff]' />
                    <h1 className='welcome-text text-[13px]'>Fullstack developer portfolio</h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6 text-6xl font-bold text-white'>
                    <p>
                        Providing{' '}
                        <span className='bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent'>
                            the best
                        </span>{' '}
                        projects experience.
                    </p>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='my-5 max-w-[600px] text-lg text-gray-400'>
                    I&apos;m a fullstack software engineer with experience in website, mobile, and software
                    development. Checkout my projects and skills.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='button-primary max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white'>
                    Learn more
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='flex h-full w-full items-center justify-center'>
                <Image src={'/mainIconsDark.svg'} alt='work icon' height={650} width={650} />
            </motion.div>
        </motion.div>
    );
}

export default HeroContent;
