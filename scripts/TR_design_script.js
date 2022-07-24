import init, { my_tr_designer, test_fn } from '../pkg/without_a_bundler_bare_for.js'; // note that /.. is refereing the parent dir

async function run() {
    await init();
    updateMainInfo();
    let results;
    var sheetsliderLL = document.getElementById("sheetRangeLL");
    var sheetoutputLL = document.getElementById("sheetLL");
    var sheetsliderUL = document.getElementById("sheetRangeUL");
    var sheetoutputUL = document.getElementById("sheetUL");

    var Availables = [];
    var inAvailables = [];
    sheetoutputLL.innerHTML = sheetsliderLL.value; // Display the default slider value
    sheetoutputUL.innerHTML = sheetsliderUL.value; // Display the default slider value
    // console.log(inAvailables);
    [Availables, inAvailables] = render(Availables, inAvailables);
    writeTable(coreLosses_B_Loss_kg, 'CoreLossesData');
    writeTable(FoilConductor, 'FoilData');
    writeTable(RoundConductor, 'RoundData');
    writeTable(FlatConductor, 'FlatData');

    maxD.onchange = function () {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        let DmaxValueCeil = 10 * (Math.ceil(Number(this.value) / 10) - 1);
        sheetsliderUL.max = DmaxValueCeil;
        sheetsliderUL.value = DmaxValueCeil;
        sheetsliderLL.max = DmaxValueCeil;
        if (Number(this.value) < Math.min(Number(sheetsliderLL.value), Number(sheetsliderLL.min))) {

            // let DminValueCeil = 10 * (Math.floor(Number(this.value) / 10)-1);
            sheetsliderLL.min = 10;
            sheetsliderLL.value = 10;
        }
        sheetoutputUL.innerHTML = sheetsliderUL.value; // Display the default slider value
        sheetoutputLL.innerHTML = sheetsliderLL.value; // Display the default slider value
        [Availables, inAvailables] = render(Availables, inAvailables);
        // sliderLL.oninput();
    }
    // Update the current slider value (each time you drag the slider handle)
    sheetsliderUL.oninput = function () {
        sheetoutputUL.innerHTML = this.value;
        this.max = 10 * (Math.ceil(Number(maxD.value) / 10) - 1);
        if (Number(sheetsliderLL.value) > Number(this.value)) {
            sheetsliderLL.value = this.value;
            sheetoutputLL.innerHTML = sheetsliderLL.value; // Display the default slider value
        }
        [Availables, inAvailables] = render(Availables, inAvailables);
    }
    sheetsliderLL.oninput = function () {
        this.max = 10 * (Math.ceil(Number(maxD.value) / 10) - 1);
        sheetoutputLL.innerHTML = this.value;
        if (Number(sheetsliderUL.value) < Number(this.value)) {
            sheetsliderUL.value = this.value;
            sheetoutputUL.innerHTML = sheetsliderUL.value; // Display the default slider value
        }
        [Availables, inAvailables] = render(Availables, inAvailables);
    }

    // var runBotton = document.getElementById("runButton");
    // runBotton.onclick = function () {
    //     results = test_fn();
    //     console.log(results);
    // }


    var runBotton = document.getElementById("runButton");
    runBotton.onclick = function () {
        let availables_to_pass = new Uint16Array(Availables.length);
        // console.log(typeof (availables_to_pass));
        for (i = 0; i < Availables.length; i++) {
            availables_to_pass[i] = Availables[i];
        }
        // console.log(availables_to_pass);
        // console.log(typeof (availables_to_pass));
        // test_fn(availables_to_pass);
        // console.log(availables_to_pass);


        results = my_tr_designer(
            availables_to_pass,
            Number(document.getElementById("Power").value),
            Number(document.getElementById("VHTL").value),
            Number(document.getElementById("VLTL").value),
            Number(document.getElementById("freq").value),
            Number(document.getElementById("PrimaryConnection").value),
            Number(document.getElementById("SecnodaryConnection").value),
            Number(document.getElementById("TapChangerLimit").value) / 100 + 1,
            0.0,
            // Number(document.getElementById("ConductorConfig").value),
            Number(document.getElementById("LLoss").value),
            Number(document.getElementById("NLLoss").value),
            Number(document.getElementById("impz").value),
            Number(document.getElementById("impzTol").value),
            Number(document.getElementById("zCaculationMethod").value),
            Number(document.getElementById("NoLoadLossPrice").value),
            Number(document.getElementById("LoadLossPrice").value),
            Number(document.getElementById("LowTCoreClear").value),
            Number(document.getElementById("LowHighTClear").value),
            Number(document.getElementById("HighHighTClear").value),
            Number(document.getElementById("coilYokeClear").value),
            Number(document.getElementById("CoolingStrips").value),
            Number(document.getElementById("minHRingHT").value),
            Number(document.getElementById("maxHRingHT").value),
            Number(document.getElementById("minHRingLT").value),
            Number(document.getElementById("maxHRingLT").value),
            Number(document.getElementById("PaperInsulation").value) * 1000,
            Number(document.getElementById("PaperThickness").value),
            Number(document.getElementById("maxD").value),
            Number(document.getElementById("minD").value),
            Number(document.getElementById("th").value),
            Number(document.getElementById("sF").value),
            Number(document.getElementById("bF").value),
            Number(document.getElementById("knee").value),
            Number(document.getElementById("overexcit").value),
            Number(document.getElementById("minB").value),
            Number(document.getElementById("CorePrice").value),
            readTable('CoreLossesDatatable'),
            Number(document.getElementById("maxA").value),
            Number(document.getElementById("minA").value),
            Number(document.getElementById("CopperPrice").value),
            Number(document.getElementById("FoilInsulationPaperThickness").value),
            Number(document.getElementById("FoilAreCorrectionFactor").value),
            readTable('FoilDatatable'),
            readTable('RoundDatatable'),
            Number(document.getElementById("FlatInsulationPaperThickness").value),
            readTable('FlatDatatable')
        );
        console.log(results);
        // send results to the Results Tab
        let results_table = document.getElementById("resultsTable");
        results_table.innerHTML = "";
        let headers = "this_solution_i; core_d_; core_area_eff_;core_b_;core_combination; i_lt; lt_turn_per_layer; i_ht; ht_turn_per_layer; lt_n_i; lt_min_turn_per_layer; lt_max_turn_per_layer; lt_number_of_layers; lt_number_cooling_canals; lt_coil_thickness; lt_coil_dia; lt_mech_h; max_coil_mech_h; min_coil_mech_h; max_ht_mech_h; min_ht_mech_h; ht_n_i; ht_n_tap_i; ht_min_turn_per_layer; ht_max_turn_per_layer; ht_mech_h; coil_mech_h; ht_number_of_layers; ins_con; ht_needed_insulation; ht_thickness_insultation_papers_betwn_layers; ht_insultation_betwn_layers; ht_number_cooling_canals; ht_coil_thickness; coil_dia; e_between_limbs_centers; h_between_yokes; core_weight; total_core_losses; h_amp_per_axial; lt_coil_mean_d; lt_conductor_length_per_phase; lt_copper_weight_per_phase; ht_coil_mean_d; ht_conductor_length_per_phase; ht_copper_weight_per_phase; lt_r20; ht_r20; lt_r75; ht_r75; lt_copper_resistance_loss; ht_copper_resistance_loss; lt_eddy_loss; ht_eddy_loss; lt_connection_loss; ht_connection_loss; lt_load_losses; ht_load_losses; total_copper_load_losses; total_copper_load_losses_including_stray; h_mean; u_magnetic_constant; reactance_x; lt_r75_total; resistance_r; impedance_z_xr_method; cost_copper_loss; cost_no_load_loss; weight_copper_lt_3pahses; weight_copper_ht_3pahses; weigth_copper_material; cost_copper_material; cost_core_material; cost_total_material; cost_total_loss; cost_total; weight_total\n";
        headers = headers.replaceAll(' ', '');
        headers = headers.replaceAll('_', ' ');
        results = headers + results.replaceAll(' ', '');
        let splitted_results = results.split("\n");
        for (let row of splitted_results) {
            let tr = results_table.insertRow();
            for (let col of row.split(";")) {
                let td = tr.insertCell();
                td.innerHTML = col;
            }
        }



    }
}


run();