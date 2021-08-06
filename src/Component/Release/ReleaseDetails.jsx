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
import moment from "moment";
const ReleaseDetails = ({ data }) => {
  return (
    <IonGrid>
      <IonCol>
        <h2>Id : {data.id}</h2>
        <h2>Version : {data.tag_name}</h2>
        <p>Date : {moment(data.created_at).calendar()}</p>
      </IonCol>
    </IonGrid>
  );
};

export default ReleaseDetails;
