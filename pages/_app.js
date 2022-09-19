import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import axios from "axios";
import { Provider, useSelector } from 'react-redux'
import { store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App Component={Component} pageProps={pageProps}/>
      </PersistGate>
    </Provider>
  )
}

function App({ Component, pageProps }) {
  const reduxconst = useSelector(state => state);
  // console.log("console di _app.js = ", reduxconst.auth.isLogin);

  axios.interceptors.request.use(
    function (config) {
      if(reduxconst.auth.isLogin){
        config.headers = {
          Authorization: `Bearer ${reduxconst.auth.token}`
        };
      }
      return config;
    }
  );

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
