// Valid Parentheses
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true

const input = "()[]{}";

// Version-01
const validParenthese = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < map.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }

    return !stack.length;
  }
};
validParenthese(input);

// Version-02
// var isValid = function (s) {
//   s = s.split("");
//   var stack = [];
//   for (var z of s) {
//     if (z === "(" || z === "{" || z === "[") {
//       stack.push(z);
//     } else {
//       var top = stack[stack.length - 1];

//       if (
//         (z === ")" && top === "(") ||
//         (z === "]" && top === "[") ||
//         (z === "}" && top === "{")
//       )
//         stack.pop();
//       else return false;
//     }
//   }

//   console.log(stack);
//   return stack.length === 0;
// };
// isValid(input);

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
