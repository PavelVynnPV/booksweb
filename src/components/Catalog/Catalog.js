import React from "react";
import styles from "./Catalog.module.css";
import { Link } from "react-router-dom";
import mainStyles from "../Main/Main.module.css"


export default function Catalog({
  books,
  setBookInfo,
  handleOnClickAdd,
  handleOnClickRemove,
  favourites,
}) {
    console.log(books.all_books)
  return (
    <>
      <div className={styles.catalog}>
        <div className={styles.container}>
          <div className={styles.catalog__books_box}>
          <ul className={mainStyles.books_box}>
              {books.all_books.map((book) => {
                const isFavourite = Boolean(
                  favourites.find(
                    (favouriteBook) => favouriteBook.id === book.id
                  )
                );
                return (
                  <li onClick={(e) => setBookInfo(book)}>
                    <img
                      className={mainStyles.img_book}
                      src={book.img}
                      alt="book_image"
                    />
                    <Link to="/booksweb/bookpage">
                      {" "}
                      <p className={mainStyles.book_title}>"{book.name}"</p>{" "}
                    </Link>
                    <div className={mainStyles.flex_book_info}>
                      <span className={mainStyles.book_author}>
                        "{book.author}"
                      </span>
                      <span className={mainStyles.book_star}>
                        <i class="fa-solid fa-star"></i>
                        {book.star}
                      </span>
                      <span
                        className={mainStyles.follow_btn}
                        onClick={() =>
                          !isFavourite
                            ? handleOnClickAdd(book)
                            : handleOnClickRemove(book)
                        }
                      >
                        {!isFavourite ? (
                            <i class="fa-regular fa-heart"></i>
                          ) : (
                            <i class="fa-solid fa-heart"></i>
                          )}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
