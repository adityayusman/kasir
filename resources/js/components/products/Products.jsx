import axios from "axios";
import { set } from "lodash";
import React, { useEffect, useState } from "react";
import Filter from "../Filter/Filter";

const Index = () => {
    // State of Products
    const [products, setProducts] = useState([]);

    const [filtered, setFiltered] = useState([]);

    const [menuActive, setMenuActive] = useState(0);

    useEffect(() => {
        getProducts();
    }, []);

    // Get Products
    const getProducts = async () => {
        await axios.get("/api/get_all_product").then(({ data }) => {
            // console.log(data);s
            setProducts(data.products);
            setFiltered(data.products);
        });
    };

    // console.log(products);
    return (
        <div className="menu-list">
            <div className="menu-item">
                {filtered.map((item) => (
                    <div className="card">
                        <div className="card-header">
                            <img
                                src="https://img-global.cpcdn.com/recipes/8e9c9d76a37dfb14/400x400cq70/photo.jpg"
                                alt=""
                            />
                        </div>
                        <div className="card-footer">{item.name_product}</div>
                    </div>
                ))}
            </div>
            <Filter
                products={products}
                setFiltered={setFiltered}
                menuActive={menuActive}
                setMenuActive={setMenuActive}
            />
        </div>
    );
};

export default Index;
