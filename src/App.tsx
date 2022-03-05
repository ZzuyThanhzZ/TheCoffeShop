import React from 'react';

//Components
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
