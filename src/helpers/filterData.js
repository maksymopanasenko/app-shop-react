const filterData = (path, array) => {
    let filteredData;

    if (path === '/men') {
        filteredData = array.filter(({sex}) => sex === 'M');
    } else if (path === '/women') {
        filteredData = array.filter(({sex}) => sex === 'W');
    }

    return filteredData;
}
 
export default filterData;