import { useState, useEffect } from 'react';

function App() {
  const [pin, setPin] = useState("");

  //parameter - 110001 -> to get data
  const SearchPin = async (parameter) => {
    const data = await fetch(`https://api.postalpincode.in/pincode/${parameter}`).then((res) => res.json());
    console.log(data);
  }

  useEffect(() => {
    SearchPin(pin);
  }, [pin]) //when I will given any input value then it will fetch data. (extra-fetch request (without debouncing))

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
