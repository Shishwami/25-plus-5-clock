function Control({ controlName, defaultLength }) {
    return (
        <div className={controlName}>
            <div>
                <p id={controlName + "-label"}>{controlName.toUpperCase()} Length</p>
            </div>
            <div>
                <button id={controlName + "-decrement"}></button>
                <p id={controlName + "-length"}>{defaultLength}</p>
                <button id={controlName + "-increment"}></button>
            </div>
        </div>
    );
}

export default Control;