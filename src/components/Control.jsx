function Control({ controlName,defaultLength }) {
    return (
        <div className={controlName}>
            <div>
                <p id={controlName + "-label"}>{controlName.toUpperCase()} Length</p>
            </div>
            <div>
                <div id={controlName+"-decrement"}></div>
                <div id={controlName+"-length"}></div>
                <div id={controlName+"-increment"}></div>
            </div>
        </div>
    );
}

export default Control;