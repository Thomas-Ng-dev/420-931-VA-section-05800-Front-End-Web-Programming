const shoppingList = document.querySelector("#shoppingList") 
const addItem = document.querySelector("#addItem")
const listedItems = document.querySelector("ul")

shoppingList.addEventListener("click", onClick)
function onClick()
{
    if (addItem.style.display == 'block') 
    {
        addItem.style.display = 'none'
        addItem.value = "";
    } 
    else 
    {
        addItem.style.display = 'block';
    }
    
}

addItem.addEventListener("keypress", onEnter)

function onEnter(event)
{
    // If user presses Enter
    if(event.key === 'Enter' && addItem.value !=="" && addItem.value.trim() !=="")
    {
        // Create HTML element li
        const li = document.createElement("li")
        // Append the input value to the new li element
        li.appendChild(document.createTextNode(addItem.value));
        // Append to the ul element stored in listedItems
        listedItems.appendChild(li);

        // Create HTML element button
        const newButton = document.createElement('button');
        // Assign it the removeable class that is the same as our other li elements
        newButton.classList.add('removeable');
        // Create a variable to store the "remove" text
        const removeText = document.createTextNode("remove")
        // Append that variable to the button
        newButton.appendChild(removeText)
        // If button is clicked, delete the parent of the "button" which is the li element
        newButton.addEventListener('click', function(e)
        {
            e.currentTarget.parentNode.remove();
        });

        // Append button to li element which is appended to ul element
        li.appendChild(newButton);
        // Reset the input box to empty string
        addItem.value = ""
    }  
}

// Create array variable for removeable HTML class, this adds functionality to existing list items
const removeButtons = document.getElementsByClassName('removeable')

// Add event listeners to all existing remove buttons, not new ones
for (let i = 0; i < removeButtons.length; i++)
{
    removeButtons[i].addEventListener('click', function(e) 
    {
        // If remove is clicked, delete the parent which is the li element
        e.currentTarget.parentNode.remove();
    }, false);
}
