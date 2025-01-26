import React from 'react';
import '../../../styles/labReports.css'

import { NavigationItem } from '../../navigationItem';


export default function MainSectionLW12({ onDescribeChange }) {
  const getId = (event) => {
    const id = event.target.dataset.infoid;
    onDescribeChange(id);
  }

  const navigationItems = [
    {infoid: "goal", text: 'Тема Мета Місце розташування сайту, звіту', variant: 'primary' },
    {infoid: "examples", text: 'Способи підключння стилів з прикладами', variant: 'primary' },
    {infoid: "selectors", text: 'Селектори', variant: 'primary' },
    {infoid: "class_selector", text: 'Селектор класу', variant: 'secondary' },
    {infoid: "other_selectors", text: 'Інші селектори', variant: 'secondary' },
    {infoid: "independent", text: 'Самостійна робота №2', variant: 'primary' },
    {infoid: "font1", text: 'Шрифт.', variant: 'secondary' },
    {infoid: "font2", text: 'CSS: Таблиці. Фон. Списки.', variant: 'secondary' },
    // {infoid: "font3", text: 'CSS просунутий', variant: 'secondary' },
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
