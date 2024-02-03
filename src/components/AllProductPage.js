import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import { EditProduct } from "./EditProduct";
import { CreateProduct } from "./CreateProduct";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";

export function AllProductPage(props) {

  let [productList, setProductList] = useState([]);
  let [sortedList, setSortedList] = useState([]);
  let [cart, setCart] = useState([]);
  let [sorting, setSorting] = useState(false);
  let [editId, setEditId] = useState(-1);
  let [adding, setAdding] = useState(false);
  let [showCart, setshowCart] = useState(false);



  const handleDelete = (id) => {
    console.log(id)
    const updatedProductList = productList.filter((product) => product.id !== id);
    setProductList(updatedProductList);
  }

  const handleEdit = (id) => {
    // setUpdating(true);
    setEditId(id);
  }

  const handleSave = (id, name, description, rating) => {
    const editingIndex = productList.findIndex((x) => x.id == id);


    const updatedProductList = [...productList];
    updatedProductList[editingIndex] = { ...updatedProductList[editingIndex], name, rating, description };

    // Update the state with the new array
    setProductList(updatedProductList);

    // Reset the editId after saving
    setEditId(-1);
  }

  const handleCancel = () => {

    setEditId(-1);
  }

  const handleSort = () => {
    // Use spread operator to create a new array and sort it based on the id property
    const sortedArray = [...productList].sort((a, b) => a.price - b.price);

    // Update state with the sorted array
    setSortedList(sortedArray);
    setSorting(true);
  };

  let handleCancelSort = () => {
    setSorting(false);
  }

  const postData = async (dataToAdd) => {
    setAdding(false);
    let url = " https://my-json-server.typicode.com/Shivamkumar126/demoAPI/products";


    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToAdd),
    });

    const data = await response.json();
    setProductList([data, ...productList]);
    
  }

  let handleAddBtn = () => {
    setAdding(true);
    setshowCart(false);
  }

  let handleHomeBtn = () => {
    setAdding(false);
    setshowCart(false);

  }

  let handleAddToCart = (id) => {
    const itemIndex = productList.findIndex((x) => x.id == id);

    let cartItem = productList[itemIndex];
    setCart([...cart, cartItem]);
    alert("Item added to cart");
  }

  let handleShowCart = () => {
    setshowCart(true);

  }

  const handleCartDelete = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }


  useEffect(() => {
    let url = " https://my-json-server.typicode.com/Shivamkumar126/demoAPI/products";

    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setProductList(data);

    }

    fetchData();

  }, [])



  return (
    <>
      <Navbar handleAddBtn={handleAddBtn} handleHomeBtn={handleHomeBtn} handleShowCart={handleShowCart} />

      {showCart ? (
        cart.map((cartItem, i) => (
          <Cart key={i} cartItem={cartItem} handleDelete={handleCartDelete}/>
        ))
      ) : (

        <>
          {adding ? (
            <CreateProduct postData={postData} />
          ) : (
            <>
              {!sorting ? (
                <button className="sort_button" onClick={handleSort}>sort by price</button>
              ) : (
                <button className="sort_button" onClick={handleCancelSort}>unsort</button>
              )}

              {sorting ? (
                sortedList.map((product, i) => {
                  if (editId === product.id) {
                    return (
                      <EditProduct
                        key={i}
                        product={product}
                        deleteBtn={handleDelete}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                      />
                    );
                  } else {
                    return (
                      <Product
                        key={i}
                        product={product}
                        deleteBtn={handleDelete}
                        handleEdit={handleEdit}
                        handleSort={handleSort}
                        handleCancelSort={handleCancelSort}
                        sorting={sorting}
                        handleAddToCart={handleAddToCart}
                      />
                    );
                  }
                })
              ) : (
                productList.map((product, i) => {
                  if (editId === product.id) {
                    return (
                      <EditProduct
                        key={i}
                        product={product}
                        deleteBtn={handleDelete}
                        handleSave={handleSave}
                        handleCancel={handleCancel}
                      />
                    );
                  } else {
                    return (
                      <Product
                        key={i}
                        product={product}
                        deleteBtn={handleDelete}
                        handleEdit={handleEdit}
                        handleAddToCart={handleAddToCart}
                      />
                    );
                  }
                })
              )}
            </>
          )}
        </>
      )}
    </>
  );



}