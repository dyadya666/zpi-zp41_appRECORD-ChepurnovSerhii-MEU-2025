import '../styles/labReports.css'

import { descriptionDictLW1 } from './labworks/lw1/description';
import { descriptionDictLW12 } from './labworks/lw12/description';
import { descriptionDictLW21 } from './labworks/lw21/description';


export const descriptionDict = {
  'LW11': descriptionDictLW1,
  'LW12': descriptionDictLW12,
  'LW21': descriptionDictLW21
}


const InfoSection = ({ text }) => {
    return (
      <aside className="sidebar">
        <div className="outputArea">{text}</div>
      </aside>
    );
  }


export const GetDescription = ({ descDict, descKey }) => {
  const text = descDict !== 'underfined' ? descDict[descKey] : '';
  return (
    <InfoSection text={text} />
  );
}