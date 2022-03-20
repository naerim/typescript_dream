{
  type Video = {
    title: string;
    author: string;
  };
  // [1, 2].map((item) => item * item); // [1,4]

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in T가 가지고 있는 key들 중 하나(P), 해당하는 value값 설정
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
    // 없었던 다른 타입은 넣을 수 없음
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // video.title =  error 발생! readonly이기 때문에

  // 재사용성이 매우 높음!

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title?: string;
  //   readonly author?: string;
  // };

  type Nullable<T> = {
    // 기존 value 쓰거나 null
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    // null이 가능하게 됨!
    title: null,
    author: null,
  };
}
