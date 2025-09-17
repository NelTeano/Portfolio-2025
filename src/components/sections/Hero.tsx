/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { motion, Variants } from 'framer-motion';
import { HiOutlineDocumentDownload as ResumeIcon } from 'react-icons/hi';
import { TvScreen, useGlitch } from "@/components/tv-screen";
import AestheticKeyboard from "@/components/aesthetic-keyboard";

import { IconCamera, IconCommandKey, IconGithubAlt } from '@/assets/icons';




const Hero: React.FC = () => {
  const [tvState, setTvState] = useState<'github' | 'command' | 'picture'>(
    'picture'
  );
  const { glitch, triggerGlitch } = useGlitch();
  
  return (
    <>
    <div className="flex flex-row justify-around">

        <HeroHeading />
        <div className="flex shrink-0 flex-col gap-4 self-center">
                <TvScreen glitch={glitch}>
                {tvState === 'github' ? (
                    <IconGithubAlt />
                ) : tvState === 'command' ? (
                    <IconCommandKey />
                ) : tvState === 'picture' ? (
                    <>
                    <span className="absolute top-2 right-4 z-20 font-mono text-xs">
                        That&apos;s me
                    </span>
                    <img
                        src="https://avatars.githubusercontent.com/nelteano"
                        className="pointer-events-none object-cover grayscale"
                        alt="Avatar"
                    />
                    </>
                ) : (
                    <></>
                )}
                </TvScreen>
                <div className="active pointer-events-auto z-40 grid h-max shrink-0 grid-cols-3 gap-[3px] self-center rounded-lg bg-black p-[4px]">
                <AestheticKeyboard
                    width={160 + 3}
                    spanContainerClass="col-span-2 z-[5]"
                    className="col-span-2 bg-[#DBD6CB]"
                    containerClass="bg-[#DBD6CB]"
                />
                <AestheticKeyboard
                    spanContainerClass="z-[4]"
                    className="bg-[#DBD6CB]"
                    containerClass="bg-[#DBD6CB]"
                    onPointerDown={() => {
                    setTvState('command');
                    setTimeout(() => {
                        triggerGlitch();
                    }, 20);
                    }}
                >
                    <IconCommandKey className="text-neutral-800" />
                </AestheticKeyboard>
                <AestheticKeyboard
                    spanContainerClass="z-[3]"
                    onPointerDown={() => {
                    setTvState('github');
                    setTimeout(() => {
                        triggerGlitch();
                    }, 20);
                    }}
                >
                    <IconGithubAlt />
                </AestheticKeyboard>
                <AestheticKeyboard
                    spanContainerClass="z-[2]"
                    className="bg-[#DBD6CB]"
                    containerClass="bg-[#DBD6CB]"
                    onPointerDown={() => {
                    setTvState('picture');
                    setTimeout(() => {
                        triggerGlitch();
                    }, 20);
                    }}
                >
                    <IconCamera className="text-neutral-600" />
                </AestheticKeyboard>
                <AestheticKeyboard
                    spanContainerClass="z-[1]"
                    className="bg-[#DBD6CB]"
                    containerClass="bg-[#DBD6CB]"
                />
                </div>
            </div>
    </div>
    </>
  );
}


const HeroHeading: React.FC = () => {
  const parentVariants: Variants = {
    hidden: {
      skewX: -16,
    },
    visible: {
      skewX: 0,
      transition: {
        skewX: {
          duration: 2.5,
          ease: 'backOut',
        },
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      y: 250,
    },
    visible: {
      y: -1,
      transition: {
        duration: 0.9,
        ease: 'circOut',
      },
    },
  };

  const parentVariants2: Variants = {
    ...parentVariants,
    visible: {
      ...parentVariants.visible,
      transition: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(parentVariants.visible as any)?.transition,
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <h1 className="text-primary relative z-10 flex flex-wrap">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="hero-text flex overflow-hidden pt-2 pr-1 leading-none font-black tracking-tight lg:text-8xl"
      >
        {'Jonel'.split('').map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="hero-letter-bg text-primary-darker absolute inset-0 select-none">
                  {letter}
                </div>
                <div className="hero-letter text-primary relative font-extrabold tracking-tight">
                  {letter}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <span className="hero-text leading-none font-black tracking-tight lg:text-8xl">
        {' '}
      </span>
      <motion.div
        variants={parentVariants2}
        initial="hidden"
        animate="visible"
        className="hero-text flex overflow-hidden pt-2 pr-1 leading-none font-black tracking-tight lg:text-8xl"
      >
        {'Teano'.split('').map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="hero-letter-bg text-primary-darker absolute inset-0 select-none">
                  {letter}
                </div>
                <div className="hero-letter text-primary relative font-extrabold tracking-tight">
                  {letter}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </h1>
  );
};


export default Hero;