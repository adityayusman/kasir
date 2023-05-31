import React, { useEffect } from "react";

function Filter({ setMenuActive, menuActive, setFiltered, products }) {
    useEffect(() => {
        if (menuActive === 0) {
            setFiltered(products);
            return;
        }
        const filtered = products.filter((item) => item.menu_id === menuActive);
        setFiltered(filtered);
    }, [menuActive]);
    return (
        <div>
            <div className="menu-menus">
                <div className="card" onClick={() => setMenuActive(1)}>
                    <div className="card-header">Cu</div>
                    <div className="card-footer">Cumi & Kerang</div>
                </div>
                <div className="card" onClick={() => setMenuActive(2)}>
                    <div className="card-header">Sa</div>
                    <div className="card-footer">Sayuran</div>
                </div>
                <div className="card" onClick={() => setMenuActive(3)}>
                    <div className="card-header">Ik</div>
                    <div className="card-footer">Ikan</div>
                </div>
                <div className="card" onClick={() => setMenuActive(4)}>
                    <div className="card-header">Mi</div>
                    <div className="card-footer">Minuman</div>
                </div>
                <div className="card" onClick={() => setMenuActive(5)}>
                    <div className="card-header">
                        <i class="fa-solid fa-percent"></i>
                    </div>
                    <div className="card-footer">Happy Hour</div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
