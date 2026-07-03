import Image from "next/image";
export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src="/assets/logo.png" 
          style={{maxWidth: '80vw'}} />
      </header>
    </div>
  );
  
}
