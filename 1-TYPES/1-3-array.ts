{
    // Array
    const fruits: string[] = ['🍅', '🍌'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {
        // readonly를 이용할때는 string[]을 이용해야 함
        // 값을 변경할 수 없음 !
        // ex) fruits.push 불가
    }

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;
}