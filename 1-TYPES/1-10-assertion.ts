{
    /**
     * Type Assertions 💩
     */
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers()!;
    numbers!.push(2); // 😱 무조건 null이 아니라는 뜻, undefind가 아니라는 뜻

    const button = document.querySelector('class')!;

}