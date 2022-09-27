import React, {useState} from 'react';
import uuid from 'react-uuid';
import { FaEdit, FaTrash} from "react-icons/fa"


const GroceryList = ({title}) =>{
    const [item, setItem] = useState({name:"", price:0, id:"1"})
    const [allItems, setAllItems] = useState([]);
    const [editMode, setEditMode] = useState(false)

    // on submit will call this to try and add a new item
    const newItem = (e) =>{
        e.preventDefault();
        if(Object.values(item).every((v) => v!== null && v!=="")){

            setAllItems([...allItems, {...item, id:uuid()}]);
        }
        setItem({name:"", price:0, id:"1"})
        
    }

    // whenever the input changes in the form, the onChange property will call this to display it properly



    // on submit will call this to try and add a new item
    const updateItem = (e) =>{
        e.preventDefault();
        if(Object.values(item).every((v) => v!== null && v!=="")){


            for(let i =0; i<allItems.length; i++){
                if(allItems[i].id ===item.id){
                    allItems[i] = {...item}
                }
            }
            //setAllItems([...allItems, {...item, id:uuid()}]);
        }
        setItem({name:"", price:0, id:"1"})
        setEditMode(!editMode);
        
    }

    //calculates total sum cost iterating through Items list (useState var) and totaling all prices
    const totalCost = () =>{
        let initialVal = 0;
        
        const totalCost = allItems.reduce((previousValue, currentValue) => {
            console.log(previousValue + parseInt(currentValue.price))
            return previousValue + parseInt(currentValue.price)}, initialVal);
        console.log(totalCost);
        return totalCost;
        
    }

   
    const editGroceryItem =(id)=>{
        // to update item use state, then change edit mode
        
        const itemToEdit  = allItems.filter((singleItem)=>singleItem.id === id)[0];
        setItem(itemToEdit);
        //console.log(itemToEdit)

        setEditMode(!editMode);
    }


    // remove item, using itd, iterate filter by id, don't include it
    const removeGroceryItem = (id) =>{
        const filteredList = allItems.filter((groceryItem)=>groceryItem.id!==id);
        setAllItems(filteredList);
    }

    // clears useState all items var to clear all items, sets it back to []
    const clearItems = () =>{
    setAllItems([]);
    }


    //on change for both inputs

    const onChangeInput =(e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setItem({...item, [name]:value});
    }

    //  {(editMode) ? <form onSubmit={editItem}> :<form onSubmit={newItem}>}
    return(
        <div className='grocery-container'>
            <p className='grocery-title'>{title}</p>
            
          
            <form onSubmit = {(editMode) ? updateItem : newItem}>
                <div className='div-in-first-form'>

                    <input
                    
                    className='grocery-name-input'
                    placeholder='Pudding'
                    type='text'
                    name='name'
                    onChange={onChangeInput}
                    value = {item.name}
                    />
                    <input
                    className='grocery-price-input'
                    placeholder='32.03'
                    type='number'
                    name='price'
                    value={item.price}
                    onChange={onChangeInput}/>
                    <button className='sub-button'>
                        {(editMode) ? 'Save' : 'Submit'}

                    </button>


                    
                </div>
                
                </form>

                <div className='groceryItems'>

                    {
                allItems.map((groceryItem) => {
                    
                    return (
                            <div className ="grocery-item-display" key={groceryItem.id}>
                                <div className='grocery-data-div'>
                                <p className='grocery-data-name'>{groceryItem.name} </p>
                                <p className='grocery-data-price'>{groceryItem.price}</p>
                                

                                </div> 
                                 <div className='icon-div'>
                                <FaEdit className ="edit-icon" onClick={()=>editGroceryItem(groceryItem.id)}></FaEdit>
                                <FaTrash className ="trash-icon" onClick={()=>removeGroceryItem(groceryItem.id)}></FaTrash>
            
                                </div>    
                                    
                            </div>


                    );
                    })

                    }
                    {allItems.length >0 ? 
                                                <div className ="total-div" >
                                                    
                                                    <p className='total'>Total </p>
                                                    <p className='total-cost'>{totalCost()}</p>
                                               
                
                                         
                                             
                                                    
                                            </div>
                    //<p> Total: {totalCost()} </p>
                     : ""}



                    {allItems.length >0 ? <p className='clear-text-button' onClick={clearItems}>Clear Items</p>:""}
                </div>

           
        </div>
    )
}

export default GroceryList;