export const BASE_URL = "http://localhost:8000";
export let endpoint;

export async function getAllData(endpoint){
    const response = await axios(`${BASE_URL}/${endpoint}`);
    return response
}

export async function addData(endpoint,payload){
    const response = await axios.post(`${BASE_URL}/${endpoint}`,payload);
    return response
}

export async function getDataById(endpoint,id){
    const response = await axios.post(`${BASE_URL}/${endpoint}/${id}`);
    return response
}
export async function deleteDataById(endpoint,id){
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response
}
export async function editDataById(endpoint,id,payload){
    const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`,payload);
    return response
}