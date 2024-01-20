import { Outlet } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import Footer from './components/layouts/footer';
import Nav from './components/layouts/nav';
import { useState } from 'react';

function App() {
  const [showNavBorder, setShowNavBorder] = useState(false)

  window.onscroll = function () { myFunction() };
  function myFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
      setShowNavBorder(true)
    }
    else {
      // prompt("below 350")
      setShowNavBorder(false)
    }
  }
  return (
    <div className="App">
      <div className=" bg-[#2D2E33]">
        <div className={` ${showNavBorder && "border-b"} z-10 fixed w-full bg-[#2d2e33da] border-zinc-600`}>
          <Nav />
        </div>
        <div className="pt-28 pb-7 ">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;