"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Тип аннотации — указываем тип переменной явно
let id = 5; // Переменная id может содержать только числа
let company = "Corporation"; // Переменная company может содержать только строки
let isPublished = true; // Переменная isPublished может содержать только true/false
let tags = ["TypeScript", "JavaScript"]; // Массив, содержащий только строки
// any (строгость отключать не нужно — просто явное использование any)
let x = 10; // Тип any отключает проверку типов — переменная может хранить что угодно
console.log({ id, company, isPublished, tags, x }); // Выводим все переменные в виде объекта
const user = {
    id: 1, // Присваиваем id
    name: "Sofa", // Присваиваем имя
    greet: (message) => console.log(message), // Реализуем метод greet — выводит сообщение в консоль
};
console.log(user.age === undefined ? "No age of the user" : user.age); // Проверяем, указан ли возраст
user.greet("Hello from User.greet()"); // Вызываем метод greet с приветственным сообщением
// Типы функций: параметры и return type
function concatValues(a, b) {
    return a + " " + b; // Объединяем строки через пробел
}
console.log(concatValues("hello", "world")); // Вызываем функцию и выводим результат
function printId(value) {
    console.log(`ID is equal to ${value}`); // Выводим значение ID
}
printId("ID 123"); // Вызываем со строкой
printId(123); // Вызываем с числом
function signContract(employee) {
    console.log(`Contract signed by ${employee.name}, email: ${employee.email}, creditScore: ${employee.creditScore}` // Выводим данные сотрудника
    );
}
signContract({
    name: "Sofa", // Имя из BusinessPartner
    creditScore: 800, // Кредитный рейтинг из BusinessPartner
    id: 23, // ID из UserIdentity
    email: "sofa@gmail.com", // Email из UserIdentity
});
// Enum — перечисление возможных значений
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "no_user";
    LoginError["WrongCredentials"] = "wrong_credentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
function printLoginErrorMessage(error) {
    switch (error) { // Проверяем, какая именно ошибка
        case LoginError.Unauthorized: // Если ошибка Unauthorized
            console.log("User not authorized"); // Выводим сообщение
            return; // Выходим из функции
        case LoginError.NoUser: // Если ошибка NoUser
            console.log("No user was found with that username"); // Выводим сообщение
            return; // Выходим из функции
        case LoginError.WrongCredentials: // Если ошибка WrongCredentials
            console.log("Wrong credentials"); // Выводим сообщение
            return; // Выходим из функции
        default: // Для всех остальных случаев (включая Internal)
            console.log("Internal error"); // Выводим сообщение о внутренней ошибке
            return; // Выходим из функции
    }
}
printLoginErrorMessage(LoginError.Unauthorized); // Тестируем ошибку Unauthorized
printLoginErrorMessage(LoginError.NoUser); // Тестируем ошибку NoUser
printLoginErrorMessage(LoginError.WrongCredentials); // Тестируем ошибку WrongCredentials
printLoginErrorMessage(LoginError.Internal); // Тестируем ошибку Internal
// Generics — обобщённые типы для работы с разными типами данных
class StorageContainer {
    contents = []; // Приватный массив элементов типа T
    addItem(item) {
        this.contents.push(item); // Добавляем элемент в массив
    }
    getItem(index) {
        return this.contents[index]; // Возвращаем элемент или undefined, если индекс не существует
    }
}
const usernames = new StorageContainer(); // Создаём хранилище для строк
usernames.addItem("Sofa"); // Добавляем строку "Sofa"
usernames.addItem("Echo BR"); // Добавляем строку "Echo BR"
console.log(usernames.getItem(0)); // Получаем элемент с индексом 0 — "Sofa"
const friendCounts = new StorageContainer(); // Создаём хранилище для чисел
friendCounts.addItem(23); // Добавляем число 23
friendCounts.addItem(56); // Добавляем число 56
console.log(friendCounts.getItem(1)); // Получаем элемент с индексом 1 — 56
const emp = {
    employeeId: 1, // Устанавливаем ID сотрудника (изменить потом нельзя)
    name: "Sofa", // Устанавливаем имя (можно изменить)
    startDate: new Date(), // Устанавливаем дату начала работы (изменить нельзя)
    department: "Finance", // Устанавливаем отдел (можно изменить)
};
emp.name = "Jessica"; // Изменяем имя — это разрешено, так как name не readonly
// emp.employeeId = 2; // Нельзя: employeeId is readonly — TypeScript выдаст ошибку
console.log(emp); // Выводим объект сотрудника со всеми изменениями
//# sourceMappingURL=pract.js.map