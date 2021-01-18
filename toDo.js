let input = prompt("what would you like to do?");

// ARRAY for input

const toDo = ["Collect a bag", "Clean"];





// Loop 

while(input !== "quit" && input !== "q"){
    if(input === "list"){
        console.log("************************")
        for(let i = 1; i < toDo.length; i++){
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("************************")
    } else if (input == "new"){
        const newToDo = prompt("Okay, what is the new to do?");
        toDo.push(newToDo);
        console.log(`${newToDo} added to the list!`);
    } else if(input === "delete"){
        const index = parseInt(prompt("Ok, enter a index to delete"));
        if(!Number.isNaN(index))
        const deleted = toDo.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
    } else{
        console.log("Unknown index")
    }




    input = prompt("what would you like to do?")
}

console.log("ok")