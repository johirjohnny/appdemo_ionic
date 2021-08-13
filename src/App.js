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
  IonPage,
  IonRouterOutlet,
} from '@ionic/react'
import Pages from './Component/Pages/Pages';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { IonReactRouter } from '@ionic/react-router';
import { Redirect } from 'react-router-dom';
import Release from './Component/Release/Release';


function App() {


  return (
    <IonApp>
      <IonReactRouter>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              WpCafe HomePage 
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRouterOutlet>
            <Home></Home>
              <Route exact path="/release/:name">
                <Release/>
            </Route>
          </IonRouterOutlet>
        </IonContent>
      </IonReactRouter>
    </IonApp>

  );
}


export default App;
