// CALCULATOR TESTING

// describe("Calculator", function () {
//   beforeEach(function () {
//     calc = new Calculator();
//   });
//   var calc = new Calculator();

//   describe("Addition tests", function () {
//     it("should return 42", function () {
//       calc.add(20);
//       calc.add(22);
//       expect(calc.value).toBe(42);
//     });
//     it("should return 26", function () {
//       calc.add(7);
//       calc.add(19);
//       expect(calc.value).toBe(26);
//     });
//     it("should return an error if we don't supply two numbers", function () {
//       spyOn(window, "alert");
//       calc.add("Hitchhikers");
//       expect(window.alert).toHaveBeenCalledWith("Error");
//     });
//   });
// });

// // DRINK ABOUT TESTING

// describe("My whatCanIDrink", function () {
//   beforeEach(function () {
//     drink = new whatCanIDrink();
//   });
//   describe("Checks age", function () {
//     it("should exist", function () {
//       expect(whatCanIDrink).toBeDefined();
//     });

//     it("should return drink toddy when called as whatCanIDrink(13)", function () {
//       var result = whatCanIDrink(13);
//       expect(result).toBe("Drink Toddy");
//     });

//     it("should return drink coke when called as whatCanIDrink(17)", function () {
//       var result = whatCanIDrink(17);
//       expect(result).toBe("Drink Coke");
//     });

//     it("should return drink beer when called as whatCanIDrink(20)", function () {
//       var result = whatCanIDrink(20);
//       expect(result).toBe("Drink Beer");
//     });

//     it("should return drink whisky when called as whatCanIDrink(129)", function () {
//       var result = whatCanIDrink(129);
//       expect(result).toBe("Drink Whisky");
//     });

//     it("should return Sorry. I can’t tell what drink because that age is incorrect! when called as whatCanIDrink(131)", function () {
//       var result = whatCanIDrink(131);
//       expect(result).toBe(
//         "Sorry. I can’t tell what drink because that age is incorrect!"
//       );
//     });

//     it("should contain Drink when called as whatCanIDrink(17)", function () {
//       var result = whatCanIDrink(10).indexOf("Drink");
//       expect(result).not.toEqual(-1);
//     });
//   });
// });

// FizzBuzz testing

describe("My fizzBuzz function", function () {
  beforeEach(function () {
    fizzbuzz = new fizzBuzz();
  });
  describe(" returns number, fizz, buzz ad fizzbuzz", function () {
    it("should exsist", function () {
      expect(fizzBuzz).toBeDefined();
    });

    it("should return FizzBuzz when called as fizzBuzz(15)", function () {
      var result = fizzBuzz(15);
      expect(result).toBe("FizzBuzz");
    });

    it("should return Fizz when called fizzBuzz(3)", function () {
      var result = fizzBuzz(3);
      expect(result).toBe("Fizz");
    });
    it("should return Buzz when called fizzBuzz(5)", function () {
      var result = fizzBuzz(5);
      expect(result).toBe("Buzz");
    });
    it("should return Number when called fizzBuzz(2)", function () {
      var result = fizzBuzz(2);
      expect(result).not.toEqual("Fizz, fizzBuzz, Buzz");
    });
  });
});
