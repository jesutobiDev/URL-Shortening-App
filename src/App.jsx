import { useState, useEffect } from 'react';
import Header from './components/Header';
import Advanced from './components/Advanced';
import Boost from './components/Boost';
import Footer from './components/Footer';

const App = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  }

  useEffect(() => {
    if (toggleNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    // Cleanup function to reset overflow style when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [toggleNav]);

  return (
    <div className={`w-screen min-h-screen flex flex-col overflow-x-hidden`}>
      <Header handleToggleNav={handleToggleNav} toggleNav={toggleNav} />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
