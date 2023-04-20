import React, {useState, useEffect} from "react";
import styles from './Calculator.module.scss';
import prices from './prices';
import textAbout from "./textAbout";
import foto1 from "../../Images/Slider/foto.jpg"
import foto2 from "../../Images/Slider/FotoAfter.jpg"
import BeforeAfterSlider from "react-before-after-slider-component";
import 'react-before-after-slider-component/dist/build.css';

function Calculator() {
    const [style, setStyle] = useState("classicArt");
    const [size, setSize] = useState("40/50");
    const [quantity, setQuantity] = useState(1);
    const [cost, setCost] = useState(0);
    const [text, setText] = useState('')
    const FIRST_IMAGE = {
        imageUrl: `${foto1}`
    };
    const SECOND_IMAGE = {
        imageUrl: `${foto2}`
    };

    useEffect(() => {
        switch (style) {
            case 'classicArt':
                setText(textAbout.classicArt)
                break;
            case 'fotoPrint':
                setText(textAbout.fotoPrint)
                break;
            case 'realisticArt':
                setText(textAbout.realisticArt)
                break;
            case 'artClassicPro':
                setText(textAbout.artClassicPro)
                break;
            case 'oilLight':
                setText(textAbout.OilLigth)
                break;
            case 'oilPro':
                setText(textAbout.OilPro)
                break;

        }
        let newCost = prices[style].sizes[size].cost;
        if (style === 'fotoPrint') {

        } else {
            newCost += quantity > 1 ? (quantity - 1) * 1000 : 0;
        }
        setCost(newCost);
    }, [style, size, quantity, text]);

    const handleStyleChange = (event) => {
        const newStyle = event.target.value;
        setStyle(newStyle);

        // Проверяем, есть ли текущий размер в новом стиле
        if (!prices[newStyle].sizes[size]) {
            // Если нет, то меняем размер на первый доступный размер в новом стиле
            setSize(Object.keys(prices[newStyle].sizes)[0]);
        }
    };


    const handleSizeChange = (event) => {
        const selectedSize = event.target.value;
        if (prices[style].sizes[selectedSize]) {
            setSize(selectedSize);
        } else {
            console.log("Invalid size selected.");
        }
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <section className={styles.container}>
            <div className={styles.before}>
                <div className={styles.wrapper}>
                    <div className={styles.slider__wrapper}>
                        <BeforeAfterSlider
                            className={styles.BeforeAfterSlider}
                            firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE}/>
                    </div>


                    <form className={styles.form}>
                        <h2 className={styles.form__title}>Заказать портрет</h2>
                        <div className={styles.form__wrapper}>
                            <div className={styles.form__container}>
                                <label className={styles.form__label} htmlFor="style-select">Стиль:</label>
                                <select
                                    className={styles.form__select}
                                    id="style-select"
                                    value={style}
                                    onChange={handleStyleChange}
                                >
                                    {Object.keys(prices).map((key) => (
                                        <option value={key} key={key}>{prices[key].label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.form__wrapper}>
                                <div className={styles.form__container}>
                                    <label className={styles.form__label} htmlFor="size-select">Размер картины:</label>
                                    <select
                                        className={styles.form__select}
                                        id="size-select"
                                        value={size}
                                        onChange={handleSizeChange}
                                    >
                                        {Object.keys(prices[style].sizes).map((sizeKey) => (
                                            <option value={sizeKey}
                                                    key={sizeKey}>{prices[style].sizes[sizeKey].label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.form__wrapper_column}>
                            <label className={styles.form__label} htmlFor="quantity-slider">Количество человек:</label>
                            <div className={styles.form__wrapper}>
                                <input
                                    className={styles.form__slider}
                                    type="range"
                                    id="quantity-slider"
                                    min="1"
                                    max="10"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                />
                                <span className={styles.form__label}>{quantity}</span>
                            </div>
                        </div>
                        <p className={styles.form__text}>{text}</p>
                        <div className={styles.form__wrapper}>
                            <p className={styles.form__price}>Итого: {cost} руб.</p>
                            <button className={styles.form__button}>Заказать</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default Calculator;
