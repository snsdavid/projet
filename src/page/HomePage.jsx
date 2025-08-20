import React from 'react';
import HeaderComposant from './composant/Headercomposant'; // Assuming you have a Header component
import Carrosel from './composant/Carrosel';
import Section1 from './composant/Section1'; // Assuming you have a Section1 component
import Section2 from './composant/Section2';

const HomePage = () => {
  return (
    <>
      <HeaderComposant />
      <Carrosel />
      <Section1></Section1>
      <Section2></Section2>
    </>
  );
}

export default HomePage;