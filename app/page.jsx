import React from 'react';


export default function Home() {
  return (
    <div className="App">

      <header className="sticky top-0 justify-center bg-black bg-cover bg-center h-[20vh] flex items-center height: 20vh; background-size: cover; background-position: center;">
        <img 
          src="/assets/wired.gif"
          style={{ width: "80vw", height: "auto", margin: "0 auto" }}
          
           />

      </header>
      <aside className="bg-black text-white p-4">
        <h1 className="text-4xl font-bold mb-4">We are a band</h1>
        <p className="text-lg">
          We play music. We like the cars.  The cars that go boom. 
        </p>
      </aside>
      <main className="p-4">
       
      </main>   
      <div className="flex justify-between">
        {/* <img src="/circle1.jpg" style={{borderRadius: "50%", width: "30vw"}} /> */}
        <img src="/circle2.jpg" style={{borderRadius: "50%", width: "30vw", margin: "10px"}} />
        <img src="/circle3.jpg" style={{borderRadius: "50%", width: "30vw", margin: "10px"}} />
        <img src="/circle4.jpg" style={{borderRadius: "50%", width: "30vw", margin: "10px"}} />
        {/* <img src="/circle5.jpg" style={{borderRadius: "50%", width: "30vw"}} /> */}

      </div>
     
    </div>
  );

}
