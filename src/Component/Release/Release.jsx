import React, { useEffect, useState } from "react";
import ReleaseDetails from "./ReleaseDetails";
import axios from "axios";
import {
  IonCard,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { useParams } from "react-router";

const Release = () => {
  const { name } = useParams();

  console.log(name);
  const [showLoading, setShowLoading] = useState(true);
  const [releases, setReleases] = useState([]);
  useEffect(() => {
    // axios
    //   .get(`https://api.github.com/repos/mozilla/${name}/releases`)
    fetch(`https://api.github.com/repos/mozilla/${name}/releases`)
      .then((res) => res.json())
      //.then((data) => setPosts(data.items))
      .then((data) => setReleases(data));
    // async function fetchData() {
    //     try {
    //       const result = await axios.get(`https://api.github.com/repos/mozilla/${name}/releases`) //fetch data from the releases api
    //       setReleases(result.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
  }, [name]); //change data when name change
  setTimeout(() => {
    setShowLoading(false);
  }, 4000);
  console.log(releases);

  return (
    <IonPage>
      <IonToolbar>
        <IonTitle>Repo Name :{name}</IonTitle>
      </IonToolbar>

      <IonContent>
        {releases.map((release) => (
          <ReleaseDetails data={release}></ReleaseDetails>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Release;
