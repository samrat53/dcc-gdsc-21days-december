import useApiStore from '../api/ApiStore';
import { useQuery } from 'react-query';

const Testing = () => {
  const { testApi } = useApiStore(); // Fix: use destructuring for the named export
  const { data, isLoading, error } = useQuery('testApi', testApi);

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
    <button onClick={handleIt} className='text-[200px]'>Testing</button> 
  );
};

export default Testing; // Fix: capitalize the component name
