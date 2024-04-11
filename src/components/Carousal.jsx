import React from 'react'

const Carousal = () => {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner" id='carousal'>
                <div className="carousel-caption" style={{ zIndex: "10" }}>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/300×300?burger" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/300×300?noodles" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/300×300?pizza" style={{ filter: "brightness(30%)" }} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousal