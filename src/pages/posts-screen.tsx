import React from 'react';
import { IonContent, IonPage, IonList, IonItem } from '@ionic/react';

export interface IPostsScreenProps {
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
                <IonContent>
                    <IonList>
                        <IonItem
                            routerLink="/edit-library/test2/posts"
                            detail={false}
                            >
                            Click me to trigger the problem
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
}

export default PostsScreen;