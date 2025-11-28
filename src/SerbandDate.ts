export class SerbandDate {
    private static readonly MONTH_NAMES = [
        'Нгакуру', 'Нгавари', 'Нгаэре',
        'Раумати', 'Моана', 'Марае', 
        'Нгахуру', 'Рау', 'Ваи', 
        'Пуру', 'Тахоу', 'Тангата' 
    ]
    private static readonly WEEKDAY_NAMES = [
        'Таи', 'Руа', 'Тору', 'Ва', 'Рима', 'Оно', 'Виту'
    ]
    public extraDaysInYear() {  
       const days = {
            newYear: {name: 'День Нового Года', day: 1, month: 0, short:'НГ'},
            springEquinox: {name: 'Весеннее равноденствие', day: this.calcDay('se'), month: 0, short:'ВР'},
            summerSolstice: {name: 'Летнее солнцестояние', day: this.calcDay('ss'), month: 3, short:'ЛС'},
            fallEquinox: {name: 'Осеннее равноденствие', day: this.calcDay('fe'), month: 6, short:'ОР'},
            winterSolstice: {name: 'Зимнее солнцестояние',  day: this.calcDay('ws'), month: 9, short:'ЗС'},
            reversedDay: {name: 'День задом наперёд', day: 31, month: 11, short:'ЗН'}
        }
        return days
    }  
    
    private currentYear: number;
    private currentMonth: number;
    private currentDay: number;
    
    constructor (year = 1600, month = 6, day = 23) {
        this.currentYear = year;
        this.currentMonth = month;
        this.currentDay = day;

        if (this.currentMonth >= 12) {
            this.currentYear += Math.floor(this.currentMonth/12)
            this.currentMonth = this.currentMonth % 12
        }
        if (this.currentMonth <= -1) {
            this.currentYear += Math.floor(this.currentMonth/12)
            this.currentMonth = 12 + this.currentMonth % 12
        }
    }
    
    private calcDay (day: 'se' | 'ss' | 'fe' | 'ws'): number {

        const ShiftYearsForward: number[] = []
        const ShiftYearsBack: number[] = []
        switch (day) {
            case "se":
                { let year = 1
                while (year < this.currentYear) {
                    year += 10
                    ShiftYearsBack.push(year)
                    year += 91
                    ShiftYearsBack.push(year)
                }
                if (ShiftYearsBack.some(y => y === this.currentYear)) {
                    return 9
                } else {
                    return 10
                } }
            case "ss":
                { let year = 1
                while (year < this.currentYear) {
                    year += 53
                    ShiftYearsBack.push(year)
                    year += 60
                    ShiftYearsBack.push(year)
                }
                if (ShiftYearsBack.some(y => y === this.currentYear)) {
                    return 10
                } else {
                    return 11
                } }
            case "fe":
                { let year = 1
                while (year < this.currentYear) {
                    year += 19
                    ShiftYearsForward.push(year)
                    year += 9
                    ShiftYearsBack.push(year)
                    year += 9
                    ShiftYearsForward.push(year)
                    year += 18
                    ShiftYearsBack.push(year)
                }
                if (ShiftYearsBack.some(y => y === this.currentYear)) {
                    return 2
                } else if (ShiftYearsForward.some(y => y === this.currentYear)){
                    return 4
                } else {
                    return 3
                } }
            case "ws":
                { let year = 1
                while (year < this.currentYear) {
                    year += 16
                    ShiftYearsForward.push(year)
                    year += 31
                    ShiftYearsForward.push(year)
                }
                if (ShiftYearsForward.some(y => y === this.currentYear)) {
                    return 13
                } else {
                    return 12
                } }
        }
    }
    public getDateString(): string {
        const monthName = SerbandDate.MONTH_NAMES[this.currentMonth]
        return `Год: ${this.currentYear}, Месяц: ${monthName}, День: ${this.currentDay}`
    }

    public getDay(): number {
        return this.currentDay
    }
    public getWeekday(): number {
        const totalDays = this.calculateTotalDays()
        const weekdayIndex = totalDays % 7
        return weekdayIndex
    }
    public getWeekdayString(): string {
        const totalDays = this.calculateTotalDays()
        const weekdayIndex = totalDays % 7
        const weekday = weekdayIndex == 0 ? 6 : weekdayIndex - 1
        return SerbandDate.WEEKDAY_NAMES[weekday]
    }

    public getFullYear(): number {
        return this.currentYear
    }

    public getMonth(): number {
        return this.currentMonth
    }
    public getMonthString(): string {
        return SerbandDate.MONTH_NAMES[this.currentMonth]
    }
    
    public isLeapYear(): boolean {
        return this.currentYear % 4 === 0
    }

    private calculateTotalDays(): number {
        let totalDays = (this.currentYear - 1) * 365 + Math.floor(this.currentYear - 1) / 4 + this.currentDay

        do {
            if (this.currentMonth == 0) break
            totalDays += 32
            if (this.currentMonth == 1) break
            totalDays += 30
            if (this.currentMonth == 2) break
            totalDays += 30
            if (this.currentMonth == 3) break
            totalDays += 31
            if (this.currentMonth == 4) break
            totalDays += 30
            if (this.currentMonth == 5) break
            totalDays += 30
            if (this.currentMonth == 6) break
            totalDays += 31
            if (this.currentMonth == 7) break
            totalDays += 30
            if (this.currentMonth == 8) break
            totalDays += 30
            if (this.currentMonth == 9) break
            totalDays += 31
            if (this.currentMonth == 10) break
            totalDays += 30
            break
        } while (totalDays === -1)

        return totalDays
    }

    public getDaysInMonth(): number {
        let days = 30
        if ((this.currentMonth === 11 && this.isLeapYear()) || this.currentMonth === 3 || this.currentMonth === 6 || this.currentMonth === 9) {
            days = 31
        }
        if (this.currentMonth === 0) {
            days = 32
        }
        return days
    }

}