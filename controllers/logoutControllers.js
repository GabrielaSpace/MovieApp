

const logout = (req, res) => {
    res.clearCookie("token").send('Goodbye! <br><br> <a href="/login">Authenticate again</a>');
}

module.exports = {
    logout
}