const assert = require('assert');
const app = require('./app');

// Тест 1: Проверка сложения
try {
    assert.strictEqual(app.add(2, 3), 5);
    console.log("Тест прошел: 2 + 3 = 5");
} catch (e) {
    console.error("Тест упал: Ожидалось 5, получено " + app.add(2, 3));
    process.exit(1); // Сообщаем Jenkins, что все плохо
}