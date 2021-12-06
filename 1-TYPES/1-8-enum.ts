{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Monday);
    let day: Days = Days.Saturday;
    day = Days.Thursday;
    day = 10; // 해당하지 않는 값 넣었는데 에러안남
    console.log(day);

    // enum 대신 union type 사용하기!
    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday';
}