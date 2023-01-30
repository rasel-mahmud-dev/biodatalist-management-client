// `pages/_app.js`
import '../../styles/globals.scss';
import Navigation from "components/Navigation";
import {Provider} from "react-redux";
import {store} from "../store";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Provider store={store}>
                <Navigation />
                <Component {...pageProps} />;
            </Provider>
        </div>
    )
}