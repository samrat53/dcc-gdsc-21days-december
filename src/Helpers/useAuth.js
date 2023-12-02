import { useContext } from "react";
import AuthContext
const useMyContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
  };
  
  export default useMyContext
  