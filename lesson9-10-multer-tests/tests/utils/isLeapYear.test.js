const isLeapYear = require("./isLeapYear");
/*
1. Ожидаем год в формате целое число. 
2. Ответ true, false или ошибка.

2008 - true
2003 - false
1900 - false
2000 - true

41 или меньше - ошибка "Высокосный год считается с 42 н.е"
2008.5 - ошибка "Год должен быть целым числом"
() - ошибка "Нужно передать год как целое положительное число"
"2008" - ошибка "Параметр должен быть Number целое положительное число"
false - ошибка "Параметр должен быть Number целое положительное число"
true - ошибка "Параметр должен быть Number целое положительное число"
{} - ошибка "Параметр должен быть Number целое положительное число"
[] - ошибка "Параметр должен быть Number целое положительное число"
*/

describe("test isLeapYear function", ()=>{
   test("2008 - true", ()=>{
    expect(isLeapYear(2008)).toBe(true);
   });

   test("2003 - false", ()=>{
    expect(isLeapYear(2003)).toBe(false);
   });

   test("2000 - true", ()=>{
    expect(isLeapYear(2000)).toBe(true);
   });

   test("1900 - false", ()=>{
    expect(isLeapYear(1900)).toBe(false);
   });

   test("41 - error 'Высокосный год считается с 42 н.е'", ()=>{
    expect(()=>isLeapYear(41)).toThrow("Высокосный год считается с 42 н.е");
   });

   test("2008.5 - error 'Год должен быть целым числом'", ()=>{
    expect(()=>isLeapYear(2008.5)).toThrow("Год должен быть целым числом");
   });

   test("() - error 'Нужно передать год как целое положительное число'", ()=>{
    expect(()=>isLeapYear()).toThrow("Нужно передать год как целое положительное число");
   });

   test("'2008' - error 'Параметр должен быть Number целое положительное число'", ()=>{
    expect(()=>isLeapYear("2008")).toThrow("Параметр должен быть Number целое положительное число");
   });

   test("'false' - error 'Параметр должен быть Number целое положительное число'", ()=>{
    expect(()=>isLeapYear(false)).toThrow("Параметр должен быть Number целое положительное число");
   });

   test("'true' - error 'Параметр должен быть Number целое положительное число'", ()=>{
    expect(()=>isLeapYear(true)).toThrow("Параметр должен быть Number целое положительное число");
   });

   test("{} - error 'Параметр должен быть Number целое положительное число'", ()=>{
    expect(()=>isLeapYear({})).toThrow("Параметр должен быть Number целое положительное число");
   });

   test("[] - error 'Параметр должен быть Number целое положительное число'", ()=>{
    expect(()=>isLeapYear([])).toThrow("Параметр должен быть Number целое положительное число");
   });
})