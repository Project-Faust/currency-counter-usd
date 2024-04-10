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
        <div className='container border border-3 border-dark bg-secondary-subtle text-dark'>
            <div className='row justify-content-center p-3'>
                <section className='col-lg-5 col-md-12 d-flex flex-column border border-dark bg-dark p-2 m-3'>
                    <h3 className='text-center border border-3 rounded bg-light p-1 m-3'>Denomination Count</h3>
                    <form
                        className='text-end border border-3 rounded bg-light m-3'>
                        {Object.keys(inputs).map(key => (
                            <div key={key} className='input-group'>
                                <label><strong>{displayNameMap[key] || key}</strong></label>
                                <input
                                    className='text-center mx-3 my-1'
                                    type="number"
                                    name={key}
                                    value={inputs[key]}
                                    onChange={handleChange}
                                    pattern="[0-9]*"
                                    placeholder={`${displayNameMap[key] || key}`}
                                />
                            </div>
                        ))}
                    </form>
                </section>
                <section className='col-lg-5 col-md-12 d-flex flex-column border border-dark bg-dark p-2 m-3'>
                    <h3 className='text-center border border-3 rounded bg-light p-1 m-3'>Denomination Totals</h3>
                    <ul className='d-flex flex-column align-items-center border border-3 rounded bg-light p-2 m-3 flex-grow-1 justify-content-between'>
                        {Object.keys(denominationTotals).map(key => (
                            <li key={key} className='list-group-item text-center p-3my-1'><strong>${denominationTotals[key].toFixed(2)}</strong>:  ({displayNameMap[key]})</li>
                        ))}
                    </ul>
                </section>
            </div>
            <div className='text-center p-3'>
                <h4>
                    Total Value: ${calculateTotal().toFixed(2)}
                </h4>
            </div>
        </div >
    );
}
