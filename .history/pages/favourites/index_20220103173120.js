import React from "react";
import parse from 'html-react-parser';
import { HeartIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Definitions from "../../components/Definitions";

const getFavourites = (e) => {
    const previousFavourites = localStorage.getItem('favourites');
    const newFavourites = previousFavourites ? [...JSON.parse(previousFavourites), e.target.value] : [e.target.value];
    localStorage.setItem('favourites', JSON.stringify(newFavourites));
    console.log('>> newFavourites', newFavourites);

};

// const removeFavourites = (e) => {
//     console.log('>> removeFavourites', e.target.value);
// };

const Favourites = () => {
    const [definitions, setDefinitions] = useState([]);

    useEffect(async () => {
        // Get the app defined on MongoDB
        const app = new Realm.App({ id: REALM_APP_ID });
        // Credential to access the app (anonymous user)
        const credentials = Realm.Credentials.anonymous();

        try {
            // Log in to the app using the credentials
            const user = await app.logIn(credentials);
            // Call the serverless function defined on MongoDB to get all the data
            const allDefinitions = await user.functions.getAllDefinitions();
            // Store the data on a state
            setDefinitions(allDefinitions);
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <Head>
                <title>Web Development Glossary Search - Favourites</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-white w-full min-h-screen">
                <Header />
                <Container>
                    <ul>
                        {localStorage.getItem('favourites') && JSON.parse(localStorage.getItem('favourites')).map((e, i) => {
                            return (
                                <li key={i}>
                                    <div className="flex items-center">
                                        <Definitions definitions={definitions} />
                                        <button onClick={getFavourites} value={e} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                                            <HeartIcon className="w-4 h-4 inline-block mr-2" />
                                            {e}
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </Container>
                <Footer />
            </div>
        </>
    );
};

export default Favourites;