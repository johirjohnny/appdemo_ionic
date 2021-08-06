import logo from './logo.svg';
import React, { Component, useState, useEffect } from 'react';
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
  IonPage
} from '@ionic/react'
import Pages from './Component/Pages/Pages';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Release from './Component/Release/Release';


function App() {


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            HomePage
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Home></Home>
        <Router>
          <Switch>
            <Route exact path="/release/:name" component={Release}>
            </Route>
          </Switch>
        </Router>

      </IonContent>
    </IonPage>

  );
}


export default App;
