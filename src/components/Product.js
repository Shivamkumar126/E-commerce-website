import "../App.css";

export function Product(props) {
    return (
        <>
            {/* <div className="  card" style={{ width: '18rem' }}>
                <img src={props.product.imageSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.product.name}</h5>
                    <p className="card-text">{props.product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.product.price}</li>
                    <li className="list-group-item">{props.product.rating}</li>
                </ul>
                <div className="card-body">
                    <button onClick={() => props.handleAddToCart(props.product.id)} className="card-link">Add to cart</button>

                    <button onClick={() => props.handleEdit(props.product.id)} className="card-link">Edit</button>
                    <button onClick={() => props.deleteBtn(props.product.id)} className="card-link">Delete</button>
                </div>
            </div> */}

            <div className=" product_container row" >
                <img src={props.product.imageSrc} className="product_img col-6" alt="..." />
                <div className="product_body col-6">
                    <h5 className="product_body_title">{props.product.name}</h5>
                    <p className="description">{props.product.description}</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">₹ {props.product.price}</li>
                    <li className="list-group-item">Rating : {props.product.rating}</li>
                </ul>
                </div>

                <div className="card-body ">
                    <button onClick={() => props.handleAddToCart(props.product.id)} className="card-link col-4">Add to cart</button>

                    <button onClick={() => props.handleEdit(props.product.id)} className="card-link col-4">Edit</button>

                    <button onClick={() => props.deleteBtn(props.product.id)} className="card-link col-4">Delete</button>
                </div>
            </div>
        </>
    );

}