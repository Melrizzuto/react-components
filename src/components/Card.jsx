function Card({ title, description, img }) {
    return (

        <div className="card" style={{ width: "30rem" }}>
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-warning">Leggi di più</a>
            </div>
        </div>
    );
}

export default Card;


