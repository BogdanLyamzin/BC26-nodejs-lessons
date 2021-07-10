const isLeapYear = (year)=>{
    if(year === undefined){
        throw new Error("Нужно передать год как целое положительное число");
    }
    if(typeof year !== "number"){
        throw new Error("Параметр должен быть Number целое положительное число");
    }
    if(!Number.isInteger(year)){
        throw new Error("Год должен быть целым числом");
    }
    if(year < 42){
        throw new Error("Высокосный год считается с 42 н.е");
    }
    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (days === 29);
}

module.exports = isLeapYear;