import axios from 'axios';

class HttpService {
    userId = null;
    baseUrl = 'http://react-pxl.westeurope.cloudapp.azure.com';
    constructor(userId) {
        this.userId = userId;
    }

    getCalories() {
        return axios.get(`${this.baseUrl}/calorieEntries?userId=${this.userId}`).then(r => r.data);
    }
}

const httpService = new HttpService(1);

export default httpService;
