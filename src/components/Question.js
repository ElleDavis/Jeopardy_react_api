import Button from 'react-bootstrap/Button';


const Question =(props)=> {
    const {question}= props
    // console.log(question[0])
    return(
        <div id="questionDiv"> 
            <h2>Let's play!: </h2> 
            <div>
                {/* <h1>Question:</h1> */}
                <h3> {question.question}</h3>
                {/* <h3>{question.value} </h3>  */}
            </div>

            <label htmlFor="QuestionButton"></label>
            <Button variant="warning" type="submit" id="QuestionButton" value="" >Get a Question</Button>
        
        </div>
    )
}
export default Question