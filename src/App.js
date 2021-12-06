import { useEffect, setState } from 'react';
import Display from "./components/Display";
import axios from 'axios';

function App() {
  const userFetch = async() => {
    try {
      let res = await axios({
        method: 'get',
        url: 'https://api.github.com/users'
      })
      console.log(res.data);
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // console.log('aa');
    userFetch();
  }, [])  
  return (
    <div className="App flex flex-col items-center justify-center bg-gray-500 h-screen">
        <h1 className="text-indigo-300 text-4xl font-bold py-12">React app</h1>
        <Display />
    </div>
  );
}

export default App;
