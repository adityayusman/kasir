import React from "react";

function Bill() {
    return (
        <div className="bill">
            <div className="header-bill">
                <button>
                    <i class="fa-solid fa-circle-user"></i>
                    Customer
                </button>
                <h1>New Customer</h1>
                <button>
                    <i class="fa-solid fa-list-ul"></i>Billing List
                </button>
            </div>
            <div className="main-bill">
                <div className="main-bill__header">
                    Dine in<i class="fa-solid fa-angle-down"></i>
                </div>
                <div className="main-bill__price">
                    <div className="main-bill-type">
                        <p>1</p>
                        <a href="">View Table</a>
                    </div>
                    <div className="main-bill-list">
                        <table>
                            <tr>
                                <td>Cah Taoge</td>
                                <td>x 2</td>
                                <td>Rp 15.000</td>
                            </tr>
                            <tr>
                                <td>Cah Taoge</td>
                                <td>x 2</td>
                                <td>Rp 15.000</td>
                            </tr>
                            <tr>
                                <td>Cah Taoge</td>
                                <td>x 2</td>
                                <td>Rp 15.000</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td>Sub-Total</td>
                                <td>Rp 104.000</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>Rp 104.000</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="clear-sale">
                    <button>Clear Sale</button>
                </div>
            </div>
            <div className="main-bill__footer">
                <div className="option-bill">
                    <button>Save Bill</button>
                    <button>Print Bill</button>
                </div>
                <div className="charge">
                    <button>
                        <i class="fa-solid fa-file-invoice-dollar"></i>
                        Split
                    </button>
                    <button>Charge Rp 104.000</button>
                </div>
            </div>
        </div>
    );
}

export default Bill;
