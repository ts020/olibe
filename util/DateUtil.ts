/**
 * Created by sugawaratakanori on 2016/02/16.
 */
const week = ["日","月","火","水","木", "金", "土"];
export default class DateUtil {
    static toDayString(dayNumber:number, lang="ja"):string {
        return week[dayNumber];
    }

    static equalDate(a:Date,b:Date):boolean {
        return (a.getFullYear() == b.getFullYear()&&
        a.getMonth() == b.getMonth() &&
        a.getDate() == b.getDate());
    }
}