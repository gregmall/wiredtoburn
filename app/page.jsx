'use client'

import React from 'react';

export default function Home() {
  return (
    <div className="App text-color-white min-h-screen">

      <header className="sticky top-0 justify-center bg-black bg-cover bg-center h-[20vh] flex items-center">
        <div className="flex flex-col items-center">
          <img
            src="/assets/newWired.gif"
            className="w-[70vw] h-auto mt-2 sm:mt-5 max-h-[100px] sm:max-h-[150px] max-w-[825px]"
            />
          <nav className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-1 my-2 text-white">
            <a href="#about" className="text-white hover:text-gray-400">About</a>
            <a href="#music" className="text-white hover:text-gray-400">Music</a>
            <a href="#shows" className="text-white hover:text-gray-400">Shows</a>
            <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
            <a href="https://www.facebook.com/wiredtoburn" target="_blank" rel="noopener noreferrer" className="text-white"><img src="/assets/facebook.png" /></a>
            <a href="https://www.instagram.com/wired_to_burn" target="_blank" rel="noopener noreferrer" className="text-white"><img src="/assets/instagram.png" /></a>
          </nav>
        </div>
      </header>

      <aside className="text-white p-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 mt-6">We are a band</h1>
        <p className="text-base sm:text-lg mb-10 sm:mb-20">
          We play music. We recorded some of it. We will post it here.
        </p>
      </aside>
      <main className="p-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle2.jpg?alt=media&token=1240800d-a978-4c66-91ac-7ffd0a06b574" className="rounded-full w-full h-auto object-cover" />
          <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle4.jpg?alt=media&token=af634f5d-0e27-4705-8d9e-4f9ff355acba" className="rounded-full w-full h-auto object-cover" />
          <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle3.jpg?alt=media&token=09644b5e-ee60-4c89-9d8b-edbf57959a52" className="rounded-full w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col text-white mt-5">
          <section id="about" className="my-16 sm:my-24 md:my-40">THIS IS THE ABOUT SECTION</section>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle1.jpg?alt=media&token=14686fb1-2617-427d-b5ba-dbfbba3a6963" className="rounded-full w-full h-auto object-cover" />
            <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle7.jpg?alt=media&token=7aba0e22-5ef0-4b14-91f5-2b23768137d0" className="rounded-full w-full h-auto object-cover" />
            <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle6.jpg?alt=media&token=76acd7d2-e4df-4c0b-bd02-a2fb72978cba" className="rounded-full w-full h-auto object-cover" />
          </div>
          <section id="music" className="my-16 sm:my-24 md:my-40"><h1>Music Is Coming Soon</h1></section>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle8.jpg?alt=media&token=b724cc9a-f174-4404-9125-98737d4e55fb" className="rounded-full w-full h-auto object-cover" />
            <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcirlce10.jpg?alt=media&token=0282e209-936a-4190-bfab-cbb409cecc6c" className="rounded-full w-full h-auto object-cover" />
            <img src="https://firebasestorage.googleapis.com/v0/b/wired-to-burn.firebasestorage.app/o/images%2Fcircle9.jpg?alt=media&token=1fe92e08-987b-4dc2-91b6-20a46aff65db" className="rounded-full w-full h-auto object-cover" />
          </div>
          <section id="shows" className="mt-12 sm:mt-20">THIS IS THE SHOWS SECTION!</section>
        </div>
      </main>
      
     
    </div>
  );

}
