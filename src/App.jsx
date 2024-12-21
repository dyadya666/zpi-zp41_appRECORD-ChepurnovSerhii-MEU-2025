import '../css/styles.css'
import React, { useState } from 'react';

import MainSectionLW1 from './labworks/first/lw1'
import { Header } from './Header';
import { Navigation } from './labworks/navigation';


function App() {
  const [selectedId, setSelectedId] = useState('LW1');

  const labworkCallbaclk = (id) => {
    setSelectedId(id);
  }

  return (
    <>
      <Header />
      <Navigation onLabworkChange={labworkCallbaclk} />
      <Viewport currentArticleId={selectedId} />
    </>
  )
}


const Viewport = ({ currentArticleId }) => {
  let LabworksComponent = null;

  if (currentArticleId === 'LW1') {
    LabworksComponent = MainSectionLW1;
  }

  return (
    <>
      {LabworksComponent && (<LabworksComponent />)}
    </>
  );
}

export {App}
