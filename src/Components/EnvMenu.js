import { useState } from 'react';
import Select from 'react-select';
import './EnvMenu.css'

function EnvMenu() {
    const data = [
      {
        value: 1,
        label: "example 1",
        className: "Elements"
      },
      {
        value: 2,
        label: "example 2"
      },
      {
        value: 3,
        label: "example 3"
      },
      {
        value: 4,
        label: "example 4"
      },
      {
        value: 5,
        label: "example 5"
      },
      {
        value: 6,
        label: "example 6"
      },
      {
        value: 7,
        label: "example 7"
      },
      {
        value: 8,
        label: "example 8"
      }
    ];
   
    const [selectedOption, setSelectedOption] = useState(null);
   
    // handle onChange event of the dropdown
    const handleChange = e => {
      setSelectedOption(e);
    }
   
    return (
      <div className="Env-menu"> 
        <Select
          isMulti
          placeholder="Select Example"
          value={selectedOption} // set selected value
          options={data} // set list of the data
          onChange={handleChange} // assign onChange function
        />
      </div>
    );
  }

  export default EnvMenu