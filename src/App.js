import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">

<BrowserRouter>
<Routes>
    <Route path='/' element = {<LandingPage/>}></Route>
    <Route path='/BattlePage' element= {<BattlePage/>}></Route>
</Routes>
</BrowserRouter>
    
    </div>
  );
}

export default App;
