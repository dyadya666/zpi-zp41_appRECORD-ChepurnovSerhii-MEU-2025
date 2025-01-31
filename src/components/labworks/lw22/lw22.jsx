import React from 'react';
import '../../../styles/labReports.css'
import { NavigationItem } from '../../navigationItem';


export default function MainSectionLW22({ onDescribeChange }) {
  const getId = (event) => {
    const id = event.target.dataset.infoid;
    onDescribeChange(id);
  }

  const navigationItems = [
    {infoid: "goal", text: 'Тема Мета Місце розташування сайту, звіту', variant: 'primary' },
    {infoid: "desktop", text: 'Десктопна версія', variant: 'primary' },
    {infoid: "tablet", text: 'Планшетна версія', variant: 'primary' },
    {infoid: "mobile", text: 'Мобільна версія', variant: 'primary' },
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
