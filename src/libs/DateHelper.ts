export default class DateHelper {
    static dateDiff(date: Date): string {
        let time = (Date.now() - date.getTime()) / 1000
        if (time < 60) {
            return Math.round(time) + '秒'
        } else if (time >= 60 && time < 60 * 60) {
            return Math.round(time / 60) + '分'
        } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
            return Math.round(time / (60 * 60)) + '小时'
        } else if (time >= 60 * 60 * 24 && time < 60 * 60 * 24 * 7) {
            return Math.round(time / (60 * 60 * 24)) + '天'
        } else {
            const y = date.getFullYear()
            const m = date.getMonth() + 1
            const d = date.getDate()
            return `${y}-${m}-${d}`
        }
    }
}