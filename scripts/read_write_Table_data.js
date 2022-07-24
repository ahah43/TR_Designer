function readTable(Tid) {
    let tableData = [];
    let myTab = document.getElementById(Tid);
    let row_count = myTab.rows.length;
    let tableData_to_pass;
    // console.log(row_count);
    let column_count = myTab.rows.item(0).cells.length;
    tableData.push(column_count); // first number os always the count of rows in the table
    for (i = 0; i < row_count; i++) {
        // console.log(i);
        let objCells = myTab.rows.item(i).cells;
        for (let j = 0; j < objCells.length; j++) {
            let this_input_cell = document.getElementById(Tid + i.toString() + j.toString());
            // console.log(this_input_cell.value);
            tableData.push(this_input_cell.value);
            // tableData = tableData + '\n';
        }
    }
    tableData_to_pass = new Float64Array(tableData.length);
    for (i = 0; i < (row_count * column_count); i++) {
        tableData_to_pass[i] = Number(tableData[i]);
    }
    // console.log(tableData_to_pass);
    return tableData_to_pass;
}


function writeTable(tableData, Parent_id) {
    // the table has to contain: <tbody id="testBody"></tbody>
    // tableData: is in the form: tableData = {headers: ["","",..], data:[[],[],..]}
    const tableParent = document.getElementById(Parent_id);
    let myTable = document.createElement("table");
    myTable.id = Parent_id + 'table';
    for (i = 0; i < tableData.headers.length; i++) {
        let header_i = document.createElement("th");
        let headerText = document.createTextNode(tableData.headers[i]);
        header_i.appendChild(headerText);
        myTable.appendChild(header_i);
    };
    for (i = 0; i < tableData.data.length; i++) {
        let this_row = document.createElement("tr");
        for (j = 0; j < tableData.data[i].length; j++) {
            let this_cell = document.createElement("td");
            // this_cell.contentEditable = "true";
            // let CellText = document.createTextNode(tableData.data[i][j]);
            let input_cell = document.createElement("input");
            input_cell.type = "text";
            input_cell.value = tableData.data[i][j];
            input_cell.oninput = function () { this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); };
            input_cell.id = myTable.id + i.toString() + j.toString();
            this_cell.appendChild(input_cell);
            this_row.appendChild(this_cell);
        };

        myTable.appendChild(this_row);
        tableParent.appendChild(myTable);
    };
    myTable.setAttribute("border", "1");
}


//////////////////// old versions ////////////////////////////////////
function readTable_v0(Tid) {
    let tableData = "";
    let myTab = document.getElementById(Tid);
    for (i = 0; i < myTab.rows.length; i++) {
        let objCells = myTab.rows.item(i).cells;
        for (let j = 0; j < objCells.length; j++) {
            let this_input_cell = document.getElementById(Tid + i.toString() + j.toString());
            tableData = tableData + ';' + this_input_cell.value.toString();
        }
        tableData = tableData + '\n';
    }
    return tableData;
}

function writeTable_v2(tableData, Parent_id) {
    // the table has to contain: <tbody id="testBody"></tbody>
    // tableData: is in the form: tableData = {headers: ["","",..], data:[[],[],..]}
    const tableParent = document.getElementById(Parent_id);
    let myTable = document.createElement("table");
    myTable.id = Parent_id + 'table';
    for (i = 0; i < tableData.headers.length; i++) {
        let header_i = document.createElement("th");
        let headerText = document.createTextNode(tableData.headers[i]);
        header_i.appendChild(headerText);
        myTable.appendChild(header_i);
    };
    let tableBody = document.createElement("tbody");
    for (i = 0; i < tableData.data.length; i++) {
        let this_row = tableBody.insertRow();
        for (j = 0; j < tableData.data[i].length; j++) {
            let this_cell = this_row.insertCell(j);
            this_cell.innerHTML = tableData.data[i][j];
            this_cell.contentEditable = "true";
            // let CellText = document.createTextNode(tableData.data[i][j]);
            // let CellText = document.createElement("input");
            // CellText.type = "text";
            // CellText.value = tableData.data[i][j];
            this_cell.oninput = function () { this.innerHTML = this.innerHTML.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); };
            // this_cell.appendChild(CellText);
            this_cell.id = myTable.id + i.toString() + j.toString();
            // this_row.appendChild(this_cell);
        };

        // myTable.appendChild(this_row);
        myTable.appendChild(tableBody);
        tableParent.appendChild(myTable);
    };
    myTable.setAttribute("border", "1");;
}



function readTable_v2(Tid) {
    // document.getElementById('info').innerHTML = "";
    let tableData = "";
    let myTab = document.getElementById(Tid);

    // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
    for (i = 1; i < myTab.rows.length; i++) {
        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        let objCells = myTab.rows.item(i).cells;
        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (let j = 0; j < objCells.length; j++) {
            // info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
            tableData = tableData + ' ' + objCells.item(j).value.toString();
        }
        // info.innerHTML = info.innerHTML + '<br />';     // ADD A BREAK (TAG).
        tableData = tableData + '\n';
    }
    return tableData;
}