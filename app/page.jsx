export default function Home() {
  return (
    <div className="App">

      <header className="sticky top-0">
        <img 
          src="/assets/wired.gif"
         
          style={{maxWidth: '80vw'}} />

      </header>
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
