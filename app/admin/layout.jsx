"use client";

import "@/public/admin/styles/style.css";
import React from "react";
import Header from "@/components/admin/Header";
import Menu from "@/components/admin/Menu";

const AdminLayout = ({ children }) => {
  // const fetchMovies = (search) => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=33997e27d6abf922adb70f5dc0f0c135&query={}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       // dispatch(feedMovies(moviesData));
  //     });
  // };
  // const options = {
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/discover/movie&page=2",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzk5N2UyN2Q2YWJmOTIyYWRiNzBmNWRjMGYwYzEzNSIsInN1YiI6IjY0ZGQ4NmQxYTNiNWU2MDBjNWJjNDJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jNRcN4sSXGfXxqAk4bGGZfHznckDmIWpIvArQUkSqkI",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <div className="AdminLayout">
      <Header />

      <div className="AdminLayout-body-container">
        <div className="AdminLayout-sidemenu">
          <Menu />
        </div>

        <div className="AdminLayout-content">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
