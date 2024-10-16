String Calculator
    
    A simple JavaScript implementation of a String Calculator that can sum numbers in a string using various delimiters, 
    including custom delimiters and newlines. The calculator also handles exceptions for negative numbers.

Features

    Multiple Delimiters: Supports commas, newlines, and custom delimiters defined in the input string.
    Negative Number Handling: Throws an error when negative numbers are present in the input.
    Flexible Input: Can sum any number of numbers in a string format.
    
Installation
  
    git clone https://github.com/afAditya/String_Calculator_TDD.git

    cd String_Calculator_TDD
 
Install dependencies:

    npm install
    
Usage

    Use the add function to sum numbers provided in a string format. You can include numbers separated by commas, newlines, or custom delimiters.
    If negative numbers are included, the function will throw an error indicating which negative numbers are not allowed.

Running Tests

    npm test
