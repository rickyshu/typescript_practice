type User = {
  id: number;
  name: string;
};

type Employee = User & {
  email: string;
};

const people: (User | Employee)[] = [
  { id: 1, name: "hoin" },
  { id: 2, name: "Sally" },
  { id: 3, name: "John", email: "exmaple@gmail.com" },
  { id: 4, name: "Mike", email: "example2@naver.com" },
];

people.forEach((person) => {
  if ("email" in person) {
    console.log(`My employee email is ${person.email}`);
  } else {
    console.log(`I am just a user named ${person.name}`);
  }
});
//위와 같은 동일한 기능을 함수를 뺴서 만든다고 했을 때
people.forEach((person) => {
  if (isEmployee(person)) {
    console.log(`My employee email is ${person.email}`); //인식을 하지 못한다. 코드에는 별 차이가 없음에도 불구하고
  } else {
    console.log(`I am just a user named ${person.name}`);
  }
});

//아래 : person is Employee return type을 명시하지 않으면 에러가 발생한다.return 값이 참이면 무조건 employee을 의미 하니까, 함수의 true 값이 확정된다고 생각하면 된다.
function isEmployee(person: User | Employee): person is Employee {
  return "email" in person;
}

//typeOf or instanceOf을 사용해서 처리하는 것도 가능하다.

//https://courses.webdevsimplified.com/typescript-simplified/?utm_source=youtube&utm_medium=video-description&utm_term=video-id-Wksz1DnJ2VM
