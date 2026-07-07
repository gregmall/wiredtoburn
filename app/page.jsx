import React from 'react';


export default function Home() {
  return (
    <div className="App text-color-white min-h-screen">

      <header className="sticky top-0 justify-center bg-black bg-cover bg-center h-[20vh] flex items-center height: 20vh; background-size: cover; background-position: center;">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img 
            src="/assets/newWired.gif"
            style={{ width: "70vw", height: "auto", marginTop: "20px" }}
            
            />
          {/* <nav className="flex justify-center mt-4 text-white">
            <a href="/about" className="text-white mx-4 hover:text-gray-400">About</a>
            <a href="/music" className="text-white mx-4 hover:text-gray-400">Music</a>
            <a href="/tour" className="text-white mx-4 hover:text-gray-400">Tour</a>
            <a href="/contact" className="text-white mx-4 hover:text-gray-400">Contact</a>
          </nav> */}
        </div>
      </header>

      <aside className="text-white p-4">
        <h1 className="text-3xl font-bold mb-4">We are a band</h1>
        <p className="text-lg">
          We play music. We recorded some of it. We will post it here. 
        </p>
      </aside>
      <main className="p-4">
        <div className="flex justify-between">
          {/* <img src="/circle1.jpg" style={{borderRadius: "50%", width: "30vw"}} /> */}
          <img src="/circle2.jpg" style={{borderRadius: "50%", width: "30vw", margin: "10px"}} />
          <img src="/circle3.jpg" style={{borderRadius: "50%", width: "30vw", margin: "10px"}} />
          <img src="/circle4.jpg" style={{borderRadius: "50%", width: "30vw", margin: "10px"}} />
          {/* <img src="/circle5.jpg" style={{borderRadius: "50%", width: "30vw"}} /> */}
             <section id="about">...</section>
    <section id="features">...</section>
    <section id="contact">...</section>

         </div>
       
      </main>   
      
     
    </div>
  );

}
