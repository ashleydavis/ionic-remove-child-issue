import React from 'react';
import { IonContent, IonPage, IonList, IonItem } from '@ionic/react';
import Post from './post';
import { withRouter, RouteComponentProps } from 'react-router';

export interface IPostsScreenProps extends RouteComponentProps<{id: string}> {
}

export interface IPostsScreenState {
}

class PostsScreen extends React.Component<IPostsScreenProps, IPostsScreenState> {

    constructor(props: IPostsScreenProps) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <IonPage>
                <Post key={this.props.match.params.id} />
            </IonPage>
        );
    }
}

export default withRouter(PostsScreen);