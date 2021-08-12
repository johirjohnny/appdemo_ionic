import React, { Component, useState, useEffect } from "react";
import Pages from "../Pages/Pages";
import Pagination from "../Pagination/Pagination";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    fetch(
      `https://api.github.com/search/code?q=addClass+user:mozilla&page=32&per_page`
    )
      .then((res) => res.json())
      .then((data) => setPosts(data?.items));
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //   console.log(posts);
  return (
    <IonContent>
      {/* posts = {currentPosts}; */}
      {currentPosts.map((post) => (
        <Pages post={post} loading={loading}></Pages>
      ))}
      {/* <Pages posts={currentPosts} loading={loading} /> */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </IonContent>
  );
};

export default Home;