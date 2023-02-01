function calcAge(birthDay) {
    let remainMili = new Date().getTime() - new Date(birthDay).getTime()
    let day = (1000 * 3600) * 24
    let month = (1000 * 3600) * 730.001
    let year = month * 12.0082

    let y = 0
    let m = 0
    let d = 0
    if (remainMili > year) {
        let passYear = remainMili / year
        if (passYear > 0) {
            y = Math.round(passYear)
            remainMili = remainMili % year
        }
    }
    if (remainMili > month) {
        let passMonth = remainMili / month
        if (passMonth > 0) {
            m = Math.round(passMonth)
            remainMili = remainMili % month
        }
    }
    if (remainMili > day) {
        let passDay = remainMili / day
        if (passDay > 0) {
            d = Math.round(passDay)
        }
    }
    let str = ""
    if (y) {
        str += y + " Years "
    }
    if (m || d) {
        str += m + " Month "
        if (d) {
            str += d + " Day"
        }
    }
    return str
}

export default calcAge