import React, { useEffect, useState } from 'react';
import Container from '../container';
import SectionHeading from '../section-heading';

import { SectionProps } from './types';


import { useInView } from '@/hooks/use-in-view';
import { motion, useAnimation, Variants } from 'motion/react';
import toast from 'react-hot-toast';
import AestheticKeyboard from '../aesthetic-keyboard';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


// ICONS
import { FaLinkedinIn as LinkedInIcon } from "react-icons/fa";
import { FaTelegramPlane as TelegramIcom } from "react-icons/fa";
import { FaWhatsapp as WhatsAppIcon } from "react-icons/fa";
import { FaViber as ViberIcon } from "react-icons/fa";
import { IconGithubAlt } from '@/assets/icons';


const Contact: React.FC<SectionProps> = ({ sectionRef }) => {
  const controls = useAnimation();
  const socialDetails = [
        {
            name: "LinkedIn",
            icon: <LinkedInIcon />,
            link: "https://github.com/NelTeano"
        },
        {
            name: "Github",
            icon: <IconGithubAlt/>,
            link: "https://github.com/NelTeano"
        },
        {
            name: "WhatsApp",
            icon: <WhatsAppIcon/>,
            link: "https://github.com/NelTeano"
        },
        {
            name: "Viber",
            icon: <ViberIcon/>,
            link: "https://github.com/NelTeano"
        },
        {
            name: "Telegram",
            icon: <TelegramIcom/>,
            link: "https://github.com/NelTeano"
        },

    ]
  const [ref, inView] = useInView({
    amount: 0.8,
    margin: '-100px 0px',
    once: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      id="contact-section"
      ref={sectionRef}
      className="w-full py-24 md:py-52"
    >
      <Container maxWidth="7xl" className="relative z-10 grid grid-cols-1">
        <div className="flex flex-col space-y-10">
          <span className="">
            <SectionHeading
              noOffset
              className="text-typography relative text-center text-4xl font-light sm:text-5xl"
              text={["Let's work", 'together']}
            />
          </span>
        </div>
        <motion.div
          ref={ref}
          variants={contactInfoVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 flex flex-col items-center space-y-5 text-2xl text-gray-800 lg:text-4xl"
        >
          <ClickableEmail />
          <div className="text-primary mt-5 flex flex-row-reverse gap-[2.5px] rounded-xl border bg-black p-[2.5px]">
            {socialDetails.map((social, i) => {
                const isEven = i % 2 === 0;

                return (
                    <AestheticKeyboard
                    key={i}
                    className={`flex items-center justify-center 
                        ${isEven ? 'bg-white text-primary' : 'bg-primary text-white'}`}
                    href={social.link}
                    containerClass={isEven ? 'bg-white' : 'bg-primary'}
                    >
                    <span className={isEven ? 'text-neutral-600' : 'text-white'}>
                        {social.icon}
                    </span>
                    </AestheticKeyboard>
                );
                })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const ClickableEmail = () => {
  const copyMessage = 'Copy 📝';
  const copiedMessage = 'Copied! ✔';
  const [content, setContent] = useState<string>(copyMessage);

  const clickHandler = () => {
    navigator.clipboard.writeText('teano.jonel.ibisate@gmail.com');
    setContent(copiedMessage);

    toast(() => (
      <span className="flex gap-x-4">
        <motion.span
          animate={{ rotate: [-20, 30] }}
          transition={{
            repeat: Infinity,
            duration: 0.35,
            repeatType: 'mirror',
          }}
          className="grid place-items-center text-2xl"
        >
          👋
        </motion.span>
        <span className="flex flex-col gap-y-1">
          <span className="text-typography font-semibold">Email Copied!</span>
          <span className="text-gray-500">Hope to hear from you soon.</span>
        </span>
      </span>
    ));
  };

  const hoverExitHandler = () => {
    setTimeout(() => {
      setContent(copyMessage);
    }, 200);
  };
  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={0} disableHoverableContent onOpenChange={(open: boolean) => {
        if (!open) {
          hoverExitHandler();
        }
      }}>
        <TooltipTrigger asChild>
          <p onClick={clickHandler} className="cursor-pointer overflow-hidden pb-1">
            <motion.span variants={contactInfoChildVariants} className="block">
              <span className="group relative flex items-center truncate transition">
                <span className="group-hover:bg-primary-foreground/80 absolute h-4/6 w-full transition"></span>
                <span className="text-typography relative font-bold underline">
                  teano.jonel.ibisate@gmail.com
                </span>
              </span>
            </motion.span>
          </p>
        </TooltipTrigger>
        <TooltipContent>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const contactInfoVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const contactInfoChildVariants: Variants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};


export default Contact;