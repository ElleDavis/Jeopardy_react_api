
const Question =(props)=> {
    const {question}= props
    // console.log(question[0])
    return(
        <div id="questionDiv"> 
            <h2>Let's play!: </h2> 
            <div>
                <h1>Question:</h1>
                <h2> {question.question}</h2>
                <h3>{question.value} </h3> 
            </div>

            <label htmlFor="QuestionButton"></label>
            <button type="submit" id="QuestionButton" value="" ></button>
        
        </div>
    )
}
export default Question