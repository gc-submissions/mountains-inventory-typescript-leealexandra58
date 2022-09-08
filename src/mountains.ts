export interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
    
    array.map(object => {
        Math.max(...array);
        return object.name;
    });
}

let tallestMountain = findNameOfTallestMountain(mountains)
console.log(tallestMountain);