import React from 'react';
import Slider from 'react-before-after-slider';
import before from '../../Images/Slider/foto.jpg'
import after from '../../Images/Slider/FotoAfter.jpg'
const BeforeAfterSlider = () => {
    const beforeImage =  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodfon.ru%2Fwallpaper%2Fkartinka-3d-dikaya-koshka.html&psig=AOvVaw2rfWWpgoq7I8MBZyChpzkI&ust=1681124464981000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDQv-rSnP4CFQAAAAAdAAAAABAJ';
    const afterImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodfon.ru%2Fwallpaper%2Fkartinka-3d-dikaya-koshka.html&psig=AOvVaw2rfWWpgoq7I8MBZyChpzkI&ust=1681124464981000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDQv-rSnP4CFQAAAAAdAAAAABAJ';

    return (
        <div>
            <Slider
                before={beforeImage}
                after={afterImage}
                width={500}
                height={100}
            />
        </div>
    );
};

export default BeforeAfterSlider;
