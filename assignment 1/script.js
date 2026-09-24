function createConverter(fromUnit, toUnit) {
    return (value) => {
        if(fromUnit === "kg" && toUnit === "lb"){
            if(Array.isArray(value)){
                return value.map((item)=>item*2.20462);
            }
            return value*2.20462;
        }
        if(fromUnit === "lb" && toUnit === "kg"){
            if(Array.isArray(value)){
                return value.map((item)=>item/2.20462);
            }
            return value/2.20462;
        }

    };
}

const weightDirection = document.getElementById("weight-direction");
const weightInput = document.getElementById("weight-input");
const weightConvert = document.getElementById("weight-convert");
const weightResult = document.getElementById("weight-result");

const handleWeightConveret = () =>{
    const direction = weightDirection.value;
    const inputValue = weightInput.value;
    const values = inputValue.split(",");

    if(values.length === 1){
        const value = Number(values[0]);

        if(direction === "kg-lb"){
            const converter = createConverter("kg", "lb");
            const convertedValue = converter(value);
            weightResult.textContent = convertedValue.toFixed(2) + " lb";
        }

        if(direction === "lb-kg"){
            const converter = createConverter("lb", "kg");
            const convertedValue = converter(value);
            weightResult.textContent = convertedValue.toFixed(2) + " kg";
        }
    } else{
        const numberValues = values.map((item) => Number(item));

        if (direction === "kg-lb"){
            const converter = createConverter("kg", "lb");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            weightResult.textContent = formattedValues.join(", ") + " lb";
        }

        if (direction === "lb-kg"){
            const converter = createConverter("lb", "kg");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            weightResult.textContent = formattedValues.join(", ") + " kg";
        }

    }

};

weightConvert.addEventListener("click", handleWeightConveret);
