// Filter an array
const filterByKey = (array: Array<any>, key: string, value: string) => {
    console.log(array.filter(element => (element[key] == value)))
    return array.filter(element => (element[key] == value));
}

// Sort an array
const sortByKey = (array: Array<any>, key: string, order: string) => {
    return array.sort((a, b) => {
        var x = a[key]; var y = b[key];
        if (order == 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } else if (order == 'desc') {
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        } else {
            return 0;
        }
    });
}

// Paginate an array (pageNumber starts at 1)
const paginate = (array: Array<any>, pageSize: number, pageNumber: number) => {
    --pageNumber;
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

export { filterByKey, sortByKey, paginate };