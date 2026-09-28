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
        if(fromUnit === "c" && toUnit === "f"){
            if(Array.isArray(value)){
                return value.map((item)=>(item * (9 / 5)) + 32);
            }
            return (value * (9 / 5)) + 32;
        }
        if(fromUnit === "f" && toUnit === "c"){
            if(Array.isArray(value)){
                return value.map((item)=>(item - 32) * (5 / 9));
            }
            return (value - 32) * (5 / 9);
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
        };

        if(direction === "lb-kg"){
            const converter = createConverter("lb", "kg");
            const convertedValue = converter(value);
            weightResult.textContent = convertedValue.toFixed(2) + " kg";
        };
    } else{
        const numberValues = values.map((item) => Number(item));

        if (direction === "kg-lb"){
            const converter = createConverter("kg", "lb");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            weightResult.textContent = formattedValues.join(", ") + " lb";
        };

        if (direction === "lb-kg"){
            const converter = createConverter("lb", "kg");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            weightResult.textContent = formattedValues.join(", ") + " kg";
        };

    };

};

weightConvert.addEventListener("click", handleWeightConveret);

const tempDirection = document.getElementById("temp-direction");
const tempInput = document.getElementById("temp-input");
const tempConvert = document.getElementById("temp-convert");
const tempResult = document.getElementById("temp-result");

const handleTempConvert = () => {
    const direction = tempDirection.value;
    const inputValue = tempInput.value;
    const values = inputValue.split(",");
    if(values.length === 1){
        const value = Number(values[0]);

        if(direction === "c-f"){
            const converter = createConverter("c", "f");
            const convertedValue = converter(value);
            tempResult.textContent = convertedValue.toFixed(2) + " °F";
        };

        if(direction === "f-c"){
            const converter = createConverter("f", "c");
            const convertedValue = converter(value);
            tempResult.textContent = convertedValue.toFixed(2) + " °C";
        };
    } else{
        const numberValues = values.map((item) => Number(item));

        if (direction === "c-f"){
            const converter = createConverter("c", "f");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            tempResult.textContent = formattedValues.join(", ") + " °F";
        };

        if (direction === "f-c"){
            const converter = createConverter("f", "c");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            tempResult.textContent = formattedValues.join(", ") + " °C";
        };

    };
};

tempConvert.addEventListener("click", handleTempConvert);

function switchTab(tab) {
    document.getElementById("section-weight").classList.add('hidden');
    //document.getElementById("section-distance").classList.add('hidden');
    document.getElementById("section-temp").classList.add('hidden');

    const inactive = "bg-white text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-100 transition";
    document.getElementById("nav-weight").className=inactive;
    //document.getElementById("nav-distance").className=inactive;
    document.getElementById("nav-temp").className=inactive;

    document.getElementById("section-" + tab).classList.remove('hidden');

    document.getElementById("nav-" + tab).className="bg-blue-600 text-white px-4 py-2 rounded-lg transition";
}