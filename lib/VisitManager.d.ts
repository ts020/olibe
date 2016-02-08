/**
 * Created by sugawaratakanori on 2016/02/08.
 */
export default class VisitManager {
    static isVisit(): boolean;
    static getVisitAll(): {
        [key: string]: boolean;
    };
    static visit(): void;
    clear(): void;
}
