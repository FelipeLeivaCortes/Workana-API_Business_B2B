
const isValidDate   = (myDate) => {
    try {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!dateRegex.test(myDate)) {
            return false;
        }
        
        const date = new Date(myDate);
        
        return (date.toString() !== 'Invalid Date' &&  !isNaN(date.getTime()));

    } catch(error) {
        return false;
    }
}

module.exports = isValidDate;