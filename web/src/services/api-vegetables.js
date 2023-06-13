
const getVeggiesFromApi = (params) => {
    console.log('Se están pidiendo las plantas de la app');
    //console.log(params);
    return fetch(
        `//localhost:4000/plants`,
        {
            method: 'GET',
        }
    )
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

const objToExport = {
    getVeggiesFromApi: getVeggiesFromApi,
};

export default objToExport;
