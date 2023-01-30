// `pages/_app.js`
import '../../styles/globals.scss';
import Navigation from "components/Navigation";
import {Provider, useDispatch} from "react-redux";
import {store} from "../store";
import {useEffect} from "react";
import {fetchCurrentAuthAction} from "../store/actions/authAction";

export default function App({ Component, pageProps }) {

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchCurrentAuthAction())
    }, [])


    return (


        <div>
            <Provider store={store}>
                <Navigation />
                <Component {...pageProps} />;
            </Provider>
        </div>
    )
}