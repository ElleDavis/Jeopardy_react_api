

const Answer =(props)=>{
    const {questionAnswer}=props
    return(
        <div> 
            <h4> Answer:</h4>
            <h3>{questionAnswer.answer}</h3>
            </div>
    )
}
export default Answer