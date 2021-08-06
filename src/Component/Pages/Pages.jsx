import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonButton,
  IonRouterOutlet,
  IonTabButton,
  IonLabel,
  IonTabBar,
  IonTab,
  IonTabs,
  IonRoute,
} from "@ionic/react";
import { useIonRouter } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Release from "../Release/Release";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Pages = ({ page }) => {
  const { id, name, full_name, description } = page.repository;
  const router = useIonRouter();
  return (
    
      <IonGrid>
        <IonCol>
          <h2>Name : {name}</h2>
        </IonCol>
        <IonCol>
          <h4>Id : {id}</h4>
        </IonCol>
        <IonCol>
          <h5>Description : {description}</h5>
        </IonCol>
        <IonButton routerLink={"/release/"+name}>Releases</IonButton>
        {/* <IonButton onclick={(e) => {
            e.preventDefault();
            history.push("/release/"+name)}}>Blog</IonButton> */}
      </IonGrid>
    
  );
};

export default Pages;
