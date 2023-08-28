import axios from 'axios';
const URL = 'http://localhost:8000'
export const authenticateSignup = async(data) =>{
    try {
       return await axios.post(`${URL}/singup`,data)
    } catch (error) {
        console.log("Error while calling authenticate api", error);
        
    }
}


export const authenticateLogin = async(data) =>{
    try {
       return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log("Error while calling authenticate login api", error);
        return error.response;
    }
}

export const payUsingPaytm = async(data)=>{
    try {
        let response = await axios.post(`${URL}/paytm`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling paytm api', error);
    }
}