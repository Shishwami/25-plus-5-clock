function Control({ controlName, defaultLength }) {
    
    const newName = controlName.charAt(0).toUpperCase() + controlName.slice(1).toLowerCase();

    return (
        <div className={controlName}>
            <div>
                <p id={controlName + "-label"}>{newName} Length</p>
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