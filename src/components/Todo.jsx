import React from 'react'
import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci"
import { MdOutlineAddBox } from "react-icons/md";



function Content() {


let[items,setItems]= useState([

    { id:1,label:"HTML and CSS", checked:true },
    { id:2,label:"Javascript", checked:true},
    { id:3,label:"React", checked:false} ])

   let[editing,setEditing]=useState(false)
   let[currentEleId,setCurrentEleId]=useState(null)
   let[newItem,setNewItem]=useState("")


    let handleAddSave=() =>{
       if(editing){
        let newListItems=items.map((item) =>{
            return item.id===currentEleId ? {...item,label:newItem  } : item
        })
        setItems(newListItems)
        setCurrentEleId(null)
       }
          
        
       else

        

        setItems([...items,{id:items.length+1,label:newItem,checked:false}])
        setNewItem("")
    }

   

    let handleChecked= (id) =>{
        let newListItems = items.map((item ) => 
            { return item.id===id? {...item,checked:!item.checked}:item })
        setItems(newListItems)
    }
   let handleUpdate= (id) =>{
    let listItem=items.find(item => item.id===id)
    setNewItem(listItem.label)
    setEditing(true)
    setCurrentEleId(id)
   }
   
  let handleDelete=(id) =>
  {

  let nitems=items
    .filter((item) => item.id!==id)
    .map((item,index) => {
        return{...item,id:index+1}
       
    });
  
      setItems(nitems)
  }



return<main>
    <div>
        <input type="text" id="int"value={newItem} 
        placeholder="Add New Item"
        onChange={(e)=>{setNewItem(e.target.value)}}/>
        <button onClick={handleAddSave}>
            {editing? <CiSaveDown2 color="green" />:<MdOutlineAddBox color="blue" />
}</button>
    </div>
    <ul>
        {items.map((item) =>{
           return(
              <li key={item.id} className='item'>
                <input type="checkbox" checked={item.checked}
                onChange={() => handleChecked(item.id)}/>
                <label>{item.label}</label>
                <FaRegEdit id="edit" role="button" tabIndex={0}  onClick={() => handleUpdate(item.id)}/>
                <MdDeleteForever id="del" role="button" tabIndex={0} onClick={() =>handleDelete(item.id)} />
              </li>
            )
        })}
        
    </ul>
</main>


}
export default Content





























 /*  let Button=styled.button
    `background-color:yellow;
    color:black;
    `
    let NewButton=styled(Button)
    `box-shadow:10px 10px 10px black;
    background-color:red;
    `*/



    /*let headstyle={
        backgroundColor:"Green",
        color:"white",
    }
    let user1="honeyyy"
    
    function printSome(e)
    {
        let user1="babe"
        console.log(user1);


       // console.log(e.target.innerText);
    }
    function printSome1(event)
    {
        let user1="love"
        console.log(user1);

        //console.log(event.target.innerText);
    }
    function printSome2(evening)
    {
        console.log(evening)
    }*/


    
