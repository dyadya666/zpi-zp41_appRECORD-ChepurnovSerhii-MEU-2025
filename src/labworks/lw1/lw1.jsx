import '../../../css/labReports.css'
import '../../../css/navigationItem.css'


export default function MainSectionLW1({ onDescribeChange }) {
  const getId = (event) => {
    const id = event.target.dataset.infoid;
    onDescribeChange(id);
  }


  return (
    <section className="mainContent">
      <button data-infoid="describe" onClick={getId} className="navItem primary">Опис предметного середовища</button>
      <button data-infoid="goal" onClick={getId} className="navItem primary">Тема Мета Місце розташування Лабораторної роботи №1</button>
      <button data-infoid="structure" onClick={getId} className="navItem primary">СТРУКТУРА ДОКУМЕНТА</button>
        <button data-infoid="code1" onClick={getId} className="navItem secondary">HTML-код ТАБЛИЦЬ</button>
        <button data-infoid="code2" onClick={getId} className="navItem secondary">HTML-код ТАБЛИЦЬ</button>
        <button data-infoid="code3" onClick={getId} className="navItem secondary">HTML-код ТАБЛИЦЬ</button>
      <button data-infoid="conclusions" onClick={getId} className="navItem primary">Висновки</button>
    </section>
  )
}
