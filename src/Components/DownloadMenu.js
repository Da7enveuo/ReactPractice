import { useState } from 'react';
import Select from 'react-select';
import './DownloadMenu.css'
function DownloadMenu() {
    const data = [
      {
        value: 1,
        label: "png"
      },
      {
        value: 2,
        label: "pdf"
      },
      {
        value: 3,
        label: "csv"
      },
      {
        value: 4,
        label: "jpg"
      }
    ];
   
    const [selectedOption, setSelectedOption] = useState(null);
   
    // handle onChange event of the dropdown
    const handleChange = e => {
      setSelectedOption(e);
    }
   
    return (
      <div className="Download-menu"> 
        <Select
          placeholder="Select Download Format"
          value={selectedOption} // set selected value
          options={data} // set list of the data
          onChange={handleChange} // assign onChange function
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
            ...theme.colors,
              text: 'orange',
              primary25: 'grey',
              primary: 'black',
            },
          })}
        />
      </div>
    );
  }

  export default DownloadMenu