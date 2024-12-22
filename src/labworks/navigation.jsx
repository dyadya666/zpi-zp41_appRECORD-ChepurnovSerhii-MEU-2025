import '../../css/labButton.css'
import '../../css/labReports.css'


export const Navigation = ({ onLabworkChange }) => {
    const callback = (event) => {
        console.log(event.target.dataset)
        const id = event.target.dataset.labworkid;
        onLabworkChange(id);
    }
  
    return (
      <nav className="labNav">
        <ul className="labButtons">
          <li type="none">
            <button data-labworkid="LW1" onClick={callback} className="labButton">Лабораторна робота №1</button>
            </li>
          <li type="none">
            <button data-labworkid='LW2' onClick={callback} className="labButton">Лабораторна робота №2</button>
            </li>
          <li type="none">
            <button data-labworkid='LW4' onClick={callback} className="labButton">Лабораторна робота №4</button>
            </li>
          <li type="none">
            <button data-labworkid='LW3' onClick={callback} className="labButton">Лабораторна робота №3</button>
            </li>
        </ul>
      </nav>
    );
  }