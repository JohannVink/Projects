

let displayValue = "";
const display = document.getElementById('display');


function updateDisplay() {
    display.textContent = displayValue || "0";
}


document.addEventListener('DOMContentLoaded', () => {
    
    const allButtons = document.querySelectorAll('.buttons button');
    
    allButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            
            
            if (value === "AC") {
                
                displayValue = "";
            } 
            else if (value === "DE") {
                
                displayValue = displayValue.slice(0, -1);
            }
            else if (value === "=") {
                
                try {
                    displayValue = eval(displayValue).toString();
                } catch (error) {
                    displayValue = "Error";
                }
            }
            else {
                
                displayValue += value;
            }
            
            
            updateDisplay();
        });
    });
    
    updateDisplay();
});