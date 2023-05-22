import React, { useState } from "react";
import styles from './OrderForm.module.scss'


function OrderForm() {



    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [comment, setComment] = useState("");
    const [agreed, setAgreed] = useState(true);


    const handleSubmit = (event) => {
        event.preventDefault();
        const message = `Имя: ${name}\nНомер телефона: ${phone}\nГород доставки: ${city}\nПромокод: ${promoCode}\nКомментарий: ${comment}`;

        fetch(`https://api.telegram.org/bot6155118070:AAG43KK4BJK7D-HpzXBVpzbhPhA756H9npY/sendMessage?chat_id=647119601&text=${encodeURIComponent(message)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка отправки сообщения");
                }
                alert("Сообщение успешно отправлено!");
            })
            .catch(error => {
                alert(`Ошибка отправки сообщения: ${error.message}`);
            });
        event.target.reset();
        setPromoCode("")
        setName("")
        setPhone("");
        setCity("");
        setComment("");
    };




    const handlePhoneChange = (event) => {
        const rawValue = event.target.value;
        const onlyNums = rawValue.replace(/[^0-9]/g, "");
        const formattedValue = onlyNums.length > 1 ? "+7" + onlyNums.slice(1) : onlyNums;
        setPhone(formattedValue);
    };



    return (
        <section className={styles.form}>
            <div className={styles.form__wrapper}>
                <form className={styles.form__form} onSubmit={handleSubmit}>
                    <span className={styles.form__title}>Оставить заявку</span>
                    <div className={styles.form__container}>
                        <div className={styles.form__inputs}>
                            <input
                                className={styles.form__input}
                                placeholder='Имя:'
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                            <input
                                className={styles.form__input}
                                placeholder='Номер телефона:'
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                pattern="\+7[0-9]{10}"
                                required
                            />
                            <input
                                placeholder='Город доставки:'
                                className={styles.form__input}
                                type="text"
                                id="city"
                                name="city"
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                                required
                            />
                            <input
                                placeholder='Промокод'
                                className={styles.form__input}
                                type="text"
                                id="promoCode"
                                name="promoCode"
                                value={promoCode}
                                onChange={(event) => setPromoCode(event.target.value)}
                            />
                        </div>
                            <textarea
                                className={styles.form__comment}
                                placeholder='коментраий - необязательно'
                                id="comment"
                                name="comment"
                                value={comment}
                                onChange={(event) => setComment(event.target.value)}
                            ></textarea>
                    </div>
                    <div className={styles.form__buttons}>
                        <div>
                            <input
                                className={styles.form__checkbox}
                                type="checkbox"
                                checked={agreed}
                                onChange={(event) => setAgreed(event.target.checked)}
                                required
                            />
                          <p className={styles.form__confirm}>Я согласен с условиями политики конфидициальности</p>
                        </div>
                        <button className={styles.form__button} type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default OrderForm;
