import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



const Scoreboard =()=>{
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log()}

    return(
        <div>
            <h2>Score: </h2>
            <form>
               
                <ButtonGroup aria-label="Basic example" onSubmit={handleSubmit}>
                    <label htmlFor="Decrease"></label>
                    <Button variant="primary" name="Decrease" id="Decrease" value="" >Decrease</Button>
                    <label htmlFor="Increase"></label>
                    <Button variant="success" type="Increase" id="Increase" value="Increase" >Increase</Button>
                    <label htmlFor="Reset"></label>
                    <Button variant="danger" type="" id="Reset" value="Reset" onChange="han">Reset</Button>
                </ButtonGroup>
            </form>
        </div>
    )
}
export default Scoreboard