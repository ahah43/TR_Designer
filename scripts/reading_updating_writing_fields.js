function updateMainInfo() {

    // losses & impedance
    let VLTL = Number(document.getElementById("VLTL").value);
    let freq = Number(document.getElementById("freq").value);
    let STD_M;
    let VHTL = Number(document.getElementById("VHTL").value);
    if (VHTL == 11) {
        STD_M = STD_M_11.data;
    } else {              // only two choises: 11 & 33 KVA
        STD_M = STD_M_33.data;
    };
    let power = Number(document.getElementById("Power").value);
    let LLoss_field = document.getElementById("LLoss");
    let NLLoss_field = document.getElementById("NLLoss");
    let impz_field = document.getElementById("impz");

    for (i = 0; i < STD_M.length; i++) {
        if (power <= STD_M[i][0]) {
            NLLoss_field.value = STD_M[i][1];
            LLoss_field.value = STD_M[i][2];
            impz_field.value = STD_M[i][3];
            break
        }
    }


    // Clearnace

    let LowT_core_clear = document.getElementById("LowTCoreClear");
    if (VLTL <= 2000) {
        LowT_core_clear.value = 6;
    } else {
        LowT_core_clear.value = 8;
    };
    
    let LowHighTClear = document.getElementById("LowHighTClear");
    let HighHighTClear = document.getElementById("HighHighTClear");
    let coilYokeClear = document.getElementById("coilYokeClear");
    let CoolingStrips = document.getElementById("CoolingStrips");
    let minHRingHT = document.getElementById("minHRingHT");
    let maxHRingHT = document.getElementById("maxHRingHT");
    let minHRingLT = document.getElementById("minHRingLT");
    let maxHRingLT = document.getElementById("maxHRingLT");
    for (i = 0; i < clearnaceTable.data.length; i++) {
        if (VHTL <= Number(clearnaceTable.data[i][0])) {
            LowHighTClear.value = clearnaceTable.data[i][1];
            HighHighTClear.value = clearnaceTable.data[i][2];
            coilYokeClear.value = clearnaceTable.data[i][3];
            CoolingStrips.value = clearnaceTable.data[i][4];
            minHRingHT.value = clearnaceTable.data[i][5];
            maxHRingHT.value = clearnaceTable.data[i][6];
            minHRingLT.value = clearnaceTable.data[i][7];
            maxHRingLT.value = clearnaceTable.data[i][8];
            break
        }
    }

}