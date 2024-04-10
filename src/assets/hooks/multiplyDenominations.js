// useDenominationCalculator.js
import { useState, useEffect } from 'react';

const denominations = {
    hundreds: 100,
    fifties: 50,
    twenties: 20,
    tens: 10,
    fives: 5,
    twos: 2,
    ones: 1,
    dollarCoins: 1,
    fiftyCent: 0.5,
    quarters: 0.25,
    dimes: 0.10,
    nickels: 0.05,
    pennies: 0.01
};

export function multiplyDenomCalculator() {
    const [inputs, setInputs] = useState({
        hundreds: '',
        fifties: '',
        twenties: '',
        tens: '',
        fives: '',
        twos: '',
        ones: '',
        dollarCoins: '',
        fiftyCent: '',
        quarters: '',
        dimes: '',
        nickels: '',
        pennies: ''
    });

    const [denominationTotals, setDenominationTotals] = useState({});

    useEffect(() => {
        const newTotals = {};
        Object.keys(inputs).forEach(key => {
            const count = parseFloat(inputs[key]) || 0;
            newTotals[key] = count * denominations[key];
        });
        setDenominationTotals(newTotals);
    }, [inputs]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const calculateTotal = () => {
        return Object.values(denominationTotals).reduce((acc, curr) => acc + curr, 0);
    };

    return { inputs, handleChange, calculateTotal, denominationTotals };
};