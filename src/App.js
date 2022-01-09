import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
              <Header />
              <Navbar />
         <div class='app-wrapper-content'>
             <Routes>
                 <Route path="/dialogs" element= {<Dialogs/>}/>
                 <Route path="/profile" element={<Profile/>}/>
                 <Route path="/music" element={<Music/>}/>
                 <Route path="/news" element={<News/>}/>
                 <Route path="/settings" element={<Settings/>}/>

             </Routes>
         </div>
        </div>
     </BrowserRouter>


  );
}

export default App;
