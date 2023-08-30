import React, {useEffect} from 'react';
import HelmetComponent from "../../Component/Helmet/HelmetReact";
import Banner from "../../Component/Banner/Banner";
import miha from '../../Images/miha.png'
import OrderForm from "../../Component/blocks/Rewiev/OrderForm";
import SizePicture from "../../Component/SizePicture/SizePicture";
import List from "../../Component/List/List";
import TableImage from "../../Component/TableImage/TableImage";
import Faq2 from "../../Component/blocks/Faq/Faq2";

function Partner(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main>
            <>
                <HelmetComponent
                    title='ART MEMORY - сотрудничество'
                    description='оставь время на бизнес и творчество.'
                />
                <Banner h1={'Привет, меня зовут Михаил и я основатель портретной студии «Art Memory».'} img={miha}
                        text={'Уже больше 7 лет мы, с моей командой, занимаемся изготовлением картин на холсте.'}/>
                <SizePicture title={'оставь время на бизнес и творчество'}
                             text={'Я на собственном опыте знаю, что это такое, когда типография или мастерская, с которой ты работаешь, срывает сроки! Откладывает выполнение твоего заказа из-за других, «более важных» заказчиков! Применяет некачественные материалы и халтурит!'}
                             text2={'А все потому, что у меня когда-то тоже не было своего производства и приходилось заказывать у других компаний.Но к счастью, уже давно все изменилось. И теперь я сам помогаю ребятам, которые ищут качественный продукт!'}
                             text3={'Мы, в отличии от многих студий, умеем хорошо, качественно и быстро изготавливать картины. Пусть у тебя останется время на бизнес, на творчество, остальное – передай нам на аутсорсинг.'} picture={'https://artmemory-rus.ru/Files/partner.jpg'}/>
                <List />
                <TableImage />
                <Faq2 />
                <OrderForm/>
            </>
        </main>
    );
}

export default Partner;