import './styles/labReports.css'
import React, { useState } from 'react';

import { Header } from './components/header';
import { Navigation } from './components/labworks/navigation';
import { Viewport } from './components/vewport';


function App() {
  const [selectedId, setSelectedId] = useState('LW11');
  const [descriptionId, setDescriptionId] = useState('describe');

  const labworkCallbaclk = (id) => {
    setSelectedId(id);
  }

  const descriptionCallbaclk = (id) => {
    setDescriptionId(id);
  }

  return (
    <>
      <Header />
      <Navigation onLabworkChange={labworkCallbaclk} />
      <Viewport onDescriptionChange={descriptionCallbaclk} currentLabWorkId={selectedId} currentDescriptionId={descriptionId} />
    </>
  )
}


export {App}
