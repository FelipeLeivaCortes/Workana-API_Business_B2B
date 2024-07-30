

const handleRequestError = (res, code, message, description=null) => {
    if (description) {
        console.log(description);
    }
    res.status(code);
    res.send({error: message});
}

module.exports = handleRequestError;