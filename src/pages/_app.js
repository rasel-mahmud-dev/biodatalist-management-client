// `pages/_app.js`
import '../../styles/globals.scss';
import '../../styles/sidebar.scss';
import '../../styles/dashboard.scss';
import Navigation from "components/Navigation";
import {Provider, useDispatch} from "react-redux";
import {store} from "../store";
import {useEffect} from "react";
import {fetchCurrentAuthAction} from "../store/actions/authAction";
import Footer from "components/Footer";
import {toggleLang} from "../store/slices/appSlice";

function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <AppWrapper>
                <div className="flex flex-col h-screen">
                        <div className="content" >
                            <Navigation/>
                            <div className="navigation-height"></div>
                            <Component {...pageProps} />
                        </div>
                    <Footer />
                </div>
            </AppWrapper>
        </Provider>
    )
}


function AppWrapper(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCurrentAuthAction())

        let lang = localStorage.getItem("lang") || "en"
        dispatch(toggleLang(lang))
    }, [])


    return props.children
}

export default App