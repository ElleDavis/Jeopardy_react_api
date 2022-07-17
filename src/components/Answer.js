import Button from 'react-bootstrap/Button';

const Answer =(props)=>{
    const {questionAnswer}=props
    return(
        <div> 
            <h2> Answer:</h2>
            <h3>{questionAnswer.answer}</h3>
            <Button variant="primary" size="lg">click to Reveal Question</Button>{''}
            </div>
    )
}
export default Answer