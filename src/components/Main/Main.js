import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Main.module.css";
import { Navigation } from "swiper";
import React from "react";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

export default function Main({
  books,
  setBookInfo,
  handleOnClickAdd,
  handleOnClickRemove,
  favourites,
}) {
  return (
    <main>
      <div className={styles.content}>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation]}
          loop={Infinity}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiper_slide}></SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}></SwiperSlide>
          <SwiperSlide className={styles.swiper_slide}></SwiperSlide>
        </Swiper>
        <div className={styles.subscribe_info}>
          <div className={styles.subscribe__upper_box}>
            <div className={styles.subscribe__title_box}>
              <h1>
                Преміум-підписка: перший місяць <span>безкоштовно!</span>
              </h1>
              <span>Далі 150 грн/міс.</span>
            </div>
            <div>
              <button className={styles.subscribe__btn}>Спробувати</button>
            </div>
          </div>
          <div className={styles.subscribe__under_box}>
            <div className={styles.subscribe__under_box_item}>
              <i class="fa-regular fa-star"></i>
              <h1>
                Велика колекція<span>Відомі топові книги та новинки</span>
              </h1>
            </div>
            <div className={styles.subscribe__under_box_item}>
              <i class="fa-solid fa-tv"></i>
              <h1>
                На будь-якому пристрої
                <span>Читайте на планшеті, телефоні чи ноутбуці</span>
              </h1>
            </div>
            <div className={styles.subscribe__under_box_item}>
              <i class="fa-regular fa-gem"></i>
              <h1>
                Зручний інтерфейс
                <span>
                  Функції захисту очей та можливість самостійно регулювати
                  розмір тексту
                </span>
              </h1>
            </div>
            <div className={styles.subscribe__under_box_item}>
              <i class="fa-solid fa-users"></i>
              <h1>
                5 профілів у підписці
                <span>Безлімітний доступ до бібліотеки для всієї родини</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.books}>
        <div className={styles.content}>
          <div className={styles.books_container}>
            <h1>ТОП популярних книг 2022 ></h1>
            <ul className={styles.books_box}>
              {books.popular_books.map((book) => {
                const isFavourite = Boolean(
                  favourites.find(
                    (favouriteBook) => favouriteBook.id === book.id
                  )
                );
                return (
                  <>
                    <li onClick={(e) => setBookInfo(book)}>
                      <img
                        className={styles.img_book}
                        src={book.img}
                        alt="book_image"
                      />
                      <Link to="/booksweb/bookpage">
                        {" "}
                        <p className={styles.book_title}>"{book.name}"</p>{" "}
                      </Link>
                      <div className={styles.flex_book_info}>
                        <span className={styles.book_author}>
                          "{book.author}"
                        </span>
                        <span className={styles.book_star}>
                          <i class="fa-solid fa-star"></i>
                          {book.star}
                        </span>
                        <span
                          className={styles.follow_btn}
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
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.catalog}>
        <div className={styles.catalog__dark_text}>
          <h1>Шукайте більше книг та жанрів у нашому каталозі</h1>
          <p>
            Більше 50 тисяч унікальних книг різних авторів з усіх куточків
            світу, величезна кількість жанрів: від класики до сучасних романів
          </p>
        </div>
        <Link to="/booksweb/catalog" className={styles.catalog__btn}>Перейти до каталогу</Link>
      </section>
    </main>
  );
}
