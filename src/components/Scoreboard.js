
const Scoreboard =()=>{
    return(
        <div>
            <h2>Score: </h2>
            <form>
                <label htmlFor="Decrease"></label>
                <button type="Decrease" id="Decrease" value="Decrease" > </button>

                <label htmlFor="Increase"></label>
                <button type="Increase" id="Increase" value="Increase" > </button>

                <label htmlFor="Reset"></label>
                <button type="" id="Reset" value="Reset" onChange=""> </button>
            </form>
        </div>
    )
}
export default Scoreboard