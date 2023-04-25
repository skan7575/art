import React, {useState, useEffect} from "react";
import styles from './Calculator.module.scss';
import prices from './prices';
import textAbout from "./textAbout";
import fotoPrintFirst from '../../Images/Calculate/fotoPrintFirst.jpg'
import fotoPrintSecond from '../../Images/Calculate/fotoPrintSecond.jpg'
import foto1 from "../../Images/Slider/foto.jpg"
import foto2 from "../../Images/Slider/FotoAfter.jpg"
import oilPro1 from '../../Images/Calculate/OilPr1.jpg'
import oilPro2 from '../../Images/Calculate/Oilpr2.jpg'
import classicArtFirst from '../../Images/Calculate/classicArtFirst.jpg'
import classicArtSecond from '../../Images/Calculate/classicArtSecond.jpg'
import OilProFirst from '../../Images/Calculate/OilPro1.jpg'
import OilProSecond from '../../Images/Calculate/OilPro.jpg'
import OilLightFirst from '../../Images/Calculate/Oil Light 1.jpg'
import OilLightSecond from '../../Images/Calculate/Oil Light 2.jpg'
import BeforeAfterSlider from "react-before-after-slider-component";
import 'react-before-after-slider-component/dist/build.css';

function Calculator() {
    const [style, setStyle] = useState("classicArt");
    const [size, setSize] = useState("40/50");
    const [quantity, setQuantity] = useState(1);
    const [cost, setCost] = useState(0);
    const [text, setText] = useState('')
    const [firstImage, setFirstImage] = useState({imageUrl: `${foto1}`})
    const [secondImage, setSecondImage] = useState({imageUrl: `${foto2}`})


    useEffect(() => {
        switch (style) {
            case 'classicArt':
                setFirstImage({imageUrl: `${classicArtSecond}`})
                setSecondImage({imageUrl: `${classicArtFirst}`})
                setText(textAbout.classicArt)
                break;
            case 'fotoPrint':
                setFirstImage({imageUrl: `${fotoPrintSecond}`})
                setSecondImage({imageUrl: `${fotoPrintFirst}`})
                setText(textAbout.fotoPrint)
                break;
            case 'realisticArt':
                setFirstImage({imageUrl: `${OilProFirst}`})
                setSecondImage({imageUrl: `${OilProSecond}`})
                setText(textAbout.realisticArt)
                break;
            case 'artClassicPro':
                setFirstImage({imageUrl: `${foto1}`})
                setSecondImage({imageUrl: `${foto2}`})
                setText(textAbout.artClassicPro)
                break;
            case 'oilLight':
                setFirstImage({imageUrl: `${OilLightSecond}`})
                setSecondImage({imageUrl: `${OilLightFirst}`})
                setText(textAbout.OilLigth)
                break;
            case 'oilPro':
                setFirstImage({imageUrl: `${oilPro2}`})
                setSecondImage({imageUrl: `${oilPro1}`})
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
                            firstImage={firstImage} secondImage={secondImage}/>
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
