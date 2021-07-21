export const sortObjectArrayByDate = (array) => {
    return array.sort((a, b) => new Date(b.atDate) - new Date(a.atDate));
};

export const getTwoConsecutiveItems = (currentItem, array) => {
    return array.filter((value, index) => index === currentItem + 1 || index === currentItem + 2);
};