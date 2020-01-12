import './styles.scss'

import './bootstrap/bootstrap.js'

import axios from 'axios'
import {
    api,
    error
} from './constants'

// JS


const buttonSubmit = document.querySelector('#buttonSubmit');



buttonSubmit.addEventListener('click', async (e)=> {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let name = document.querySelector('#passwordConfirm').value;

    try {
        const response = await axios.post(api.REGISTER, {
            email,
            password,
            name
        });
        console.log(response.error);
    } catch(error) {
        console.log(error);
    }
    
});

