{
    /**
     * Type Inference
     */
    let text = 'hello';
    function print(message = 'hello') {
        console.log(message);
    }
    print('hello');

    // 자동으로 추론된다 -> 하지만 타입 명시하는 것이 더 좋음!
    function add(x: number, y: number) {
        return x + y;
    }
    const result = add(1, 2);
}