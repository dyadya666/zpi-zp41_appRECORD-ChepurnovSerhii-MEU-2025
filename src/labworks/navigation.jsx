export const Navigation = ({ onLabworkChange }) => {
    const callback = (event) => {
        console.log(event.target.dataset)
        const id = event.target.dataset.labworkid;
        onLabworkChange(id);
    }
  
    return (
      <nav className="lab-works-section">
        <ul className="lab-works-container">
          <li type="none">
            <button data-labworkid="LW1" onClick={callback} className="lab-work-item">Лабораторна робота №1</button>
            </li>
          <li type="none">
            <button data-labworkid='LW2' onClick={callback} className="lab-work-item">Лабораторна робота №2</button>
            </li>
          <li type="none">
            <button data-labworkid='LW4' onClick={callback} className="lab-work-item">Лабораторна робота №4</button>
            </li>
          <li type="none">
            <button data-labworkid='LW3' onClick={callback} className="lab-work-item">Лабораторна робота №3</button>
            </li>
        </ul>
      </nav>
    );
  }