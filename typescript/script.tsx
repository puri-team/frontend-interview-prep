// Type Compatibility
// https://www.typescriptlang.org/docs/handbook/type-compatibility.html#starting-out
interface Pet {
    name: string;
}

function greet(pet: Pet) {
    console.log("Hello, " + pet.name);
}

let dog = { name: "Lassie", owner: "Rudd Weatherwax" };

greet(dog); // OK

// Excess Property Checks
// https://www.typescriptlang.org/docs/handbook/2/objects.html#excess-property-checks
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
// here there is a error about Excess Property Checks
createSquare({ colour: "red", width: 100, height: 200 });
