import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function Soal2() {
    // State of Products
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(() => {
        if (fetchStatus) {
            getProducts();
            setFetchStatus(false);
        }
    }, [fetchStatus, setFetchStatus]);

    // Get Products
    const getProducts = async () => {
        await axios.get("/api/get_all_product").then(({ data }) => {
            // console.log(data);
            setProducts(data.products);
        });
    };

    // DeleteProduct
    const deleteProduct = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((res) => {
            if (res.isConfirmed) {
                axios
                    .get("/api/delete_product/" + id)
                    .then(() => {
                        Swal.fire(
                            "Deleted!",
                            "Product successfully deleted",
                            "success"
                        );
                        setFetchStatus(true);
                        navigate("/soal-2");
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            }
        });
    };
    return (
        <div className="table-wrapper">
            <button className="btn-primary">
                <Link to="/create">Add Product</Link>
            </button>
            <div className="container">
                <table id="products">
                    <thead>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Menu</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{product.name_product}</td>
                                    <td>{product.menu_id}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>photo.jpg</td>
                                    <td>
                                        <div className="action-btn">
                                            <button className="btn-warning">
                                                Edit
                                            </button>
                                            <button
                                                className="btn-danger"
                                                onClick={() =>
                                                    deleteProduct(product.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Soal2;
