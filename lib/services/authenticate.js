const table = require('../config').table.user;
const query = require('./query');

async function authenticate(user, authStr) {
    const auth = await query(
        `SELECT user FROM ${table}
        WHERE user="${user}" AND authentication_string="${authStr}"`
    );

    return { 
        "auth": !(auth === undefined || auth.length == 0)
    };
}

module.exports = authenticate;