import '../css/labReports.css'
import React, { useState } from 'react';

import { Header } from './Header';
import { Navigation } from './labworks/navigation';
import { Viewport } from './vewport';


function App() {
  const [selectedId, setSelectedId] = useState('LW1');
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
