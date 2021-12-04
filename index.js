/**
 * JP BEHRENS <hello@jpbehrens.de>
 * random-numbers
 */

function randomNumbers({ quantity = 1, sort = 'asc', uniqe = true, min = 0, max = 99, detail = false }) {
    const selected = [];
    const notSelected = [];
    let isValid = true;
    let loops = 0;
    let errorCode = 0;
    let errorMsg = null;

    const validation = () => {
        if (quantity > (max - min) && uniqe === true) {
            errorCode = 101;
            errorMsg = 'More numbers are needed than are available in the range.';
            isValid = false;
        }

        if (max < min) {
            errorCode = 102;
            errorMsg = 'The maximum number must not be less than the minimum number.';
            isValid = false;
        }
    }

    const sortNumbs = (numbs) => {
        // Sorting the Numbers
        if (sort === 'asc') { numbs.sort((a, b) => a - b); } // Ascending
        if (sort === 'desc') { numbs.sort((a, b) => b - a); } // Descending
        return numbs;
    }

    const selectedNumbs = () => {
        if (isValid === true) {
            while (selected.length < quantity) {
                const randNum = Math.floor(Math.random() * (max - min) + min);
                uniqe !== true || !selected.includes(randNum) && uniqe === true ? selected.push(randNum) : null;
                loops++;
            }
            return sortNumbs(selected);
        }
    }

    const notSelectedNumbs = () => {
        for (let i = min; i < max; i++) {
            !selected.includes(i) ? notSelected.push(i) : null;
        }
        sortNumbs(notSelected);
    }

    // INIT
    validation();
    selectedNumbs();
    notSelectedNumbs();

    // RETURN 
    return !isValid ? { errorCode, errorMsg } : (detail !== true) ? selected : { selected: selected, notSelected: notSelected, loops };
}

module.exports = {randomNumbers}