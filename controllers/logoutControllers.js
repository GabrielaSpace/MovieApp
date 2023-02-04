const logout = (req, res) => {
    res.clearCookie("token").send('Goodbye! <br><br> <a href="/auth/google">Authenticate again</a>');
}

module.exports = {
    logout
}