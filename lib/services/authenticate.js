const query = require('./query');

async function authenticate(user, authStr) {
    const auth = await query(
        `SELECT user FROM user 
        WHERE user="${user}" AND authentication_string="${authStr}"`
    );

    return { 
        "auth": !(auth === undefined || auth.length == 0)
    };
}

module.exports = authenticate;