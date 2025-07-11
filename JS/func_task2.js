
// using only loop print in the shown format: 


let menuDesign = [
    {
        label: "Electronics",
        children: [
            {
                label: "Television",
                children: [
                    { label: "Smart TV", children: [{
                        label: "Android TV",
                        children: null
                    },
                    {
                        label: "Apple TV",
                        children: null
                    }
                ] },
                    { label: "IP TV", children: null },
                ],
            },
            {
                label: "Electrical Appliances",
                children: null
            }
        ],
    },
];

// Electronics
//    Television 
//        Smart TV      
//        IP TV      
//    Electrical Appliances

/**

for (let i = 0; i < 1; i++) {
    console.log("Electronics");
    for (let j = 0; j < 1; j++) {
        console.log("    Television");
        for (let k = 0; k < 1; k++) {
            console.log("        Smart TV");
            console.log("        IP TV");
        }
        console.log("    Electrical Appliances");
    }
    console.log("Clothing")
}

 */


//recursive function to print the menu design

const printMenu = (menuChild, space = -1) => {
    if (menuChild) {
        space += 1;
        for (let menu of menuChild) {
            console.log("\t".repeat(space) + menu.label)
            printMenu(menu.children, space)
        }
    }
}
printMenu(menuDesign)