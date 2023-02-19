let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("Введите первое число", "");
    this.b = +prompt("Введите второе число", "");
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
