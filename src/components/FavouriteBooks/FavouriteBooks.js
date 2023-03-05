import React from "react";
import styles from "./FavouriteBooks.module.css";
import { Link } from "react-router-dom";
import mainStyles from "../Main/Main.module.css";

export default function FavouriteBooks({ favourites, handleOnClickRemove }) {
  return (
    <>
      <div className={styles.fav}>
       
        <div className={styles.container}>
        {favourites.length === 0 ? <h1 className={styles.title_error}>Ви не добавили жодної книги</h1> : 
          <ul className={mainStyles.books_box}>
            {favourites.map((book) => {
              return (
                <li>
                  <img
                    className={styles.img_book}
                    src={book.img}
                    alt="book_image"
                  />
                  <Link to="/bookpage">
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
                      onClick={() => handleOnClickRemove(book)}
                    >
                      <i class="fa-solid fa-heart"></i>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        }
        </div>
      </div>
    </>
  );
}
