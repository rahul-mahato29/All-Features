import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedData, setSearchedData] = useState([]);


  //fetching-Data from api
  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1/todos').then((res) => res.json());
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  //Search-Logic
  useEffect(() => {
    if (searchQuery) {
      setSearchedData(
        data.filter((info) => {
          return Object.values(info)
            .join('')
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      )
    }
    else{
      //in-case of empty
      setSearchedData(data);  //if i will give input as "space" or blank
    }
  }, [searchQuery])


  // object.values() - converting object into array.
  // .join('') - converting all the item in an array to a string.
  // includes(searchQuery) - find the given searchQuery is present in the array or not.

  return (
    <main>
      <div className='border-2 border-black p-1 m-1'>
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className='border-2 border-black w-full rounded p-2 bg-gray-200'
          type="text"
          name=""
          id=""
          placeholder='Search Title'
        />
      </div>
      <section className='border-2 border-black p-5 m-1 flex flex-wrap justify-between'>
        {searchQuery.length > 0 ? (         //if something searched then it will map searchedData state-variable else, data state-variable
          searchedData.map((info) => {
            return (
              <div className='border-2 border-black p-2 m-2 w-48'>
                <h3><span className='font-bold'>Id : </span>{info.id}</h3>
                <p><span className='font-bold'>Title : </span>{info.title}</p>
                <h3><span className='font-bold'>Completed : </span>{info.completed ? "true" : "false"}</h3>
              </div>
            )
          })
        ) : (
          data.map((info) => {
            return (
              <div className='border-2 border-black p-2 m-2 w-48'>
                <h3><span className='font-bold'>Id : </span>{info.id}</h3>
                <p><span className='font-bold'>Title : </span>{info.title}</p>
                <h3><span className='font-bold'>Completed : </span>{info.completed ? "true" : "false"}</h3>
              </div>
            )
          })
        )}
      </section>
    </main>
  )
}

export default App
