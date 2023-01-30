// `pages/_app.js`
import '../../styles/globals.scss';
import Navigation from "components/Navigation";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Navigation />
            <Component {...pageProps} />;
        </div>
    )
}