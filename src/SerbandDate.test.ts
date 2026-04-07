import { describe, it, expect } from 'vitest'
import { SerbandDate } from './SerbandDate';

describe('SerbandDate', () => {
    it('should overflow to next year if month is >= 12', () => {
        const date = new SerbandDate(1, 13, 1)
        expect(date.getFullYear()).toBe(2)
        expect(date.getMonth()).toBe(1)
    })

    it('should normalize negative month index correctly', () => {
        const date = new SerbandDate(2, -1, 1);
        expect(date.getFullYear()).toBe(1)
        expect(date.getMonth()).toBe(11)
    })

    it('should rollover days into next month correctly', () => {
        const date = new SerbandDate(1, 0, 35)
        expect(date.getMonth()).toBe(1)
    })

    it('should handle multi-month overflow (massive day input)', () => {
        const date = new SerbandDate(1, 0, 1000)
        expect(date.getFullYear()).toBeGreaterThan(1)
    })

    it('should correctly format date string for different months', () => {
        const testCases = [
            { y: 1, m: 0, d: 1, expected: 'Год: 1, Месяц: Нгакуру, День: 1' },
            { y: 100, m: 11, d: 30, expected: 'Год: 100, Месяц: Тангата, День: 30' },
            { y: 1600, m: 5, d: 2, expected: 'Год: 1600, Месяц: Марае, День: 2' }
        ]

        testCases.forEach(({ y, m, d, expected }) => {
            const date = new SerbandDate(y, m, d)
            expect(date.getDateString()).toBe(expected)
        })
    })

    it('should correctly return weekday and its label', () => {
        const testCases = [
            { y: 1, m: 0, d: 1, expected: { index: 1, label: 'Таи' } },
            { y: 1, m: 0, d: 7, expected: { index: 0, label: 'Виту' } },
            { y: 2, m: 0, d: 3, expected: { index: 4, label: 'Ва' } }
        ]

        testCases.forEach(({ y, m, d, expected }) => {
            const date = new SerbandDate(y, m, d)
            expect(date.getWeekday()).toBe(expected.index)
            expect(date.getWeekdayString()).toBe(expected.label)
        })
    })

    it('should return correct number of days in month', () => {
        const testCases = [
            { m: 0, expected: 32},
            { m: 3, expected: 31},
            { m: 5, expected: 30},
            { m: 8, expected: 30},
            { m: 11, expected: 31},
        ]

        testCases.forEach(({ m, expected }) => {
            const date = new SerbandDate(4, 0, 1)
            expect(date.getDaysInMonth(m)).toBe(expected)
        })
    })
})