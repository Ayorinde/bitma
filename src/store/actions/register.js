import axios from 'axios';


const register = (url, firstname, lastname, phone, email, password) => ({
    type: 'REGISTER',
    payload: axios.post(url, {
        firstname, lastname, email, password, phone
    })
});

export const onRegister = (firstname, lastname, phone, email, password) => async (dispatch) => {
    const url = `${process.env.URL}/user`
    dispatch(register(url, firstname, lastname, phone, email, password))
}