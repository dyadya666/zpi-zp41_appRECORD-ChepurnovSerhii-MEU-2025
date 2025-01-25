import { descriptionDict } from './infosection';
import { GetDescription } from './infosection';
import MainSectionLW1 from './labworks/lw1/lw1'
import MainSectionLW12 from './labworks/lw12/lw12';


export const Viewport = ({ onDescriptionChange, currentLabWorkId,  currentDescriptionId}) => {
    let LabworksComponent = null;
    let DescriptionComponent = null;
     
    if (currentLabWorkId === 'LW11') {
      LabworksComponent = MainSectionLW1;
      DescriptionComponent = GetDescription;
    }

    if (currentLabWorkId === 'LW12') {
      LabworksComponent = MainSectionLW12;
      DescriptionComponent = GetDescription;
    }
  
    return (
      <div className="content">
        <div className="contentGrid">
          {LabworksComponent && (<LabworksComponent onDescribeChange={onDescriptionChange}/>)}
          {DescriptionComponent && (<DescriptionComponent descDict={descriptionDict[currentLabWorkId]} descKey={currentDescriptionId}/>)}
        </div>
      </div>
      
    );
  }