
export function Cart(props) {

   

    return (
        <>

            <div className=" product_container row" >
                <img src={props.cartItem.imageSrc} className="product_img col-6" alt="..." />
                <div className="product_body col-6">
                    <h5 className="product_body_title">{props.cartItem.name}</h5>
                    <p className="description">{props.cartItem.description}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">₹ {props.cartItem.price}</li>
                        <li className="list-group-item">Rating : {props.cartItem.rating}</li>
                    </ul>
                </div>

                <div className="card-body ">
                    <button onClick={() => props.minusBtn(props.cartItem.id)}  className="card-link">-</button>
                    <span> {props.cartItem.noOfItem}</span>
                    <button onClick={() => props.plusBtn(props.cartItem.id)}  className="card-link">+</button>
                    <button onClick={() => props.handleDelete(props.cartItem.id)} className="card-link">Delete</button>
                </div>
            </div>

        </>
    );

}