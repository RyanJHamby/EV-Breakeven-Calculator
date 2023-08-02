import axios from "axios";

export default async function getAllCars() { 
    try {
    const response = await axios.get('https://developer.nrel.gov/api/vehicles/v1/vehicles.json?limit=1&api_key=DEMO_KEY');
    return response.data.result;

    } catch (error) {
        if (axios.isAxiosError(error)) {
        console.log(error.status)
        console.error(error.response);
        } else {
        console.error(error);
        }
    }
}