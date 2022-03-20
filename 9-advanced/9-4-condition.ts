type Check<T> = T extends string ? boolean : number; // 조건이 맞으면 어떤 타입을 선택한다.
type Type = Check<string>; // boolean

// 공식 문서
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<"a">; // "string"
type T2 = TypeName<() => void>; // "function"
