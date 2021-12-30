{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("Not valid number!");
    }
    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("Not valid number!");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  // 제너릭: 사용하는 사람이 타입을 결정할 수 있음
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("Not valid number!");
    }
    return arg;
  }
  const numer = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
