import '../styles/labReports.css'

import { descriptionDictLW1 } from './labworks/lw1/description';
import { descriptionDictLW12 } from './labworks/lw12/description';


export const descriptionDict = {
  'LW11': descriptionDictLW1,
  'LW12': descriptionDictLW12
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