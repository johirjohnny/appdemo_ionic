import React, { useEffect, useState } from "react";
import ReleaseDetails from "./ReleaseDetails";
import {
  IonCard,
  IonContent,
  IonGrid,
  IonPage,
  useIonRouter,
} from "@ionic/react";
import { useParams } from "react-router";

const Release = () => {
  const { name } = useParams();
  console.log(name)

  const [releases, setReleases] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/repos/mozilla/zamboni/releases`)
      .then((res) => res.json())
      //.then((data) => setPosts(data.items))
      .then((data) => setReleases(data));
  }, [name]);
  console.log(releases);

  return (
    <IonContent>
      {
        releases.map(release => 
        <ReleaseDetails data={release}></ReleaseDetails>)
      }  
    </IonContent>
  );
  
};

export default Release;
