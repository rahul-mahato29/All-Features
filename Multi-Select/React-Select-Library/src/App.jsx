import { useState } from 'react'
import Select from 'react-select'

const options = [
  {value:"India", label:"India"},
  {value:"USA", label:"USA"},
  {value:"Germany", label:"Germany"},
  {value:"Poland", label:"Poland"},
  {value:"Dubai", label:"Dubai"},
]

const App = () => {

  const [selectedOption, setSelectedOption] = useState([]);
  // console.log(selectedOption);

  function handleChange(selectedOption){
    setSelectedOption(selectedOption);
  }

  return (
    <div className="border-2 border-black p-5">
      <h3>Multi-Select-Dropdown</h3>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        isMulti={true}
      />
    </div>
  )
}

export default App;


//Library - https://react-select.com/home