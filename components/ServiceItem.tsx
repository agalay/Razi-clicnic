import React from 'react';
import styles from "../styles/Home.module.scss";

export interface IServiceItem {
    image: string,
    title: string,
    text: string,
}

export default function ServiceItem(props: IServiceItem) {
    const { image, title, text} = props
    return (
        <div className={styles.serviceItem}>
            <img src={image} />
            <h6>{title}</h6>
            <p>{text}</p>
        </div>
    );
}
