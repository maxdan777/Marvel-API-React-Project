import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import SingleComic from "../singleComic/SingleComic";

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null);
    const [selectedComic, setComic] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    const onComicSelected = (id) => {
        setComic(id);
    }

    return (
        <div className="app">
            <AppHeader/>
            <main>
                {/* <ErrorBoundary>
                    <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <CharList onCharSelected={onCharSelected}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar}/>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/> */}
                <AppBanner/>
                <ComicsList/>
            </main>
        </div>
    )
}

    // return (
    //     <div className="app">
    //         <AppHeader/>
    //         <AppBanner/>
    //         <main>
    //             <div className="comic__content">
    //                 <ErrorBoundary>
    //                     <SingleComic comicId={selectedComic}/>
    //                 </ErrorBoundary>                        
    //             </div>
    //         </main>
    //     </div>
    // )


export default App;