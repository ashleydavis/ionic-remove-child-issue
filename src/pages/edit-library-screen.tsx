import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import PostsScreen from './posts-screen';

export interface IEditLibraryProps {
}

export interface IEditLibraryState {
}

export class EditLibraryScreen extends React.Component<IEditLibraryProps, IEditLibraryState> {

    constructor(props: IEditLibraryProps) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <IonRouterOutlet>
                <Route 
                    path="/edit-library/:id/posts" 
                    render={() => 
                        <PostsScreen
                            />
                    } 
                    exact 
                    />
            </IonRouterOutlet>
        );
    }
}
