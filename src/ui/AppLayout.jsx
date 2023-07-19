import { Outlet, useNavigation } from 'react-router-dom';

import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  // idle, loading, submitting
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid-flow-rows[auto_1fr_auto] grid h-screen">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
