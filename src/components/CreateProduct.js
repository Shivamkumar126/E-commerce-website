import { useState } from "react";

export function CreateProduct(props) {
    console.log(props);

    let [dataToAdd, setDataToAdd] = useState({

        name: "",
        rating: "",
        price: "",
        imageSrc: "",
        description: "",
    });


   
    let handleNameChange = (e) => {
        setDataToAdd({ ...dataToAdd, name: e.target.value })
    }
    let handleDescriptionChange = (e) => {
        setDataToAdd({ ...dataToAdd, description: e.target.value })
    }
    let handleRatingChange = (e) => {
        setDataToAdd({ ...dataToAdd, rating: e.target.value })
    }
    let handlePriceChange = (e) => {
        setDataToAdd({ ...dataToAdd, price: e.target.value })
    }
    let handleImageChange = (e) => {
        setDataToAdd({ ...dataToAdd, imageSrc: e.target.value })
    }

    return (
        <>

            <div className="create_page_body" >
                <div className="card-body">

                    <input className="card-title create_page_item "
                        placeholder="Name"
                        onChange={(e) => handleNameChange(e)}
                    />
                    <input className="card-title create_page_item"
                        placeholder="image url"
                        onChange={(e) => handleImageChange(e)} />
                    <textarea className="card-text create_page_item"
                        placeholder="Description"
                        onChange={(e) => handleDescriptionChange(e)}
                    >

                    </textarea>
                </div>
                <ul className="list-group list-group-flush">
                    <input className="card-title create_page_item"
                        placeholder="price"
                        onChange={(e)=>handlePriceChange(e)}
                    />
                    <input className="card-title create_page_item"
                        placeholder="rating"
                        onChange={(e)=>handleRatingChange(e)}
                    />
                </ul>
                <div className="card-body">
                    <button onClick={() => props.postData(dataToAdd)} className=" create_page_item create_btn ">Add</button>
                </div>
            </div>
        </>
    );

}