import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = { pageInfo?: PageInfo };

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: pageInfo?.typewriter,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden -mt-20 relative">
      <BackgroundCircles />
      <div className="relative h-80 w-full">
        <div className="absolute flex flex-col h-full w-full top-[75px]">
          <Image
            src={urlFor(pageInfo?.heroImage).url()}
            width={320}
            height={320}
            className="relative rounded-full h-32 w-32 mx-auto max-sm:h-28 max-sm:w-28 max-sm:mb-4"
            alt="Nassr Al-Emrani"
          />
          <div className="z-20">
            <h2 className="text-sm uppercase text-primary-200 pb-2 tracking-[10px] max-sm:text-xs">
              {pageInfo?.role}
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 max-sm:text-xl max-xs:text-lg">
              <span className="text-primary-100">{text}</span>
              <Cursor cursorColor="#e2e2e9" />
            </h1>
            <div className=" pt-5">
              <Link href="#about">
                <button className="heroButton">About</button>
              </Link>
              {/* <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link> */}
              <Link href="#skills">
                <button className="heroButton">Skills</button>
              </Link>
              <Link href="#projects">
                <button className="heroButton">Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;