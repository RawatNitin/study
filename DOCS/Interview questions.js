// ***** CSS *******

<div class="red green">green</div>
<div class="green red">red</div>

.green{
  color: green;
}

.red{
  color: red;
}


box - sizing
how do inline - block react to height and width properties
BEM(Blocks Elements Modifiers) ?
  why inline block ? What properties work on inline block ?

    // ****** JS  Code snippets*****
    let arr = [-1, 0, 1, 2];
arr.filter(x => x);
arr.filter(x => 1);

function sayHi() {
  phrase = "Hello";

  if (false) {
    var phrase;
  }

  alert(phrase);
}
sayHi();
console.log(phrase);

(function () {
  var a = b = 3;
  console.log(a, b);
})()

reduce function?

// ******************************

// 
web vitals
WeakMap and WeakSet ?
  promise.then(f1).catch(f2); VS promise.then(f1, f2);
pollyfills and babel
What happens when I visit a URL ?
  TTFB
Critical Rendering Path
uses of getDerivedStateFromProps
custom hook to fetch
strict mode in react
How to investigate if react app is slow
react app optimization ?
  which to use functional or Class ?
    React useCallback vs useMemo ?
      React fibre ? Synthetic events ?
        How many copies of virtual DOM does react have ?
          how do sagas work ? Generators ?
            How React event system is different from DOM events.
Saga which prints "Hello" after 1 second without using setTimout or setInterval
pub / sub
Reduce pollyfills



class My {
  render() {
    return <p></p>
  }
}

// ******************


componentDidUpdate({ name }){
  console.log(name);
  dispatch(updateName(newName));
  console.log(name);
}

// ******* Webpack *****
1. What is cache busting and how to do it in webpack ? if the filename is changed everytime in the build then how does webpack know which.js is to be added in script tag ?
  2. what are rules and plugins in Webpack ?
    3. How does lazy loading work ?

      // ********* Algos ********
      1. Get longest palindrome of a string = "forgeeksskeegfor" -- > 'geeksskeeg'
2. Divide an array into equal sum sub arrays.
3. Remove duplicates from array.
4. Maximum subarray Sum: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
5. Create own split method
6. input: aabbcddd-- > output: a2b2c1d3
7. how are you -> yoU arE hoW


// ****** UNIT Testing ******
Mount: Full rendering including all hooks and children in render
Shallow: Rendering but no children
Render: Only render function with all children

Basic fundamental of unit testing ?
  what is to be mocked and what not ?
    what if a mock has been called already ? will it be considered in next it statement ?
