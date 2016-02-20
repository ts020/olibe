export default class LinearScale {
    private _domain;
    private _range;
    domain(min: number, max: number): LinearScale;
    range(min: number, max: number): LinearScale;
    math(val: number): number;
}
