{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT = 7; // class level : 객체가 만들어질때 마다 생성되지 않음
        coffeeBeans: number = 0; // instance (object) level

        constructor(cofeeBeans: number) {
            this.coffeeBeans = cofeeBeans;
        }

        // static은 오브젝트를 생성하지 않고도 class level에서 사용할 수 있다.
        static makeMachine(coffeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(14);
    console.log(maker2);

    const maker3 = CoffeeMaker.makeMachine(3);
}