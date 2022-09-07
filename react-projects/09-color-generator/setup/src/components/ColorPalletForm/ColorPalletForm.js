import React, {useState} from 'react';
import '../../css/ColorPalletForm/ColorPalletForm.css'
import rgbToHex from '../../utils';

import Values from 'values.js';

const ColorPalletForm = () => {
    const [currentColor, setCurrentColor] = useState('');
    const [colorBlends, setColorBlends]= useState(new Values("#f15025").all(10).map((color)=> color.hexString()));
    const [copyMessageId, setCopyMessageId] = useState("");
    const [validHex, setValidHex] = useState(["#", "0"," 1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"]);
    
    const getValidHex = () =>{
        const hexColors = ["#", "0"," 1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"];
        return hexColors;
    }

    const copyClipBoard = (id, color)=>{
            navigator.clipboard.writeText(color);
            setCopyMessageId(id);
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

      
      
    const generateColors = (e) => {

        
        e.preventDefault();
        console.log('GENERATE Colors');
        console.log(e.target.name);

        generateColorPallet(currentColor);

    } 

     
    const onChangeColorInput = (e) =>{
        
        const updatedLetter = e.target.value[e.target.value.length-1];
        console.log('updated letter is: ' + updatedLetter);
        if(e.target.value.length ===1){
            if(e.target.value !== "#"){
                    return ;
            }
        }else{
            if(e.target.value.includes("#",1)){
                return ;
            }
        }

        if(validHex.includes(updatedLetter)){
            
            if(e.target.value.length <=7){
        
                setCurrentColor(e.target.value);            
                }
                else{
                    setCurrentColor(e.target.value.slice(0,7));
                }
            }else{
                
                console.log('not right letter');
           setCurrentColor(e.target.value.slice(0,e.target.value.length-1));
        }


    }

    
    const hexToRGB = (hexStr) =>{
        if(hexStr.length != 6){
            throw "Only six-digit hex colors are allowed.";
        }
        // turns it to base 10 into this format
        var aRgbHex = hexStr.match(/.{1,2}/g); 
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return aRgb;//[21, 2, 190]

    }

 
    const generateColorPallet = (hexColor) =>{

        const rgbColorArray = hexToRGB(hexColor.slice(1,7));
        let colorPallet = [];

       

        const color = new Values(hexColor);
        console.log('color values');
        console.log(typeof color.all(10));
        //colorPallet  = color.all(10);
        const cpallet2 = color.all(10);

        
        console.log(cpallet2);
        for(let i = 0; i < cpallet2.length; i++){
            console.log(cpallet2[i].hexString());
            colorPallet.push(cpallet2[i].hexString());
        }
        

        setColorBlends(colorPallet);
        //return colorPallet;

    }



    return(
        <div className='color-page'>
            <form className='color-form' onSubmit={generateColors}>
                <label className='color-label'>Color Generator</label>
                <input
                className='color-input'
                placeholder="#f15025"
                value={currentColor} 
               
                onChange={onChangeColorInput}/>
                
                <button  className='color-button'>Submit</button>
            </form>

            <div className='color-pallet'>

            
                {
                    colorBlends.map((color, index)=>{
                        return(
                            <div 
                                key={index} 
                                id={"box-" + index} 
                                className="color-box"
                                onClick={()=>copyClipBoard("box-" + index, color)}
                               
                                style = {
                                    {backgroundColor:color}}>
                                        
                                    {(index < 10)? <p className="color-box-p">{color}</p>:<p className="color-box-p color-white">{color}</p>}
                                
                                <p className='copy-p'> {("box-" + index === copyMessageId)? "Copied To ClipBoard!" : ""}</p>
                            </div>

                        )
                    })
                    
                }

            </div>
        </div>
    )
}


export default ColorPalletForm;