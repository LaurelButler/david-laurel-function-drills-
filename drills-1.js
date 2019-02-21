const getYearOfBirth = age => {
    if (age < 0) {
        throw new Error('Age can not be negative');
    }
    return (2019 - age) - 1;
};

const createGreeting = (name, age) => {
    const yob = getYearOfBirth(age);

    if (name === undefined || age === undefined) {
        throw new Error('Arguments not valid');
    }

    if (typeof age !== 'number' || typeof name !== 'string') {
        throw new TypeError();
    }
    return `Hello, my name is ${name} and I am ${age} years old. I was born in ${yob}`;
};

try {
    const greetings1 = createGreeting('Laurel', 24);
    console.log(greetings1);
} catch (e) { console.log(e); }