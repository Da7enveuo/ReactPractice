import { useState } from 'react';
import Select from 'react-select';
import "./TagMenu.css"
function TagMenu() {
    const data = [
      {
        value: 1,
        label: "example tag 1"
      },
      {
        value: 2,
        label: "example tag 2"
      },
      {
        value: 3,
        label: "example tag 3"
      },
      {
        value: 4,
        label: "example tag 4"
      },
      {
        value: 5,
        label: "example tag 5"
      },
      {
        value: 6,
        label: "example tag 6"
      },
      {
        value: 7,
        label: "example tag 7"
      }
    ];
   
    const [selectedOption, setSelectedOption] = useState(null);
   
    // handle onChange event of the dropdown
    const handleChange = e => {
      setSelectedOption(e);
    }
   
    return (
      <div className="Tag-menu"> 
        <Select
          isMulti
          placeholder="Select Tags"
          value={selectedOption} // set selected value
          options={data} // set list of the data
          onChange={handleChange} // assign onChange function
        />
      </div>
    );
  }

  export default TagMenu