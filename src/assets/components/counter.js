// MultiplyFromDenominations.js
import React from 'react';
import { multiplyDenomCalculator } from '../hooks/multiplyDenominations';

export default function MultiplyFromDenominations() {
    const { inputs, handleChange, calculateTotal, denominationTotals } = multiplyDenomCalculator();

    const displayNameMap = {
        hundreds: '$100',
        fifties: '$50',
        twenties: '$20',
        tens: '$10',
        fives: '$5',
        twos: '$2',
        ones: '$1',
        dollarCoins: '$1 Coin',
        fiftyCent: '50¢',
        quarters: '25¢',
        dimes: '10¢',
        nickels: '5¢',
        pennies: '1¢'
    };

    return (
        <div>
            <section>
                <h3>Denomination Count:</h3>
                <form>
                    {Object.keys(inputs).map(key => (
                        <div key={key}>
                            <label>{displayNameMap[key] || key}: </label>
                            <input
                                type="number"
                                name={key}
                                value={inputs[key]}
                                onChange={handleChange}
                                placeholder={`Enter number of ${displayNameMap[key] || key}`}
                            />
                        </div>
                    ))}
                </form>
            </section>
            <section>
                <h3>Denomination Totals:</h3>
                <ul>
                    {Object.keys(denominationTotals).map(key => (
                        <li key={key}>{displayNameMap[key] || key}: ${denominationTotals[key].toFixed(2)}</li>
                    ))}
                </ul>
                <div>Total Value: ${calculateTotal().toFixed(2)}</div>
            </section>
        </div>
    );
}
