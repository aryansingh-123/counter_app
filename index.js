const countValue = document.querySelector('#counter');

const increment = () => {
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value 
    value = value + 1;
    //Set the Value
    countValue.innerText = value;

}
const decrement = () => {
    // Get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value 
    value = value - 1;
    //Set the Value
    countValue.innerText = value;

};
