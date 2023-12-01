import Header from './Header';
// import Loader from './Loader';

import { Outlet, useNavigation } from 'react-router-dom';
import { Footer } from './Footer';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="">
      {/* {isLoading && <Loader />} */}
      <div className=''>
      <Header />
      </div>

      <div className="">
        <main className="">
          <div className=''> 
          <Outlet />
          </div>
          <Footer/>
        </main>
      </div>

      
    </div>
  );
}

export default AppLayout;