import Styles from './Card.module.css';

const bannerImage = document.querySelector("#card_banner_img");
console.log(bannerImage)
bannerImage?.addEventListener('contextmenu', (event) => {
    event.preventDefault();
})

interface properties {
    banner: string;
    category: string;
    published: string;
    title: string;
    introduction: string;
    autor: string;
    autor_photo: string;
}

export default function Card(props: properties) {
    return (
        <div className={Styles.container}>
            <article className={Styles.card}>

                <div className={Styles.card_banner}>
                    <img id='card_banner_img' className={Styles.card_banner_img} src={props.banner} alt="" />
                </div>

                <div className={Styles.card_content}>

                    <div className={Styles.card_content_header}>
                        <span className={Styles.card_header_category}>{props.category}</span>
                        <span className={Styles.card_header_publi}>{props.published}</span>
                    </div>

                    <div className={Styles.card_content_main}>
                        <a href="#">
                            <h2 className={Styles.card_main_header}>{props.title}</h2>
                        </a>
                        <p className={Styles.card_main_intro}>{props.introduction}</p>
                    </div>

                    <div className={Styles.card_content_footer}>
                        <img className={Styles.card_footer_avatar} src={props.autor_photo} alt="autor" />
                        <span className={Styles.card_footer_autor}>{props.autor}</span>
                    </div>
                </div>
            </article>
        </div>
    )
}