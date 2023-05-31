import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// SweetAlert2
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});

function Create() {
    const [name, setName] = useState("");
    const [menu, setMenu] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [photo, setPhoto] = useState(null);

    const navigate = useNavigate();

    const changeHandler = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        let limit = 1024 * 1024 * 2;

        if (file["size"] > limit) {
            Swal.fire({
                type: "error",
                title: "Oops...",
                text: "Something went wrong",
                footer: "Why do I have this issue ?",
            });
        }

        reader.onloadend = (file) => {
            setPhoto(reader.result);
        };
        reader.readAsDataURL(file);
    };

    // Create Product
    const createProduct = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append("name", name);
        formData.append("menu", menu);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("photo", photo);

        await axios
            .post("/api/add_product/", formData)
            .then(({ data }) => {
                alert("Add Product Success");
                navigate("/soal-2");
            })
            .catch((error) => {
                alert(error.message);
                console.log(error.message);
            });
    };

    return (
        <div className="create-product">
            <h1>Create Product</h1>
            <div className="input">
                <input
                    type="text"
                    placeholder="Name Product"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </div>
            <div className="input">
                <input
                    type="text"
                    placeholder="Menu"
                    value={menu}
                    onChange={(event) => {
                        setMenu(event.target.value);
                    }}
                />
            </div>
            <div className="input">
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                />
            </div>
            <div className="input">
                <input
                    type="text"
                    placeholder="Stock"
                    value={stock}
                    onChange={(event) => {
                        setStock(event.target.value);
                    }}
                />
            </div>
            <div className="input">
                <form>
                    <input type="file" onChange={changeHandler} />
                </form>
            </div>
            <div className="submit">
                <button onClick={(event) => createProduct(event)}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Create;
