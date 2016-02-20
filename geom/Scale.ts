export default class LinearScale {
    private _domain:{min:number; max:number};
    private _range:{min:number; max:number};

    domain(min:number, max:number):LinearScale {
        this._domain = {min:min,max:max};
        return this;
    }

    range(min:number, max:number):LinearScale {
        this._range = {min:min, max:max};
        return this;
    }

    math(val:number):number {
        var domainLen = this._domain.max - this._domain.min;
        var valLen = val-this._domain.min;
        var rangeLen = this._range.max - this._range.min;
        return valLen / domainLen * rangeLen + this._range.min;
    }
}

