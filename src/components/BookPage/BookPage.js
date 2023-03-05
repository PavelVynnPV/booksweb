import React from "react";
import styles from "./BookPage.module.css";

export default function BookPage({
  book,
  favourites,
  handleOnClickAdd,
  handleOnClickRemove,
}) {
  console.log(book)
  const isFavourite = Boolean(
    favourites.find((favouriteBook) => favouriteBook.id === book.id)
  );
  return (
    <>
      <section className={styles.bookpage}>
        <div className={styles.content}>
          <div className={styles.bookpage__top_box}>
            <img src={book.img} alt="book_photo" />
            <div>
              <h1 className={styles.bookpage__top_box_title}>{book.year}</h1>
              <p className={styles.bookpage__top_box_author}>{book.author}</p>
              <a className={styles.bookpage__top_box_btn} href="/">
                Спробувати підписку
              </a>
              <ul className={styles.bookpage__top_box_info_list}>
                <li>
                  <span>Жанр:</span>
                  {book.genre}
                </li>
                <li>
                  <span>Мова:</span>
                  {book.language}
                </li>
                <li>
                  <span>Дата написання:</span>
                  {book.year}
                </li>
                <li>
                  <span>Кількість сторінок:</span>
                  {book.pages}
                </li>
              </ul>
            </div>
            <div className={styles.bookpage__top_box_info_icons}>
              <span
                className={styles.favourite}
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
              <span className={styles.star}>
                <i class="fa-solid fa-star"></i>
                {book.star}
              </span>
              <span className={styles.leave_comment}>
                <i class="fa-regular fa-message"></i>
              </span>
            </div>
          </div>
          <div className={styles.bookpage__descr_box}>
            <p className={styles.bookpage__descr}>{book.description}</p>
            <h3 className={styles.estimate}>
              Оцінити книгу:{" "}
              <span>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
