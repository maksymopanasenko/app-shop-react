const filterData = (path, array) => {
    let filteredData;

    switch (path) {
        case '/men':
            filteredData = array.filter(({sex}) => sex === 'M');
            break;
        case '/women':
            filteredData = array.filter(({sex}) => sex === 'W');
            break;
    }

    return filteredData;
}
 
export default filterData;