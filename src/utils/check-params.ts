export function checkAppointmentsParams(specialty, date, minScore): ICheckRes {
    try {
        isString(specialty, 'specialty');
        isNumber(date, 'date');
        isNumber(minScore, 'minScores');
        return {res: true};
    } catch (e) {
        return {message: e.message, res: false}
    }

}

export interface ICheckRes {
    message?: string,
    res: boolean
}

function isNumber(value, key: string) {
    if (isNaN(value)) {
        throw new Error(`${key} should be string. ${key}: ${value}`)
    }
}

function isString(value, key: string) {
    if (typeof value !== 'string') {
        throw new Error(`${key} should be string. ${key}: ${value}`)
    }
}
