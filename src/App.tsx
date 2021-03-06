import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { EditLibraryScreen } from './pages/edit-library-screen';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export class App extends React.Component<{}, {}> {

    componentDidMount() {
        // UNNCOMMENT THIS TO REPRO THE PROBLEM AUTOMATICALLY.
        // setTimeout(() => {
        //     history.replace(`/edit-library/test2/posts`)
        // }, 2000);
    }

    render() {
        return (
            <IonApp>
              <IonReactRouter history={history}>
                <IonRouterOutlet id="main">
                    <Route 
                        path="/edit-library/:id" 
                        render={props => 
                            <EditLibraryScreen 
                                key={props.match.params.id}
                                />
                        } 
                        exact={false}
                        />
                    <Redirect from="/" to="/edit-library/test1/posts" exact />
                </IonRouterOutlet>
              </IonReactRouter>
            </IonApp>
        );
    }
}

export default App;
