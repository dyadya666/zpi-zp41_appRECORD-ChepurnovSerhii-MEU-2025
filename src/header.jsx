export const Header = () => {
  return (
    <header className="header-section">
      <div className="header-content">
          <h1 className="main-title">
              ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ <br />
                  <span fontWeight={400}>
                      З ДИСЦИПЛІНИ "ПРОЕКТУВАННЯ WEB-ЗАСТОСУВАНЬ"
                  </span>
          </h1>
          <p className="student-info">
              Студент групи ЗПІ-зп41 2024-2025 Чепурнов Сергій Олександрович
          </p>
      </div>
      <img loading="lazy" src="./images/photo.JPG" className="student-photo" alt="Фото студента Чепурнова Сергія Олександровича" />
    </header>
  )
}