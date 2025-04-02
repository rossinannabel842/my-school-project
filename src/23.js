function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

console.log(addDays(Date.now(), 30)); // outputs: Fri Oct 14 2023 18:16:59 GMT+0800 (中国标准时间)
