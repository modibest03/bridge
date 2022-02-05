import { Provider } from 'react-redux';
import { store } from '../redux/store';
import 'react-loading-skeleton/dist/skeleton.css';
import ErrorBoundary from '../components/ErrorBoundry';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
}

export default MyApp;
