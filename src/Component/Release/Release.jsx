import React, { useEffect, useState } from "react";
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

  const [release, setRelease] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/repos/mozilla/${name}/releases`)
      .then((res) => res.json())
      //.then((data) => setPosts(data.items))
      .then((data) => setRelease(data));
  }, [name]);
  console.log(release);
  return (
    <>
      {release.map((data) => (
        <IonPage>{data.id}</IonPage>
      ))}
    </>
  );
};

export default Release;
