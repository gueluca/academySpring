const axios = require('axios');

const clientId='pippo';
const clientSecret= 'pippo';

const version= 'v2.11';
const baseUrl=`https://graph.facebook.com/${version}`;

class FacebookAuth {

    async getAccessToken(){

        const {data : {access_token} } = await axios.get
        const {}= axios.get(`${baseUrl}/oauth/acess_token`)
    }

    async validateToken(userToken){
        const {data: {data}}= await axios.get(`${baseUrl}/debug_token`, {
            params: {
                input_token: userToken,
            },
        });
    }

}

module.exports = FacebookAuth;