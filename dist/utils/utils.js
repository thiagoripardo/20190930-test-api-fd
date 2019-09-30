"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterByKey = (array, key, value) => {
    return array.filter(element => (element[key] == value));
};
exports.filterByKey = filterByKey;
const sortByKey = (array, key, order) => {
    return array.sort((a, b) => {
        var x = a[key];
        var y = b[key];
        if (order == 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        else if (order == 'desc') {
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        }
        else {
            return 0;
        }
    });
};
exports.sortByKey = sortByKey;
const paginate = (array, pageSize, pageNumber) => {
    --pageNumber;
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
};
exports.paginate = paginate;
//# sourceMappingURL=utils.js.map