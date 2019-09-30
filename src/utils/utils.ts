// Filter an array
const filterByKey = (array: Array<any>, key: string, order: string) => {
    return array.sort((a, b) => {
        var x = a[key]; var y = b[key];
        if (order == 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } else if (order == 'desc') {
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        }
        return 0;
    });
}

// Sort an array
const sortByKey = (array: Array<any>, key: string, order: string) => {
    return array.sort((a, b) => {
        var x = a[key]; var y = b[key];
        if (order == 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        } else if (order == 'desc') {
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        }
        return 0;
    });
}

// Paginate an array
const paginate = (array: Array<any>, page_size: number, page_number: number) => {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

export { filterByKey, sortByKey, paginate };