import React from "react";

function Toggler() {

    return (
        <button className="navbar-toggler order-2"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    );
}

export default Toggler;