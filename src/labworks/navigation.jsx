import '../../css/labButton.css'
import '../../css/labReports.css'


export const Navigation = ({ onLabworkChange }) => {
    const callback = (event) => {
        const id = event.target.dataset.labworkid;
        onLabworkChange(id);
    }
  
    return (
      <nav className="labNav">
        <ul className="labButtons">
          <li type="none">
            <button data-labworkid="LW11" onClick={callback} className="labButton">Лабораторна робота №1.1</button>
          </li>
          <li type="none">
            <button data-labworkid="LW12" onClick={callback} className="labButton">Лабораторна робота №1.2</button>
          </li>
          <li type="none">
            <button data-labworkid='LW21' onClick={callback} className="labButton">Лабораторна робота №2.1</button>
            </li>
          <li type="none">
            <button data-labworkid='LW22' onClick={callback} className="labButton">Лабораторна робота №2.2</button>
          </li>
          <li type="none">
            <button data-labworkid='LW31' onClick={callback} className="labButton">Лабораторна робота №3.1</button>
            </li>
          <li type="none">
            <button data-labworkid='LW32' onClick={callback} className="labButton">Лабораторна робота №3.2</button>
            </li>
        </ul>
      </nav>
    );
  }