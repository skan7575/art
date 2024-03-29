import React, {useState} from 'react';
import styles from './StepsVideo.module.scss'
import video1 from '../../Images/Video/video1.jpg'
import video2 from '../../Images/Video/video2.jpg'
import video3 from '../../Images/Video/video3.jpg'
import video4 from '../../Images/Video/video4.jpg'

function StepsVideo(props) {
    const [skeleton, setSceleton] = useState(false)
    return (
        <section className={styles.video}>
            <div className={styles.video__textContainer}>
                <h2 className={styles.video__title}>Хотите узнать больше
                    об изготовлении картин?</h2>
                <p className={styles.video__text}>Посмотрите видео, чтобы узнать больше о производстве.
                    Каждая наша картина создается с
                    максимальным вниманием к деталям и заботой</p>
            </div>
            <div className={styles.video__wrapper}>
                <div className={styles.video__videoContainer}>
                    {skeleton ?
                        <>
                            <p>Текстурный гель</p>
                            <iframe className={styles.video__frame} src="https://www.youtube.com/embed/z-DidvLJFrI"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                            </iframe>
                        </>

                        :
                        <>
                            <p>Текстурный гель</p>
                            <div style={{backgroundImage: `url(${video2})`}}
                                 className={styles.video__frame} onClick={() => {
                                setSceleton(true)
                            }
                            }>

                            </div>
                        </>
                    }

                </div>

                <div className={styles.video__videoContainer}>
                    {skeleton ?
                        <>
                            <p>Отличие качества печати</p>
                            <iframe className={styles.video__frame} src="https://www.youtube.com/embed/iJizjL_50AA"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                            </iframe>
                        </>

                        :
                        <>
                            <p>Отличие качества печати</p>
                            <div style={{backgroundImage: `url(${video1})`}}
                                 className={styles.video__frame} onClick={() => {
                                setSceleton(true)
                            }
                            }>

                            </div>
                        </>
                    }

                </div>

                <div className={styles.video__videoContainer}>
                    {skeleton ?
                        <>
                            <p>Прорисовака деталей</p>
                            <iframe className={styles.video__frame} src="https://youtube.com/embed/luxjDxojY90?feature=share"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                            </iframe>
                        </>

                        :
                        <>
                            <p>Прорисовака деталей</p>
                            <div style={{backgroundImage: `url(${video3})`}}
                                 className={styles.video__frame} onClick={() => {
                                setSceleton(true)
                            }
                            }>

                            </div>
                        </>
                    }

                </div>

                <div className={styles.video__videoContainer}>
                    {skeleton ?
                        <>
                            <p>Печать фото на холсте</p>
                            <iframe className={styles.video__frame} src="https://www.youtube.com/embed/2lGS5bZhxMY"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>

                            </iframe>
                        </>

                        :
                        <>
                            <p>Печать фото на холсте</p>
                            <div style={{backgroundImage: `url(${video4})`}}
                                 className={styles.video__frame} onClick={() => {
                                setSceleton(true)
                            }
                            }>

                            </div>
                        </>
                    }

                </div>

            </div>


        </section>
    );
}

export default StepsVideo;