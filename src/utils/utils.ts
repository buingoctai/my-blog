export default class Utils {
    static convertToGeneralFormatTime(date: string) {
        const d = new Date(date);

        const now = new Date();

        const diffDays = Number(((now - d) / (1000 * 60 * 60 * 24)).toFixed());

        if (diffDays === 0) return 'Vừa thêm';
        if (diffDays <= 7) return `${diffDays} ngày trước`;

        return d.toLocaleDateString('en-GB');
    }

    private static simpleStripVietnamese(str: string, convToLowerCase = true) {
        if (!str) return "";
        if (convToLowerCase)
            str = str.toLowerCase();

        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");

        if (!convToLowerCase) {
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ỏ|Õ|Ọ|Ó|Ò|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
        }
        return str;
    }

    static checkMatchedText(target: string, keyword: string) {
        const listKey: string[] = this.simpleStripVietnamese(keyword).split(' ');
        const listTarget: string[] = this.simpleStripVietnamese(target).split(' ');

        const isMatch = () => {
            const indexMatched: number[] = [];
            for (const itemKeyword of listKey) {
                let found = false;
                for (let index = 0; index < listTarget.length; ++index) {
                    if (listTarget[index].startsWith(itemKeyword) && !indexMatched.includes(index)) {
                        indexMatched.push(index);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return false;
                }
            }

            return true;
        };

        return isMatch();
    }
}