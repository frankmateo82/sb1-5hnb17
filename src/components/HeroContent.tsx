import React from 'react';
import { ServiceIcon } from './ServiceIcon';

export function HeroContent() {
  return (
    <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
      <div className="space-y-6 mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          <span className="text-white">Taking Your</span>
          <br />
          <span className="inline-block bg-white text-black px-4 transform -skew-x-12">
            Complexity
          </span>
          <br />
          <span className="text-white">Making it Simple</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          With over 15 years of global media experience spanning Hollywood to Atlanta, South America, and Hong Kong, 
          we bring a world-class perspective to every project. From blockbuster productions in Los Angeles to dynamic 
          ventures abroad, our expertise lies in delivering innovative solutions across diverse cultural and professional landscapes.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-12">
        <ServiceIcon 
          imageUrl="https://i.pinimg.com/736x/eb/f6/fb/ebf6fb0dffc71c94baa97f7bfb789d89.jpg"
          label="Unreal Engine" 
          imageClassName="brightness-0 invert"
        />
        <ServiceIcon 
          imageUrl="https://cdn.prod.website-files.com/625447c67b621ab49bb7e3e5/6595a3f16ea6fac5e47d75f3_ollama.png"
          label="AI/LLMs" 
        />
        <ServiceIcon 
          imageUrl="https://www.svgrepo.com/show/1699/web-development.svg"
          label="Web Development" 
          imageClassName="invert"
        />
      </div>

      <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
        "Whether it's mastering cutting-edge technology or adapting to the unique demands of international markets, 
        we thrive on crafting exceptional results that leave a lasting impact."
      </p>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 text-white/50 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
}