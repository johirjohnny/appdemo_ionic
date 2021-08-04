import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import './App.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
 
} from '@ionic/react';

class App extends Component {
  render() {
    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Mobile App Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Hello World</h1>
      </IonContent>
    </IonApp>

    );
  }
}

export default App;
