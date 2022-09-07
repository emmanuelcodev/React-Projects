import React, {useState} from "react";
import data from '../../data/data'
import '../../css/loremForm/LoremForm.css'

const LoremForm = () =>{
    const [numberParagraphs, setNumberParagraphs] = useState(0);
    const [pargraphs, setParagraphs] = useState([]);
    
    
    const addLorem = (e) =>{
       
        e.preventDefault();
        console.log(e.target.name);
        if(numberParagraphs >=1 && numberParagraphs <=8){
 
        setParagraphs(data.slice(0,numberParagraphs));
        }
        
       


        //

    }


    const changeNumberParagraphs = (e) => {
        console.log(e.target.name + ': ' + e.target.value);
        setNumberParagraphs(e.target.value);
        
    }


    return (
        <>

        <form className = "form-level"onSubmit={addLorem}>
            <label className = "p-num-label" htmlFor="numberRequested"> Paragraphs</label>
            <input 
                className = "p-num-input" 
                type="number" 
                id="numberRequested"
                name="numParagraphs"
                value={numberParagraphs}
                onChange={changeNumberParagraphs}></input>
            <button className = "p-num-button" >Generate</button>


        </form>

            <div className="lorem-paragraphs">
        {   
            pargraphs.map((paragraph, index)=>{
                return <p key = {index}>{paragraph}</p>
            })
        }

            </div>
        </>
    )
}



export default LoremForm;


