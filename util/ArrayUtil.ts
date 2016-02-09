/**
 * Created by sugawaratakanori on 2016/02/08.
 */
/**
 * Created by ts on 2016/01/25.
 */
export default class ArrayUtil {
    static without(array:any[], item:any):void {
        if(item == null || array == null || array.indexOf(item) == -1) {
            return;
        }
        array.splice(array.indexOf(item), 1);
    }
}
