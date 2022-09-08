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
    
    const highest = array.reduce((previous, current) => {
        return current.height > previous.height ? current : previous;
    });
    return highest.name;
}

let tallestMountain = findNameOfTallestMountain(mountains)
console.log(tallestMountain);