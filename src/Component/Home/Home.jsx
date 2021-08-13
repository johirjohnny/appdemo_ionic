import React, { Component, useState, useEffect } from "react";
import Pages from "../Pages/Pages";
import ReactPaginate from "react-paginate";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = posts.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(posts.length);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    fetch(
      `https://api.github.com/search/code?q=addClass+user:mozilla&page=32&per_page`
    )
      .then((res) => res.json())
      .then((data) => setPosts(data?.items));
    setLoading(false);
  }, []);

  return (
    <IonContent>
      {/* posts = {currentPosts}; */}
      {displayUsers.map((post) => (
        <Pages post={post} loading={loading}></Pages>
      ))}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

      {/* <Pages posts={currentPosts} loading={loading} /> */}
    </IonContent>
  );
};

export default Home;
