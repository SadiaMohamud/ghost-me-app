import axios from 'axios';
import { useFormState } from 'react-hook-form';

const instance = axios.create({
    baseURL:' https://ghostmeme.api.hscc.bdpa.org/v1',
    headers: {
        'key': 'tc159313-1fa1-4cee-9fdd-984b925628bf',
    },
});

export default {
    getAllMemes: () => 
    instance({
        'method':'GET',
        'url':'/memes',
        transformResponse: [function (data) {
            const json = JSON.parse(data);
            return json;
        }],
    }),
    postNewUser: (user) =>
    instance({
        'method': 'POST',
        'url': '/users',
        param: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            username: user.username,
            imageBase64: user.imageBase64
        },
        transformResponse: [function (data) {
            const json = JSON.parse(data);
            return json;
        }]
    })
}