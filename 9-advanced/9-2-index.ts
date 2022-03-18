{
  const obj = {
    name: "ellie",
  };
  obj.name; // ellie
  obj["name"]; // ellie

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string - name 타입을 쓰는 것
  const text: Name = "hello";

  type Gender = Animal["gender"]; // "male" | "female";

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "name";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "ellie",
    gender: "male",
  };
}
