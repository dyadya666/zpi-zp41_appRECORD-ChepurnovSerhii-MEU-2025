import React from 'react';
import '../../../styles/labReports.css'

import { NavigationItem } from '../../navigationItem';


export default function MainSectionLW21({ onDescribeChange }) {
  const getId = (event) => {
    const id = event.target.dataset.infoid;
    onDescribeChange(id);
  }

  const navigationItems = [
    {infoid: "goal", text: 'Тема Мета Місце розташування сайту, звіту', variant: 'primary' },
    {infoid: "task1", text: 'ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету.', variant: 'primary' },
    {infoid: "task2", text: 'ЗАВДАННЯ №2', variant: 'primary' },
    {infoid: "fixed_table", text: 'Фіксована таблична верстка', variant: 'secondary' },
    {infoid: "flex_table", text: 'Гумова таблична верстка', variant: 'secondary' },
    {infoid: "fixed_block", text: 'Фіксована блокова верстка', variant: 'secondary' },
    {infoid: "flex_block", text: 'Гумова блокова верстка', variant: 'secondary' },
    {infoid: "task3", text: 'ЗАВДАННЯ №3 FLEXBOX', variant: 'primary' },
    {infoid: "flex1", text: 'Скріншот сторінки (Flexbox)', variant: 'secondary' },
    {infoid: "flex2", text: 'HTML-код (Flexbox)', variant: 'secondary' },
    {infoid: "flex3", text: 'CSS-код (Flexbox)', variant: 'secondary' },
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
