let a = 10;
{
  function fn() {
    console.log(a + " Inside Function");
  }
  console.log(a + " Before Function");
  fn();
  console.log(a + " After Function");
}
console.log(a + " Global");
