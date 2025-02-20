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
      <div className="studentImg">
      <img loading="lazy" src={myphoto} className="profileImage" alt="Фото студента Чепурнова Сергія Олександровича" />
      </div>
    </header>
  )
}