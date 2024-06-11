import styles from './TrustedBy.module.css'
import partner1 from '../../../public/partner1.png'
import partner2 from '../../../public/partner2.png'
import partner3 from '../../../public/partner3.png'
import partner4 from '../../../public/partner4.png'
import partner5 from '../../../public/partner5.png'
import partner6 from '../../../public/partner6.png'
import partner7 from '../../../public/partner7.png'
import partner8 from '../../../public/partner8.png'
import partner9 from '../../../public/partner9.png'
import Image from 'next/image'
import React from "react";
// import "./autoplaycarousel.scss";
// import { cardDetails } from "./carousel-config";
// import CarouselItem from "./CarouselItem";

const TrustedBy = () => {

    const cardDetails = {
        0: {
            imgUrl: partner1
        },
        1: {
            imgUrl: partner2
        },
        2: {
            imgUrl: partner3
        },
        3: {
            imgUrl: partner4
        },
        4: {
            imgUrl: partner5
        },
        5: {
            imgUrl: partner6
        },
        6: {
            imgUrl: partner7
        },
        7: {
            imgUrl: partner8
        },
        8: {
            imgUrl: partner9
        },
        


    }

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                <div className={styles.carouselCard}>
                    <Image src={partner1} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner2} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner3} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner4} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner5} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner6} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner7} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner8} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner9} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner1} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner2} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner3} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner4} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner5} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner6} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner7} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner8} alt='logo' style={{ width: "100px" }} />
                </div>
                <div className={styles.carouselCard}>
                    <Image src={partner9} alt='logo' style={{ width: "100px" }} />
                </div>
            </div>
        </div>
    )
};

export default TrustedBy
