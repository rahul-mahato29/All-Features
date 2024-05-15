import { useState, useEffect } from 'react';

function App() {
  const [pin, setPin] = useState("");

  // //parameter - 110001 -> to get data
  useEffect(() => {
    const debouncing = setTimeout( async () => {
      const data = await fetch(`https://api.postalpincode.in/pincode/110001`).then((res) => res.json());
      console.log(data);
    }, 2000)
 
    return () => {
      clearTimeout(debouncing)
    }
  }, [pin]) //when I will given any input value then after 2 second it will fetch data, 
            //so in between these 2 seconds we will provide all the input data, so it will 
            //not fetch the data in each input, hence reduceses the number of fetch requrest.

  return (
    <main className='border-2 border-black p-5 bg-violet-300'>
      <input
        onChange={(e) => setPin(e.target.value)}
        placeholder='Enter your pin-code'
        value={pin}
        className='border-2 border-black rounded p-1'
        type="text"
        name=""
        id=""
      />
    </main>
  )
}

export default App
