function Control({ controlName, defaultLength, increment, decrement }) {

    return (
        <div className={controlName + " controls"} id={controlName}>
            <div>
                <p id={controlName + "-label"}>{controlName} Length</p>
            </div>
            <div className="control-container">
                <button id={controlName + "-decrement"} onClick={decrement}><i className="fas fa-arrow-down icon"></i></button>
                <p id={controlName + "-length"}>{defaultLength}</p>
                <button id={controlName + "-increment"} onClick={increment}><i className="fas fa-arrow-up icon"></i></button>
            </div>
        </div>
    );
}

export default Control;