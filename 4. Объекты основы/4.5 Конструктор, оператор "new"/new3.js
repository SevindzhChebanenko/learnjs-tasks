function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Введите первое число", "");
  };
}
let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
