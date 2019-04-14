'use strict';

let money = +prompt('Ваш бюджет на месяц?',''),
    data = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'),
    answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
    answer2 = prompt('Во сколько обойдется?');
let appData = {
    budget: money,
    timeData: data,
    expenses : {
        answer1: answer2,
    },

    optionalExpenses : {

    },

    income : [],
    savings: false,

}; 
alert('Ваш бюджет на один день = ' + (money - answer2)/30);   
console.log(appData.budget);
console.log(appData.timeData);
console.log(answer1);
console.log(appData.expenses.answer1);