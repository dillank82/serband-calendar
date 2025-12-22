import { SerbandDate } from "../SerbandDate";

const defaultRealDate = new SerbandDate(1601, 1, 24)
const localStorageRealDate = localStorage.getItem('realDate')
let realDate: SerbandDate = defaultRealDate

console.log(localStorageRealDate)

if (localStorageRealDate) {
    try {
        const data = JSON.parse(localStorageRealDate)
        if (typeof data.currentYear === 'number' && typeof data.currentMonth === 'number' && typeof data.currentDay === 'number') {
            realDate = new SerbandDate(data.currentYear, data.currentMonth, data.currentDay)
        }
    } catch (error) {
        console.error('Failed to parse date from localStorage', error)
    }
}
export default realDate