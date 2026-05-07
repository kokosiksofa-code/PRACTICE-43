// Тип аннотации — указываем тип переменной явно
let id: number = 5; // Переменная id может содержать только числа
let company: string = "Corporation"; // Переменная company может содержать только строки
let isPublished: boolean = true; // Переменная isPublished может содержать только true/false
let tags: string[] = ["TypeScript", "JavaScript"]; // Массив, содержащий только строки

// any (строгость отключать не нужно — просто явное использование any)
let x: any = 10; // Тип any отключает проверку типов — переменная может хранить что угодно

console.log({ id, company, isPublished, tags, x }); // Выводим все переменные в виде объекта

// Интерфейсы и опциональные поля
interface User {
    id: number; // Обязательное поле — должно быть всегда
    name: string; // Обязательное поле — имя пользователя
    age?: number; // Опциональное поле (знак ?) — может отсутствовать
    greet: (message: string) => void; // Метод, который принимает строку и ничего не возвращает
}

const user: User = {
    id: 1, // Присваиваем id
    name: "Sofa", // Присваиваем имя
    greet: (message: string) => console.log(message), // Реализуем метод greet — выводит сообщение в консоль
};

console.log(user.age === undefined ? "No age of the user" : user.age); // Проверяем, указан ли возраст
user.greet("Hello from User.greet()"); // Вызываем метод greet с приветственным сообщением

// Типы функций: параметры и return type
function concatValues(a: string, b: string): string { // Функция принимает две строки и возвращает строку
    return a + " " + b; // Объединяем строки через пробел
}

console.log(concatValues("hello", "world")); // Вызываем функцию и выводим результат

// Union (строки или число) + type alias
type Id = string | number; // Создаём псевдоним типа — Id может быть строкой ИЛИ числом

function printId(value: Id): void { // Функция принимает Id (строка или число) и ничего не возвращает
    console.log(`ID is equal to ${value}`); // Выводим значение ID
}

printId("ID 123"); // Вызываем со строкой
printId(123); // Вызываем с числом

// Intersection (склейка двух интерфейсов)
interface BusinessPartner {
    name: string; // Имя партнёра
    creditScore: number; // Кредитный рейтинг
}

interface UserIdentity {
    id: number; // Идентификатор пользователя
    email: string; // Email пользователя
}

type Employee = BusinessPartner & UserIdentity; // Intersection — объединяем оба интерфейса (должны быть ВСЕ поля)

function signContract(employee: Employee): void { // Функция принимает объект типа Employee
    console.log(
    `Contract signed by ${employee.name}, email: ${employee.email}, creditScore: ${employee.creditScore}` // Выводим данные сотрудника
    );
}

signContract({
    name: "Sofa", // Имя из BusinessPartner
    creditScore: 800, // Кредитный рейтинг из BusinessPartner
    id: 23, // ID из UserIdentity
    email: "sofa@gmail.com", // Email из UserIdentity
});

// Enum — перечисление возможных значений
enum LoginError {
    Unauthorized = "unauthorized", // Ошибка: пользователь не авторизован
    NoUser = "no_user", // Ошибка: пользователь не найден
    WrongCredentials = "wrong_credentials", // Ошибка: неверные учётные данные
    Internal = "internal", // Ошибка: внутренняя ошибка сервера
}

function printLoginErrorMessage(error: LoginError): void { // Функция принимает значение из enum LoginError
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
class StorageContainer<T> { // Класс-хранилище, T — параметр типа (будет заменён на конкретный тип)
    private contents: T[] = []; // Приватный массив элементов типа T

    addItem(item: T): void { // Метод добавления элемента типа T
    this.contents.push(item); // Добавляем элемент в массив
    }

    getItem(index: number): T | undefined { // Метод получения элемента по индексу (может вернуть undefined)
    return this.contents[index]; // Возвращаем элемент или undefined, если индекс не существует
    }
}

const usernames = new StorageContainer<string>(); // Создаём хранилище для строк
usernames.addItem("Sofa"); // Добавляем строку "Sofa"
usernames.addItem("Echo BR"); // Добавляем строку "Echo BR"
console.log(usernames.getItem(0)); // Получаем элемент с индексом 0 — "Sofa"

const friendCounts = new StorageContainer<number>(); // Создаём хранилище для чисел
friendCounts.addItem(23); // Добавляем число 23
friendCounts.addItem(56); // Добавляем число 56
console.log(friendCounts.getItem(1)); // Получаем элемент с индексом 1 — 56

// Readonly — поля только для чтения
interface EmployeeReadOnly {
    readonly employeeId: number; // Поле только для чтения — нельзя изменить после создания
    name: string; // Обычное поле — можно изменять
    readonly startDate: Date; // Поле только для чтения — дата начала работы фиксирована
    department: string; // Обычное поле — можно изменять
}

const emp: EmployeeReadOnly = {
    employeeId: 1, // Устанавливаем ID сотрудника (изменить потом нельзя)
    name: "Sofa", // Устанавливаем имя (можно изменить)
    startDate: new Date(), // Устанавливаем дату начала работы (изменить нельзя)
    department: "Finance", // Устанавливаем отдел (можно изменить)
};

emp.name = "Jessica"; // Изменяем имя — это разрешено, так как name не readonly
// emp.employeeId = 2; // Нельзя: employeeId is readonly — TypeScript выдаст ошибку
console.log(emp); // Выводим объект сотрудника со всеми изменениями