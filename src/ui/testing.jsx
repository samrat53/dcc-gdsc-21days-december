import { useEffect,useState } from 'react';
import useApiStore from '../api/ApiStore';
import { useQuery } from 'react-query';

const Testing = () => {
  const { testApi,responseData } = useApiStore(); // Fix: use destructuring for the named export
  const { data, isLoading, error } = useQuery('testApi', testApi);
  const [hello, setHello] = useState("");
  
  useEffect(()=>
  {
    setHello(responseData)

  },[responseData])
  const handleIt = async() => {
    try
    {
       
    console.log('Data:', data);
    }
    catch(error)
    {
        console.log(error);
    }
  };

  return (
    <>
    <button onClick={handleIt} className='text-[200px]'>Testing</button> 
    <div>{responseData.data}</div>
    </>
  );
};

export default Testing; // Fix: capitalize the component name
