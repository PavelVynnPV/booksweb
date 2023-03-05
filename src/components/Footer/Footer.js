import React from 'react';
import styles from "./Footer.module.css"

export default function Footer () {
    return (
        <footer>
            <div className={styles.container}>
            <div className={styles.footer__info}>
                <a href="/booksweb" className={styles.logo}>{" "}</a>
                <p><i class="fa-solid fa-mobile-screen"></i><a className={styles.footer__link} href="tel:0994131326">+38 (044) 119 88 93</a></p>
                <p><i class="fa-solid fa-inbox"></i><span className={styles.footer__link}>pavel.vynn@gmail.com</span></p>
                <p className={styles.copyright}>Copyright 2022 ©UAknyga Всі права захищені</p>
            </div>
            <div className={styles.footer__contact}>
                <div className={styles.footer__contact_icons}>
                    <a href="https://www.facebook.com/pavel.vinnichencko"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/vinn_glasses/?hl=ru"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://t.me/pavel_vynn"><i class="fa-brands fa-telegram"></i></a>
                    <a href="/"><i class="fa-brands fa-twitter"></i></a>
                    <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <span className={styles.img_playstore}></span>
            </div>
            <div className={styles.footer__register}>
                <h1>Зворотній зв'язок</h1>
                <form>
                    <label for="name">Введіть ім`я*</label>
                    <input type="text" name='name' placeholder='Введіть ім`я' required/>
                    <label for="email">Ваш телефон/email*</label>
                    <input type="text" name='email' placeholder='Ваш телефон/email*' required/>
                    <label for="name">Ваші повідомлення*</label>
                    <textarea></textarea>
                    <input type="submit" value="Надіслати" className={styles.footer_btn}/>
                </form>
            </div>
            </div>
        </footer>
    )
}