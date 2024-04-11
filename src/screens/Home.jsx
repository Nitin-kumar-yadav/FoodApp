import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import Card from "../components/Card";

const Home = () => {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch('http://localhost:8000/api/foodData', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    response = await response.json();
    // console.log(response[0], response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          {/* <Carousal /> */}
          <div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
            <div className="carousel-inner" id='carousal'>
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                  {/* <button className="btn btn-outline-success " type="submit">Search</button> */}
                </div>
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
        </div>
        <div className="container ">
          {
            foodCat != []
              ? foodCat.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                    <hr />
                    {foodItem != [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItem => {
                      return (
                        <div key={filterItem._id} className="col-12 col-md-6 col-lg-3" >

                          <Card
                            foodName={filterItem.name}
                            options={filterItem.options[0]}
                            imgSrc={filterItem.img}
                            price={filterItem.price}
                          />

                        </div>
                      )
                    }) : <div>No such data found</div>}
                  </div>
                )
              }) : <div>Hello</div>
          }

        </div>
        <div>
          <Footer />
        </div>
      </div>

    </>
  );
};

export default Home;
