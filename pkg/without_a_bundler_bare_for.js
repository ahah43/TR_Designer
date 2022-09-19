
let wasm;

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachedUint16Memory0 = new Uint16Array();

function getUint16Memory0() {
    if (cachedUint16Memory0.byteLength === 0) {
        cachedUint16Memory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArray16ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 2);
    getUint16Memory0().set(arg, ptr / 2);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint16Array} n
*/
export function test_fn(n) {
    const ptr0 = passArray16ToWasm0(n, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.test_fn(ptr0, len0);
}

let cachedFloat64Memory0 = new Float64Array();

function getFloat64Memory0() {
    if (cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

function passArrayF64ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 8);
    getFloat64Memory0().set(arg, ptr / 8);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
* @param {Uint16Array} availables
* @param {number} power
* @param {number} vhtl
* @param {number} vltl
* @param {number} freq
* @param {number} primaryconnection
* @param {number} secnodaryconnection
* @param {number} tapchangerlimit
* @param {number} conductorconfig
* @param {number} lloss
* @param {number} nlloss
* @param {number} impz
* @param {number} impztol
* @param {number} zcaculationmethod
* @param {number} noloadlossprice
* @param {number} loadlossprice
* @param {number} lowtcoreclear
* @param {number} lowhightclear
* @param {number} highhightclear
* @param {number} coilyokeclear
* @param {number} coolingstrips
* @param {number} minhringht
* @param {number} maxhringht
* @param {number} minhringlt
* @param {number} maxhringlt
* @param {number} paperinsulation
* @param {number} paperthickness
* @param {number} maxd
* @param {number} mind
* @param {number} th
* @param {number} sf
* @param {number} bf
* @param {number} knee
* @param {number} overexcit
* @param {number} minb
* @param {number} coreprice
* @param {Float64Array} corelossesdatatable
* @param {number} maxa
* @param {number} mina
* @param {number} copperprice
* @param {number} foilinsulationpaperthickness
* @param {number} foilarecorrectionfactor
* @param {Float64Array} foildatatable
* @param {Float64Array} rounddatatable
* @param {number} flatinsulationpaperthickness
* @param {Float64Array} flatdatatable
* @returns {string}
*/
export function my_tr_designer(availables, power, vhtl, vltl, freq, primaryconnection, secnodaryconnection, tapchangerlimit, conductorconfig, lloss, nlloss, impz, impztol, zcaculationmethod, noloadlossprice, loadlossprice, lowtcoreclear, lowhightclear, highhightclear, coilyokeclear, coolingstrips, minhringht, maxhringht, minhringlt, maxhringlt, paperinsulation, paperthickness, maxd, mind, th, sf, bf, knee, overexcit, minb, coreprice, corelossesdatatable, maxa, mina, copperprice, foilinsulationpaperthickness, foilarecorrectionfactor, foildatatable, rounddatatable, flatinsulationpaperthickness, flatdatatable) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray16ToWasm0(availables, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArrayF64ToWasm0(corelossesdatatable, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArrayF64ToWasm0(foildatatable, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passArrayF64ToWasm0(rounddatatable, wasm.__wbindgen_malloc);
        const len3 = WASM_VECTOR_LEN;
        const ptr4 = passArrayF64ToWasm0(flatdatatable, wasm.__wbindgen_malloc);
        const len4 = WASM_VECTOR_LEN;
        wasm.my_tr_designer(retptr, ptr0, len0, power, vhtl, vltl, freq, primaryconnection, secnodaryconnection, tapchangerlimit, conductorconfig, lloss, nlloss, impz, impztol, zcaculationmethod, noloadlossprice, loadlossprice, lowtcoreclear, lowhightclear, highhightclear, coilyokeclear, coolingstrips, minhringht, maxhringht, minhringlt, maxhringlt, paperinsulation, paperthickness, maxd, mind, th, sf, bf, knee, overexcit, minb, coreprice, ptr1, len1, maxa, mina, copperprice, foilinsulationpaperthickness, foilarecorrectionfactor, ptr2, len2, ptr3, len3, flatinsulationpaperthickness, ptr4, len4);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_log_31df2f38e8d78126 = function(arg0, arg1) {
        console.log(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedFloat64Memory0 = new Float64Array();
    cachedInt32Memory0 = new Int32Array();
    cachedUint16Memory0 = new Uint16Array();
    cachedUint8Memory0 = new Uint8Array();


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('without_a_bundler_bare_for_bg.wasm', import.meta.url);
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

export { initSync }
export default init;
