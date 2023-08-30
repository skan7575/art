import React, {useEffect} from 'react';

import Steps from "../../Component/Steps/Steps";
import OrderForm from "../../Component/blocks/Rewiev/OrderForm";
import StepsVideo from "../../Component/StepsVideo/StepsVideo";
import Banner from "../../Component/Banner/Banner";
import aboutBannerImage from "../../Images/About/Mask group.png";
import HelmetComponent from "../../Component/Helmet/HelmetReact";

function AboutUsPage(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <HelmetComponent
                title='ART MEMORY - О там как и где заказать картину на холсте'
                description='Нам кажется важным рассказать о
                        нас, о нашем пути, о нашем деле всей жизни - мастерской «Art Memory».'
            />
            <Banner h1={'Нас зовут Михаил и Ирина Черновы, и мы – волшебники'} img={aboutBannerImage}
                    text={'Нет, мы не носим круглые очки, не размахиваем волшебными палочками и не варим магические зелья. Мы просто можем останавливать время.'}/>
            <Steps/>
            <StepsVideo/>
            <OrderForm/>
        </>
    );
}

export default AboutUsPage;