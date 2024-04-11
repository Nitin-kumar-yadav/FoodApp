import React from 'react'

const Card = (props) => {

    const handleToCart = () => {

    }


    return (
        <>
            <div>
                <div className="card mt-3  " style={{ width: "18rem", maxHeight: "430px" }}>
                    <img src={props.imgSrc} className="card-img-top" alt="Food" style={{ height: "180px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                        <p className="card-text">make up the bulk of the card's content.</p>
                        <div className="container w-100">
                            <select className="m-2 h-100  bg-secondary rounded">
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100  bg-secondary rounded">
                                <option value={'half'} >Half</option>
                                <option value={'full'} >Full</option>
                            </select>
                            <div className="d-inline h-100 fs-4">
                                Total Price
                            </div>
                            <hr />
                            <button className='btn btn-success justifuy-center ms-2' onClick={handleToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card