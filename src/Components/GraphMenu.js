import { useState } from 'react';
import Select from 'react-select';
import './GraphMenu.css'

function GraphMenu() {
    const data = [
      {
        value: 1,
        label: "Pie Chart"
      },
      {
        value: 2,
        label: "Line Chart"
      },
      {
        value: 3,
        label: "Bar Chart"
      },
      {
        value: 4,
        label: "Polar Chart"
      }
    ];
   
    const [selectedOption, setSelectedOption] = useState(null);
   
    // handle onChange event of the dropdown
    const handleChange = e => {
      setSelectedOption(e);
    }
   
    return (
      <div className="Graph-menu"> 
        <Select
          placeholder="Select Graph Type"
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

  export default GraphMenu