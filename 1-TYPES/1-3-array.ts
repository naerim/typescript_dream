{
    // Array
    const fruits: string[] = ['๐', '๐'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {
        // readonly๋ฅผ ์ด์ฉํ ๋๋ string[]์ ์ด์ฉํด์ผ ํจ
        // ๊ฐ์ ๋ณ๊ฒฝํ  ์ ์์ !
        // ex) fruits.push ๋ถ๊ฐ
    }

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123
    const [name, age] = student;
}