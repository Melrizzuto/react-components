import styles from './Card.module.css';

function Card({ title, description, img }) {
    return (
        <div className={`card m-1 ${styles.card}`}>
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className={`${styles.cardTitle}`}>{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className={`btn ${styles.cardButton}`}>Leggi di più</a>
            </div>
        </div>
    );
}

export default Card;


