import React, { Component, useState, useEffect } from "react";
import Pages from "../Pages/Pages";
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

const Home = () => {
  const [pages, setPages] = useState([]);


  useEffect(() => {
    fetch(
      `https://api.github.com/search/code?q=addClass+user:mozilla&page=32&per_page=5`
    )
      .then((res) => res.json())
      .then((data) => setPages(data.items));
  }, [])
  return(
    <IonContent>
        {
            pages.map(page => <Pages page={ page}></Pages>
            )}
    </IonContent>
  )
};

export default Home;
