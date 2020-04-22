import axios from 'axios';

const COUNT_API_BASE_URI = "https://5e9ec500fb467500166c4658.mockapi.io/todos";

class TodosApi {
    static getAllTodos() {
        return axios.get(COUNT_API_BASE_URI);
    }
    static getTodoById(id) {
        return axios.put(COUNT_API_BASE_URI + "/" + id);
    }
}

export default TodosApi;