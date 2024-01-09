import React, { useState } from 'react';
import './App.css';
import { Home } from './components/Home';
import { Topics } from './components/Topics';
import { Contact } from './components/Contact';
import { Menu } from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Buttons } from './components/Buttons';
import { State } from './components/State';
import { Grid1 } from './components/grid1/Grid1';
import { Grid2 } from './components/grid2/Grid2';
import { Boot } from './components/Boot';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AlertTest } from './components/AlertTest';
import { CarouselTest } from './components/CarouselTest';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/buttons' element={<Buttons/>}></Route>
          <Route path='/topics' element={<Topics/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/state' element={<State/>}></Route>
          <Route path='/grid1' element={<Grid1/>}></Route>
          <Route path='/grid2' element={<Grid2/>}></Route>
          <Route path='/boot' element={<Boot/>}></Route>
          <Route path='/alert' element={<AlertTest/>}></Route>
          <Route path='/carousel' element={<CarouselTest/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
