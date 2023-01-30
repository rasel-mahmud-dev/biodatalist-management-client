// `pages/_app.js`
import '../../styles/globals.scss';
import Navigation from "components/Navigation";
import {Provider, useDispatch} from "react-redux";
import {store} from "../store";
import {useEffect} from "react";
import {fetchCurrentAuthAction} from "../store/actions/authAction";


function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <AppWrapper>
                <Navigation/>
                <Component {...pageProps} />;
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