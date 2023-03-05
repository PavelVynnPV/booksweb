import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import BookPage from "./components/BookPage/BookPage";
import FavouriteBooks from "./components/FavouriteBooks/FavouriteBooks";
import Catalog from "./components/Catalog/Catalog";

function App() {
  const [data, setData] = useState([]);
  const [bookInfo, setBookInfo] = useState({});
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getData();
    const bookFavourites = JSON.parse(localStorage.getItem("books")) || [];
    setFavourites(bookFavourites);
  }, []);
  console.log(favourites);
  function handleOnClickAdd(book) {
    const newFavouriteListAdd = [...favourites, book];
    const saveToLocalStorage = (book) => {
      localStorage.setItem("books", JSON.stringify(book));
    };
    saveToLocalStorage(newFavouriteListAdd);
    setFavourites(newFavouriteListAdd);
  }

  function handleOnClickRemove(book) {
    const newFavouriteList = favourites.filter((favourite) => {
      return favourite.id !== book.id;
    });
    const saveToLocalStorage = (book) => {
      localStorage.setItem("books", JSON.stringify(book));
    };
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const getData = () => {
    fetch("http://localhost:3001/books", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {data.map((books) => (
            <>
              <Route
                exact
                path="/"
                element={
                  <Main
                    books={books}
                    setBookInfo={setBookInfo}
                    handleOnClickRemove={handleOnClickRemove}
                    handleOnClickAdd={handleOnClickAdd}
                    favourites={favourites}
                  />
                }
              />
              <Route
                exact
                path="/bookpage"
                element={
                  <BookPage
                    book={bookInfo}
                    handleOnClickRemove={handleOnClickRemove}
                    handleOnClickAdd={handleOnClickAdd}
                    favourites={favourites}
                  />
                }
              />
              <Route
                exact
                path="/catalog"
                element={
                  <Catalog
                    books={books}
                    setBookInfo={setBookInfo}
                    handleOnClickRemove={handleOnClickRemove}
                    handleOnClickAdd={handleOnClickAdd}
                    favourites={favourites}
                  />
                }
              />
              <Route
                exact
                path="/favouritebooks"
                element={
                  <FavouriteBooks
                    favourites={favourites}
                    handleOnClickRemove={handleOnClickRemove}
                  />
                }
              />
            </>
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
