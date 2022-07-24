/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint16Array} n
*/
export function test_fn(n: Uint16Array): void;
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
export function my_tr_designer(availables: Uint16Array, power: number, vhtl: number, vltl: number, freq: number, primaryconnection: number, secnodaryconnection: number, tapchangerlimit: number, conductorconfig: number, lloss: number, nlloss: number, impz: number, impztol: number, zcaculationmethod: number, noloadlossprice: number, loadlossprice: number, lowtcoreclear: number, lowhightclear: number, highhightclear: number, coilyokeclear: number, coolingstrips: number, minhringht: number, maxhringht: number, minhringlt: number, maxhringlt: number, paperinsulation: number, paperthickness: number, maxd: number, mind: number, th: number, sf: number, bf: number, knee: number, overexcit: number, minb: number, coreprice: number, corelossesdatatable: Float64Array, maxa: number, mina: number, copperprice: number, foilinsulationpaperthickness: number, foilarecorrectionfactor: number, foildatatable: Float64Array, rounddatatable: Float64Array, flatinsulationpaperthickness: number, flatdatatable: Float64Array): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly test_fn: (a: number, b: number) => void;
  readonly my_tr_designer: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number, u: number, v: number, w: number, x: number, y: number, z: number, a1: number, b1: number, c1: number, d1: number, e1: number, f1: number, g1: number, h1: number, i1: number, j1: number, k1: number, l1: number, m1: number, n1: number, o1: number, p1: number, q1: number, r1: number, s1: number, t1: number, u1: number, v1: number, w1: number, x1: number, y1: number, z1: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* Synchronously compiles the given `bytes` and instantiates the WebAssembly module.
*
* @param {BufferSource} bytes
*
* @returns {InitOutput}
*/
export function initSync(bytes: BufferSource): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
