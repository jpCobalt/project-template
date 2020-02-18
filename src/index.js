function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'Hello Webpack';

    let es6Test = [1,2,3,4];
    es6Test.forEach((item)=>{
        console.log('iterate through items', item);
    });
  
    return element;
  }
  
  document.body.appendChild(component());


  // Jest test
  function simpletest(a,b){
      return a+b;
  }

  module.exports = simpletest;