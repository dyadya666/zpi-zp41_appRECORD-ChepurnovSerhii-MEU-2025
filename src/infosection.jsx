import '../css/labReports.css'

import { descriptionDictLW1 } from './labworks/lw1/description';


export const descriptionDict = {
  'LW11': descriptionDictLW1
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