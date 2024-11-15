import React,{useState} from 'react'
function Counter(){

    const [foods,setFoods] = useState(["Apple","Banana","Coconut"])

    function handleAddFood(){
        const newFoods = document.getElementById('foodinput').value;
        document.getElementById('foodinput').value = "";

        setFoods(f=>[...f,newFoods])
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=> i!==index))
    }

    return(<div>
                <h1>List of Foods</h1>
                <ul>
                    {foods.map((food,index)=>
                    <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
                </ul>
                <input type="text" id='foodinput' placeholder='Enter a Food' />
                <button onClick={handleAddFood}>Add Food</button>
            </div>
    );
}
export default Counter