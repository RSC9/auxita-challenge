export const sortObjectArrayByDate = (array) => {
    return array.sort((a, b) => new Date(b.atDate) - new Date(a.atDate));
};