export const getData = () => {
    const data = JSON.parse(localStorage.getItem('tasks')) || [];
    return data;
}

export const storeData = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data));
}