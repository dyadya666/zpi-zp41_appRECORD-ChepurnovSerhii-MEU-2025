const rawIndexHtml = () => {
    return (
        <>
            <h4>index.html</h4>
            &lt;!doctype html&gt;
            <br />&lt;html lang=&quot;en&quot;&gt;
            <br />&lt;head&gt;
            <br />&lt;link rel=&quot;stylesheet&quot; href=&quot;/src/styles/labReports.css&quot;&gt;
            <br />&lt;meta charset=&quot;UTF-8&quot;&gt;
            <br />&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt; 
            <br />&lt;title&gt;Document&lt;/title&gt; 
            <br />&lt;/head&gt; 
            <br />&lt;body&gt; 
            <br />&lt;main id=&quot;root&quot; class=&quot;container&quot;&gt;&lt;/main&gt; 
            <br />&lt;script type=&quot;module&quot; src=&quot;/src/main.jsx&quot;&gt;&lt;/script&gt; 
            <br />&lt;/body&gt; 
            <br />&lt;/html&gt;
        </>
    );
}

const rawIndexJs = `
    import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
    </StrictMode>
)`

const rawApp = `
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
      <Viewport onDescriptionChange={descriptionCallbaclk}
                currentLabWorkId={selectedId}
                currentDescriptionId={descriptionId} />
    </>
  )
}


export {App}
`

const rawHeader = `
import '../styles/labReports.css'
import myphoto from '../assets/images/photo.JPG'

export const Header = () => {
  return (
    <header className="header">
      <div className="titleSection">
        <h1 className="mainTitle">
          ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ
          <p className="subtitle">
            З ДИСЦИПЛІНИ "ПРОЕКТУВАННЯ WEB-ЗАСТОСУВАНЬ"
          </p>
        </h1>
        <p className="studentInfo">
          Студент групи ЗПІ-зп41 2024-2025 Чепурнов Сергій Олександрович
        </p>
      </div>
      <img loading="lazy" src={myphoto} className="profileImage"
            alt="Фото студента Чепурнова Сергія Олександровича" />
    </header>
  )
}`

const rawNavigationItem = `
import React from 'react';
import '../styles/navigationItem.css';


export const NavigationItem = ({ text, infoid, onclick, variant = 'primary' }) => {
  return (
    <button 
      className={\`navItem \${variant}\`}
      tabIndex={0}
      role="button"
      data-infoid={infoid}
      onClick={onclick}
    >
      {text}
    </button>
  );
};`

const rawNavigation = `
import '../../styles/labButton.css'
import '../../styles/labReports.css'


export const Navigation = ({ onLabworkChange }) => {
    const callback = (event) => {
        const id = event.target.dataset.labworkid;
        onLabworkChange(id);
    }
  
    return (
      <nav className="labNav">
        <ul className="labButtons">
          <li type="none">
            <button data-labworkid="LW11" onClick={callback} 
                    className="labButton">Лабораторна робота №1.1</button>
          </li>
          <li type="none">
            <button data-labworkid="LW12" onClick={callback} 
                    className="labButton">Лабораторна робота №1.2</button>
          </li>
          <li type="none">
            <button data-labworkid='LW21' onClick={callback} 
                    className="labButton">Лабораторна робота №2.1</button>
            </li>
          <li type="none">
            <button data-labworkid='LW22' onClick={callback} 
                    className="labButton">Лабораторна робота №2.2</button>
          </li>
          <li type="none">
            <button data-labworkid='LW31' onClick={callback} 
                    className="labButton">Лабораторна робота №3.1</button>
            </li>
          <li type="none">
            <button data-labworkid='LW32' onClick={callback} 
                    className="labButton">Лабораторна робота №3.2</button>
            </li>
        </ul>
      </nav>
    );
  }`

const rawViewport = `
import { descriptionDict } from './infosection';
import { GetDescription } from './infosection';
import MainSectionLW1 from './labworks/lw1/lw1'


export const Viewport = ({ onDescriptionChange, currentLabWorkId,
                            currentDescriptionId}) => {
    let LabworksComponent = null;
    let DescriptionComponent = null;
     
    if (currentLabWorkId === 'LW11') {
      LabworksComponent = MainSectionLW1;
      DescriptionComponent = GetDescription;
    }
  
    return (
      <div className="content">
        <div className="contentGrid">
          {LabworksComponent && (<LabworksComponent
                                    onDescribeChange={onDescriptionChange}/>)}
          {DescriptionComponent && (<DescriptionComponent
                                     descDict={descriptionDict[currentLabWorkId]}
                                     descKey={currentDescriptionId}/>)}
        </div>
      </div>
      
    );
  }`

  const rawMainSection = `
  export default function MainSectionLW1({ onDescribeChange }) {
    const getId = (event) => {
      const id = event.target.dataset.infoid;
      onDescribeChange(id);
    }
  
    const navigationItems = [
      {infoid: "describe", text: 'Опис предметного середовища', variant: 'primary' },
      {infoid: "goal", text: 'Тема Мета Місце розташування Лабораторної роботи №1',
       variant: 'primary' },
      {infoid: "structure", text: 'СТРУКТУРА ДОКУМЕНТА', variant: 'primary' },
      {infoid: "code1", text: 'HTML-код ТАБЛИЦЬ', variant: 'secondary' },
      {infoid: "code2", text: 'HTML-код ФОРМИ', variant: 'secondary' },
      {infoid: "code3", text: 'HTML-код ЗОБРАЖЕННЯ', variant: 'secondary' },
      {infoid: "conclusions", text: 'Висновки', variant: 'primary' }
    ];
  
    return (
      <section className="mainContent">
        {navigationItems.map((item, idx) => (
          <NavigationItem
            key={idx}
            infoid={item.infoid}
            onclick={getId}
            variant={item.variant}
            text={item.text}
          />
        ))}
      </section>
    )
  }`

  const rawImage = `
  import React from 'react';
import CarCard from './CarCard';
import styles from '../styles/CarRental.module.css';
import sanFr from '../assets/images/san-francisco.jpg'
import green from '../assets/images/green.jpeg'
import holms from '../assets/images/holms.jpeg'
import fantomas from '../assets/images/subaru.jpg'
import micro from '../assets/images/blue.jpeg'
import pin from '../assets/images/pin.jpeg'

function CarGrid() {
  const cars = [
    { id: 1, image: sanFr, name: 'San-Francisco', price: '100'},
    { id: 2, image: green, name: 'Bathyscaphe', price: '120'},
    { id: 3, image: holms, name: 'Holms', price: '150'},
    { id: 4, image: fantomas, name: 'Fantomas', price: '90'},
    { id: 5, image: micro, name: 'Micro', price: '110'},
    { id: 6, image: pin, name: 'Killer', price: '130'}
  ];

  return (
    <div className={styles.carGridContainer}>
      <div className={styles.carGrid}>
        {cars.map(car => (
          <div key={car.id} className={styles.carGridColumn}>
            <CarCard {...car} />
          </div>
        ))}
      </div>
    </div>
  );
}
  
function CarCard({ image, name, price }) {
  return (
    <div className={styles.carCard}>
      <img
        loading="lazy"
        src={image}
        alt={\`\${name} rental car\`}
        className={styles.carImage}
      />
      <div className={styles.carName}>{name}</div>
      <div className={styles.pricePerDay}>\${price} per day</div>
    </div>
  );
}
`

export {rawIndexHtml, rawIndexJs, rawApp, rawHeader, rawNavigationItem, rawNavigation, rawViewport,
    rawMainSection, rawImage}