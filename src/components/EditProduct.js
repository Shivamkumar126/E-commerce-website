import { useState } from 'react';

export function EditProduct(props) {

    const [name, setName] = useState(props.product.name);
    const [rating, setRating] = useState(props.product.rating);
    const [description, setDescription] = useState(props.product.description);

    let handleNameChange = (e) => {
        setName(e.target.value);

    }

    return (
        <>
            <div className="product_container row" >
                <img src={props.product.imageSrc} className="product_img col-6" alt='....' />
                <div className="card-body col-6">
                    <input className="product_body_title color_fade"
                        placeholder={props.product.name}
                        value={name}
                        onChange={handleNameChange}
                    />
                    <textarea className="description color_fade"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}>

                    </textarea>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">₹ {props.product.price}</li>
                    <input className="list-group-item color_fade"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)} />
                </ul>
                </div>
                <div className="card-body">
                    <button onClick={() => props.handleSave(props.product.id, name, description, rating)} className="card-link col-4">Save</button>
                    <button onClick={() => props.handleCancel()} className="card-link col-4">Cancel</button>
                </div>
            </div>
        </>
    )
}