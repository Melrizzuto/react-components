function Card() {
    return (
        <main className="d-flex justify-content-center align-content-center m-3">
            <div className="card" style={{ width: "30rem" }}>
                <img src="https://via.placeholder.com/600x400" className="card-img-top" alt="Placeholder" />
                <div className="card-body">
                    <h5 className="card-title">Titolo del post</h5>
                    <p className="card-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, dolorem aliquam magni deserunt
                    </p>
                    <a href="#" className="btn btn-warning">Leggi di più</a>
                </div>
            </div>
        </main>
    );
}

export default Card;


