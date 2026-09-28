function createConverter(fromUnit, toUnit) {
    return (value) => {
        if (fromUnit === "kg" && toUnit === "lb") {
            if (Array.isArray(value)) {
                return value.map((item) => item * 2.20462);
            }
            return value * 2.20462;
        }
        if (fromUnit === "lb" && toUnit === "kg") {
            if (Array.isArray(value)) {
                return value.map((item) => item / 2.20462);
            }
            return value / 2.20462;
        }
        if (fromUnit === "mi" && toUnit === "km") {
            if (Array.isArray(value)) {
                return value.map((item) => item * 1.60934);
            }
            return value * 1.60934;
        }
        if (fromUnit === "km" && toUnit === "mi") {
            if (Array.isArray(value)) {
                return value.map((item) => item / 1.60934);
            }
            return value / 1.60934;
        }
    };
}

const weightDirection = document.getElementById("weight-direction");
const weightInput = document.getElementById("weight-input");
const weightConvert = document.getElementById("weight-convert");
const weightResult = document.getElementById("weight-result");

const handleWeightConvert = () => {
    const direction = weightDirection.value;
    const inputValue = weightInput.value;
    const values = inputValue.split(",");

    if (values.length === 1) {
        const value = Number(values[0]);

        if (direction === "kg-lb") {
            const converter = createConverter("kg", "lb");
            const convertedValue = converter(value);
            weightResult.textContent = convertedValue.toFixed(2) + " lb";
        }

        if (direction === "lb-kg") {
            const converter = createConverter("lb", "kg");
            const convertedValue = converter(value);
            weightResult.textContent = convertedValue.toFixed(2) + " kg";
        }
    } else {
        const numberValues = values.map((item) => Number(item));

        if (direction === "kg-lb") {
            const converter = createConverter("kg", "lb");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            weightResult.textContent = formattedValues.join(", ") + " lb";
        }

        if (direction === "lb-kg") {
            const converter = createConverter("lb", "kg");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            weightResult.textContent = formattedValues.join(", ") + " kg";
        }
    }
};

weightConvert.addEventListener("click", handleWeightConvert);

const distanceDirection = document.getElementById("distance-direction");
const distanceInput = document.getElementById("distance-input");
const distanceConvert = document.getElementById("distance-convert");
const distanceResult = document.getElementById("distance-result");

const handleDistanceConvert = () => {
    const direction = distanceDirection.value;
    const inputValue = distanceInput.value;
    const values = inputValue.split(",");

    if (values.length === 1) {
        const value = Number(values[0]);

        if (direction === "mi-km") {
            const converter = createConverter("mi", "km");
            const convertedValue = converter(value);
            distanceResult.textContent = convertedValue.toFixed(2) + " km";
        }

        if (direction === "km-mi") {
            const converter = createConverter("km", "mi");
            const convertedValue = converter(value);
            distanceResult.textContent = convertedValue.toFixed(2) + " mi";
        }
    } else {
        const numberValues = values.map((item) => Number(item));

        if (direction === "mi-km") {
            const converter = createConverter("mi", "km");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            distanceResult.textContent = formattedValues.join(", ") + " km";
        }

        if (direction === "km-mi") {
            const converter = createConverter("km", "mi");
            const convertedValues = converter(numberValues);
            const formattedValues = convertedValues.map((item) => item.toFixed(2));
            distanceResult.textContent = formattedValues.join(", ") + " mi";
        }
    }
};

distanceConvert.addEventListener("click", handleDistanceConvert);
