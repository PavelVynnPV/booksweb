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
    fetch("https://pavelvynnpv.github.io/mybookapi/books.json")
      .then((response) => response.json())
      .then((myJson) => setData(myJson.books));
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
                path="/booksweb"
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
                path="/booksweb/bookpage"
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
                path="/booksweb/catalog"
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
                path="/booksweb/favouritebooks"
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
