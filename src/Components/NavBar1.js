import React from "react";
 
function NavBar1() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid align-items-center">
                    <a className="navbar-brand fs-2" href="/">
                        Новини <img src="/new.png" className="py-2" style={{ width: '40px' }}></img>
                    </a>
                </div>
            </nav>
        </div>
    );
}
 
export default NavBar1;