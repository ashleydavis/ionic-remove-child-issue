import React from 'react';
import { IonContent, IonList, IonItem } from '@ionic/react';

interface PostProps {

}

const Post: React.FC<PostProps> = () => {
  return (
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
  );
};

export default Post;