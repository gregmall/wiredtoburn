'use client'

import React from 'react';
import { useRef, useState } from 'react';
import playListData from '../playList.json';
import  AudioPlayer,{ ActiveUI, ProgressUI }from "react-modern-audio-player";
import "react-modern-audio-player/dist/index.css";
import { Link, Element } from "react-scroll";
import { Button } from "@material-tailwind/react";

const { playList } = playListData;

export default function Home() {

  const address = "6806 NE Broadway, Portland, Oregon 97213";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;



  return (
    <div className="App text-color-white min-h-screen">

      <header className="sticky top-0 justify-center bg-black bg-cover bg-center h-[20vh] flex items-center">
        <div className="flex flex-col items-center">
          <img
            src="/assets/newWired.gif"
            className="w-[70vw] h-auto mt-2 sm:mt-5 max-h-[100px] sm:max-h-[150px] max-w-[825px]"
            />
          <nav className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-1 mt-2 mb-6 text-white bg-black">
            <Link to="music" smooth={true} duration={700}className="text-white hover:text-gray-400">Music</Link>
            <Link to="shows" smooth={true} duration={700}className="text-white hover:text-gray-400">Shows</Link>
            <Link to="about" smooth={true} duration={700}className="text-white hover:text-gray-400">About</Link>
            <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
            <a href="https://www.facebook.com/wiredtoburn" target="_blank" rel="noopener noreferrer" className="text-white"><img src="/assets/facebook.png" /></a>
            <a href="https://www.instagram.com/wired_to_burn" target="_blank" rel="noopener noreferrer" className="text-white"><img src="/assets/instagram.png" /></a>
          </nav>
        </div>
      </header>

      <aside className="text-white p-4 bg-black bg-opacity-90">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">Alive not thriving</h1>
        <p className="text-base sm:text-lg mb-10 sm:mb-20">
          New album out now!
        </p>
      </aside>
      <main className="p-4 mt-5">
        <Element name="music" >
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle2.jpg?alt=media&token=1240800d-a978-4c66-91ac-7ffd0a06b574" className="rounded-full w-full h-auto object-cover" />
          <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle4.jpg?alt=media&token=af634f5d-0e27-4705-8d9e-4f9ff355acba" className="rounded-full w-full h-auto object-cover" />
          <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle3.jpg?alt=media&token=09644b5e-ee60-4c89-9d8b-edbf57959a52" className="rounded-full w-full h-auto object-cover" />
        </div>
        </Element>
        <div className="flex flex-col text-white mt-5">
           <section className="mt-12 sm:mt-20 text-white p-4 bg-black bg-opacity-60">
            
              <h1 className='text-2xl sm:text-3xl font-bold mb-4'>Music</h1>
              <p className="text-base sm:text-sm">
                Recorded 1/26 at <a href="https://www.instagram.com/lo_rent_sound/" target="_blank" rel="noopener noreferrer">Lo Rent Sound</a> 
             </p>
             <p className="text-base sm:text-sm mb-4">
                Mixed and Mastered by <a href="https://www.instagram.com/jeremyhansen4730/" target="_blank" rel="noopener noreferrer">Jeremy Hansen</a> 
             </p>
              <div className="w-full max-w-md mx-auto">
                <AudioPlayer
                  
                  playList={playList}
                  colorScheme="dark"
                  activeUI={{
                    all: true,
               
                    playButton: "icon",
                    playList: "icon",
                    previousButton: "icon",
                    nextButton: "icon",
                    volume: "icon",
                    volumeSlider: "bar",
                    repeatType: "icon",
                    trackTime: "text",
                    trackInfo: "text",
                    artwork: "cover",
                    progress: "bar"

                   
                    }}
                  placement={{
                    interface: {
                      templateArea: {
                        artwork: "row1-1",
                        trackInfo: "row1-2",
                        trackTimeCurrent: "row1-3",
                        progress: "row1-4",
                        trackTimeDuration: "row1-5",
                        repeatType: "row2-1",
                        playButton: "row2-2",
                        playNextButton: "row2-3",
                        playPreviousButton: "row2-4",
                        volume: "row2-3",
                        playList: "row2-4",
                        playbackRate: "row2-5",
                      },
                    },
                  }}
                  rootContainerProps={{ className: "w-full" }}
                  />
              </div>
            </section>
             <Element name="shows" >
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle1.jpg?alt=media&token=14686fb1-2617-427d-b5ba-dbfbba3a6963" className="rounded-full w-full h-auto object-cover" />
                  <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle7.jpg?alt=media&token=7aba0e22-5ef0-4b14-91f5-2b23768137d0" className="rounded-full w-full h-auto object-cover" />
                  <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle6.jpg?alt=media&token=76acd7d2-e4df-4c0b-bd02-a2fb72978cba" className="rounded-full w-full h-auto object-cover" />
                </div>
              </Element>
           <section className="mt-12 sm:mt-20 text-white p-4 bg-black bg-opacity-60">
           <h1 className='text-2xl sm:text-3xl font-bold'>UPCOMING SHOWS</h1>
             <div className="max-w-4xl mx-auto px-4 py-8  text-white">
     
                <div className="divide-y divide-zinc-800">
                
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 hover:bg-zinc-900 px-2 transition">
                      {/* Date Block */}
                      <div className="text-xl font-black tracking-tight min-w-[80px]">
                      July 16th, 2026
                      </div>
                      {/* Venue & Location */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold">The Snug</h3>
                        <p className="text-zinc-400 text-sm">6806 NE Broadway, Portland, Oregon 97213</p>
                        <p><a href={googleMapsUrl} target='_blank' className="text-zinc-400 text-sm">View on Google Maps</a> </p>
                      </div>
                      {/* Action Button */}
                      <div>
                        with <a href="https://www.instagram.com/noahthegh0st/" target="_blank" rel="noopener noreferrer"><h1>noahthegh0st</h1></a> 
                        <span><a href = "https://www.instagram.com/thehelpers_official/" target='_blank'>THE HELPERS</a></span>
                        
                      </div>
                    </div>
                
                </div>
              </div>

          </section>
           <Element name="about" className="my-1 sm:my-2 md:my-4"> 
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle8.jpg?alt=media&token=b724cc9a-f174-4404-9125-98737d4e55fb" className="rounded-full w-full h-auto object-cover" />
              <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcirlce10.jpg?alt=media&token=0282e209-936a-4190-bfab-cbb409cecc6c" className="rounded-full w-full h-auto object-cover" />
              <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle9.jpg?alt=media&token=1fe92e08-987b-4dc2-91b6-20a46aff65db" className="rounded-full w-full h-auto object-cover" />
            </div>
          </Element>
          <div style ={{ width: "70vw", textAlign: "center", margin: "0 auto"}}>
            <section className="mt-2 sm:mt-4 text-white p-4 bg-black bg-opacity-60 width-2/3">
                <h1 className='text-2xl sm:text-3xl font-bold'>About</h1>
                <p className="text-base sm:text-lg mb-2 sm:mb-4">
                  After practice the other day, during a discussion about what we should call our first album, we talked about what our band name means, and what we mean by using it. 
                </p>
                <p className="text-base sm:text-lg mb-2 sm:mb-4">
                We mean that burning is a feature. It makes space for new growth. The renewal part isn’t pretty, but it sure is important. Hopefully what comes next is a bit better and there is more space for everyone. Then one day there isn’t, there’s a spark, and the cycle starts again. 
                </p>
                <p className="text-base sm:text-lg mb-2 sm:mb-4">
                  We live in the Pacific Northwest, a place literally wired to burn. There are pine and fir trees here that can only reproduce in fire. If you choke a system it can’t grow and change and thrive. That system’s gonna die. The remnants will eventually burn, and it will be catastrophic. Then something new and different will get a shot to reshape the world. 
                  We’re not talking about forests. 
                </p>
                <p className="text-base sm:text-lg mb-2 sm:mb-4">
                  Jeff plays drums and sings a little, Greg plays bass and sings a little, Grant plays guitar and won’t stop singing. We are Wired to Burn from Portland, Or.  
                </p>
              </section>
            </div>
         
         
          
          
         
        </div>
      </main>
      
     
    </div>
  );

}
