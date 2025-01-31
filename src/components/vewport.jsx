import { descriptionDict } from './infosection';
import { GetDescription } from './infosection';
import MainSectionLW1 from './labworks/lw1/lw1'
import MainSectionLW12 from './labworks/lw12/lw12';
import MainSectionLW21 from './labworks/lw21/lw21';
import MainSectionLW22 from './labworks/lw22/lw22';


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

    if (currentLabWorkId === 'LW21') {
      LabworksComponent = MainSectionLW21;
      DescriptionComponent = GetDescription;
    }

    if (currentLabWorkId === 'LW22') {
      LabworksComponent = MainSectionLW22;
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