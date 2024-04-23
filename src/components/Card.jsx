import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    let priceRef = useRef();
    let dispatch = useDispatchCart();
    let data = useCart();
    let options = props.options
    let priceOption = Object.keys(options);

    const [size, setSize] = useState("")
    const [qty, setQty] = useState(1)

    const handleAddToCart = async () => {
        if ((!localStorage.getItem('authToken'))) {
            enqueueSnackbar("Your are not Logged in", { variant: "error" })
            navigate('/login')
        }
        else {
            enqueueSnackbar(`${props.foodItem.name} Added to Cart`, { variant: "success" })
            let food = []
            for (const item of data) {
                if (item.id === props.foodItem._id) {
                    food = item;

                    break;
                }
            }
            console.log(food)
            console.log(new Date())
            if (food != []) {
                if (food.size === size) {
                    await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                    return
                }
                else if (food.size !== size) {
                    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })
                    console.log("Size different so simply ADD one more to the list")
                    return
                }
                return
            }
            await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
        }
    }

    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <>
            <div>
                <div className="card mt-3  " style={{ width: "18rem", maxHeight: "430px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="Food" style={{ height: "180px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text">make up the bulk of the card's content.</p>
                        <div className="container w-100">
                            <select className="m-2 h-100  bg-secondary rounded" onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100  bg-secondary rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {
                                    priceOption.map((data) => {
                                        return (
                                            <option key={data} value={data}>{data}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className="d-inline h-100 fs-4">
                                ₹{finalPrice}/-
                            </div>
                            <hr />
                            <button className='btn btn-success justifuy-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card