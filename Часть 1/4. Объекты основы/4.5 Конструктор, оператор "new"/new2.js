function Calculator() {
  (this.sum = function () {
    return this.a + this.b;
  }),
    (this.mul = function () {
      return this.a * this.b;
    }),
    (this.read = function () {
      this.a = +prompt("Введите первое число", "");
      this.b = +prompt("Введите второе число", "");
    });
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
