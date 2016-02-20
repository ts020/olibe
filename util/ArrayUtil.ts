export default class ArrayUtil {
    static without(array:any[], item:any):void {
        if(item == null || array == null || array.indexOf(item) == -1) {
            return;
        }
        array.splice(array.indexOf(item), 1);
    }

    static flatten(array:any[], key:string=null):any[] {
        var result:any[] = [];
        if(key) {
            array.forEach((d)=>{
                result = result.concat(d[key]);
            })
        }else {
            array.forEach((d)=>{
                result = result.concat(d);
            })
        }
        return result;
    }
}
