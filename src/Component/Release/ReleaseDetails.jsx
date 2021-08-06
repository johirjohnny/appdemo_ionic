import React from "react";
import { useParams } from "react-router-dom";
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
const ReleaseDetails = ({ data }) => {
  
  return (
    <IonGrid>
      <IonCol>
        <h2>Id : {data.id}</h2>
        <h2>Version : {data.tag_name}</h2>
        <h2>Date : {data.created_at}</h2>
      </IonCol>
    </IonGrid>
  );
};

export default ReleaseDetails;
