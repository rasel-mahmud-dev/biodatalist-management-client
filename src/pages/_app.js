// `pages/_app.js`
import '../../styles/globals.scss';
import '../../styles/sidebar.scss';
import Navigation from "components/Navigation";
import {Provider, useDispatch} from "react-redux";
import {store} from "../store";
import {useEffect} from "react";
import {fetchCurrentAuthAction} from "../store/actions/authAction";
import Footer from "components/Footer";


function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <AppWrapper>
                <Navigation/>
                <div className="navigation-height"></div>
                <Component {...pageProps} />;

                <Footer />
            </AppWrapper>
        </Provider>
    )
}


function AppWrapper(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentAuthAction())
    }, [])


    return props.children
}

export default App