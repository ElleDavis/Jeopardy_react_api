
const Category =(props)=>{
    const {questionCategory}=props
    return(
        <div>  
             <h2> Category: </h2>
             <h3>{questionCategory.question}</h3>
             <h2>Points:
             </h2>
             <h3>{questionCategory.value} </h3> 

        </div>
    )
}
export default Category