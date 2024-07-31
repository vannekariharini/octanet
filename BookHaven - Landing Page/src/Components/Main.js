import React from "react";

const Main = () => {
    return(
        <div className="main">
            <div className="col col1">
                <h2>Your Books</h2>
                <p>Select the book you wanted to read and dive into a new world.<br /></p>
                <button type="button">More</button>
            </div>
            <div className="col">
                <div className="card card1"></div>
                <div className="card card2"></div>
                <div className="card card3"></div>
                <div className="card card4"></div>
                <div className="card card5"></div>
                <div className="card card6"></div>
            </div>
        </div>
    );
}
export default Main;