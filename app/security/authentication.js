const xoauth2 = require('xoauth2');
const {MAIL, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REFRESH_TOKEN} = process.env;

const xoauth2gen = xoauth2.createXOAuth2Generator({
    user: MAIL,
    clientId: OAUTH_CLIENT_ID,
    clientSecret: OAUTH_CLIENT_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN,
});

module.exports.authenticate = {
    credentials: xoauth2gen.options,
    accessToken: xoauth2gen.getToken((err, token, accessToken) => accessToken)
};