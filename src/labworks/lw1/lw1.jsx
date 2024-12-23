import React from 'react';
import '../../../css/labReports.css'

import { NavigationItem } from '../../navigationItem';


export default function MainSectionLW1({ onDescribeChange }) {
  const getId = (event) => {
    const id = event.target.dataset.infoid;
    onDescribeChange(id);
  }

  const navigationItems = [
    {infoid: "describe", text: 'Опис предметного середовища', variant: 'primary' },
    {infoid: "goal", text: 'Тема Мета Місце розташування Лабораторної роботи №1', variant: 'primary' },
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
}
