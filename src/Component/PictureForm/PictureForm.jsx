import React, {useState} from 'react';
import styles from './PictureForm.module.scss'
import InputMask from 'react-input-mask';
import Success from "../success/success";
function PictureForm({style}) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [city, setCity] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [comment, setComment] = useState("");
    const [isPlaner, setIsPlaner] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const message = `Хочет: ${style} \n Имя: ${name}\nНомер телефона: ${phoneNumber}\nГород доставки: ${city}\nПромокод: ${promoCode}\nКомментарий: ${comment}`;

        fetch(`https://api.telegram.org/bot6155118070:AAG43KK4BJK7D-HpzXBVpzbhPhA756H9npY/sendMessage?chat_id=647119601&text=${encodeURIComponent(message)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Ошибка отправки сообщения");
                }
                setIsPlaner(true)
            })
            .catch(error => {
                alert(`Ошибка отправки сообщения: ${error.message}`);
            });
        event.target.reset();
        setPromoCode('')
        setCity('')
        setPhoneNumber('')
        setName('')
        setComment('')
    };


    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    return (
        <>
            {isPlaner ? (<Success />) : ( <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.form__title}>Оставить заявку</h3>
                <div className={styles.form__wrapper}>
                    <div className={styles.form__container}>
                        <input
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            placeholder='Имя' className={styles.form__input} type="text"/>
                        <input
                            id="city"
                            name="city"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            required
                            placeholder='Город доставки' className={styles.form__input} type="text"/>
                    </div>
                    <div className={styles.form__container}>
                        <InputMask
                            mask="+7 (999)-999-99-99"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                        >
                            {() => (
                                <input
                                    className={styles.form__input}
                                    type="text"
                                    placeholder="+7 (___)-___-__-__"
                                    // Дополнительные атрибуты инпута, если необходимо
                                />
                            )}
                        </InputMask>
                        <input
                            id="promoCode"
                            name="promoCode"
                            value={promoCode}
                            onChange={(event) => setPromoCode(event.target.value)}
                            placeholder='Промокод' className={styles.form__input} type="text"/>
                    </div>
                    <input
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        className={`${styles.form__input} ${styles.form__input_about}`} placeholder='Комментарий не обязательно ' type="text"/>
                    <button className={styles.form__button} type='submit'>Отправить</button>
                </div>
            </form>)}

        </>
    );
}

export default PictureForm;