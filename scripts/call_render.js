function render(Availables, inAvailables) {
    // console.log(inAvailables);
    let sheetsliderLL = document.getElementById("sheetRangeLL");
    let sheetsliderUL = document.getElementById("sheetRangeUL");

    let screenWidth = screen.width;
    root.innerHTML = "";
    let minSheet = Number(sheetsliderLL.value);
    let maxSheet = Number(sheetsliderUL.value);
    Availables = [];
    let results = "";
    for (let x = minSheet; x <= maxSheet; x += 10) {
        let element = document.createElement("button");
        element.classList.add("field");
        // element.href = "#";
        element.innerText = x;
        if (!inAvailables.includes(x)) {
            Availables.push(x);
            element.style.background = "skyblue";
            element.style.fontWeight = "bold";
        } else {
            element.style.background = "black";
        }
        element.style.width = "5em";
        element.style.height = "5em";
        element.addEventListener("click", (evt) => {
            evt.preventDefault();
            if (inAvailables.includes(x)) {
                inAvailables = inAvailables.filter(i => i != x);
            } else {
                inAvailables.push(x);
            }
            render(Availables, inAvailables);
        });
        root.appendChild(element);
    };
    root.style.gridTemplate = `repeat(100, auto) / repeat(20, auto)`;
    // results = "";
    // if (Availables.length != 0) {
    //     results = my_core_design(maxD.value, th.value, Availables.toString());
    // }
    // results = results.split("***");
    return [Availables, inAvailables];
}