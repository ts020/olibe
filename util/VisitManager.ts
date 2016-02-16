/**
 * Created by sugawaratakanori on 2016/02/08.
 */
export default class VisitManager {

    static isVisit():boolean {
        return this.getVisitAll()[location.pathname] == true;
    }

    static getVisitAll():{[key: string]:boolean} {
        var str = window.localStorage.getItem("vui_visit");
        if(str) {
            return JSON.parse(str)
        }
        return {};
    }

    static visit():void {
        var item = VisitManager.getVisitAll();
        item[location.pathname] = true;
        window.localStorage.setItem("vui_visit",JSON.stringify(item));
    }

    clear():void {
        window.localStorage.removeItem("vui_visit");
    }
}