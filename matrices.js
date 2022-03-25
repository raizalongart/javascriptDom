const matrix = [
    ["Fruits", "Vegetables", "Proteins"],
    ["Apple","Carrot","Chicken"],
    ["Strawberry", "Onion", "Meat"],
    ["Orange", "Potato", "Fish"]
];

const table = document.createElement("table");
document.getElementById("main").appendChild(table);
const firstRow = document.createElement("tr");
table.appendChild(firstRow);

matrix[0].forEach(elem=>{
    const tableHeader = document.createElement("th");
    firstRow.appendChild(tableHeader);
    const tableHeaderText = document.createTextNode(elem);
    tableHeader.appendChild(tableHeaderText);
})

for(let i=1;i<matrix.length;i++) {
    let fila = matrix[i];
    const tableRows = document.createElement("tr");
    table.appendChild(tableRows);
    for(let x=0;x<fila.length;x++){
        const tableCells = document.createElement("td");
        tableRows.appendChild(tableCells);
        const tableCellsText = document.createTextNode(fila[x]);
        tableCells.appendChild(tableCellsText);
    }
};
