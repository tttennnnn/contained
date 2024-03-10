const url = 'http://localhost:3000/user/auth';
const user = 'user1';
const authStr = 'auth1';

const test_auth = async function(url, user, authStr) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'user': user,
            'authStr': authStr
        })
    });
    if (response.status == 200) {
        const data = await response.json();
        console.log(data.auth);
    } else {
        throw new Error('Bad response from url');
    }
    return;   
}

test_auth(url, user, authStr).then();