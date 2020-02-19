function greeter(person: string) {
  return `Hello, ${person}`;
}

const element = document.createElement('div');
const user = 'Jane User';
element.innerHTML = greeter(user);

document.body.appendChild(element);

// Jest test
function simpletest(a: number, b: number) {
  return a + b;
}

export { simpletest };
