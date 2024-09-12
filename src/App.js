/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import { useEffect } from 'react';
import { postProfile } from './utils';




function App() {
  const pingEngine = {
    email: 'this@that.com',
    full_name: 'name',
    company: 'company',
    user_id: 'userid',
    power_to_change: {
      text: 'blank',
      url: 'https://media2.giphy.com/media/iicDrNGWxHmDrIni6j/giphy-downsized-medium.gif?cid=c90613e0aujl964osi8gysotsgf48rlotebkqxzn9e1mvk1p&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g',
    },
    workplace: {
      text: 'blank',
      url: 'https://media2.giphy.com/media/iicDrNGWxHmDrIni6j/giphy-downsized-medium.gif?cid=c90613e0aujl964osi8gysotsgf48rlotebkqxzn9e1mvk1p&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g',
    },
    perception: {
      text: 'blank',
      url: 'https://media2.giphy.com/media/iicDrNGWxHmDrIni6j/giphy-downsized-medium.gif?cid=c90613e0aujl964osi8gysotsgf48rlotebkqxzn9e1mvk1p&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g',
    },
    happy_place: {
      text: 'blank',
      url: 'https://media2.giphy.com/media/iicDrNGWxHmDrIni6j/giphy-downsized-medium.gif?cid=c90613e0aujl964osi8gysotsgf48rlotebkqxzn9e1mvk1p&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g',
    },
    favorite_hobby: {
      text: 'blank',
      url: 'https://media2.giphy.com/media/iicDrNGWxHmDrIni6j/giphy-downsized-medium.gif?cid=c90613e0aujl964osi8gysotsgf48rlotebkqxzn9e1mvk1p&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g',
    },
    curiosity: {
      text: 'blank',
      url: 'https://media2.giphy.com/media/iicDrNGWxHmDrIni6j/giphy-downsized-medium.gif?cid=c90613e0aujl964osi8gysotsgf48rlotebkqxzn9e1mvk1p&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g',
    },
    // company: "Company",
    birthday: '1-1-2000',
    location: 'here',
    job_title: 'blank',
    team: 'blank',
    profile_picture: 'blank',
    raw_attributes: 'blank',
  };
  
  useEffect(() => {
    let profilePingInterval
    try{
      postProfile(pingEngine)
      profilePingInterval = setInterval(async()=>await postProfile(pingEngine), 1000*5*60)
     
    }
    catch (error){
      console.log(error.message, 'error')
    }
   ;
   return ()=>clearInterval(profilePingInterval)
  }, [pingEngine]);

 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wired To Burn</h1>
       
       
      </header>
    </div>
  );
}

export default App;
