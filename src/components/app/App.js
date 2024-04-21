import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {MainPage, ComicsPage} from '../pages'
import AppHeader from "../appHeader/AppHeader";

import SingleComic from "../singleComic/SingleComic";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}


// const [selectedComic, setComic] = useState(null);

// const onComicSelected = (id) => {
//     setComic(id);
// }

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