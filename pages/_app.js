import '../styles/globals.css'
import Layot from '../components/Layot'
import store from "../redux/store";
import {Provider} from "react-redux";
function MyApp({ Component, pageProps }) {
  
    return (
     <Provider store={store}>
        <Layot>
        <Component {...pageProps} />
        </Layot>
     </Provider>
    );
    
 
}

export default MyApp
