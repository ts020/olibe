export default class StringUtil {
    static htmlEscape(str:string):string {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    static htmlUnescape(value:string):string{
        return String(value)
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    }

    static addZero(num:number):string {
        if(num < 10) {
            return "0" + num;
        }
        return num.toString();
    }
}