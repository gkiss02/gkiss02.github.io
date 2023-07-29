function getValidDate(date) {
    const validDate = date.toString().split(' ')[0];
    const time = date.toString().split(' ')[1];
    const hour = time.split(':')[0].padStart(2, '0');
    const min = time.split(':')[1]
    return new Date(validDate + ' ' + hour + ':' + min)
}

export default getValidDate;