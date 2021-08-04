export const sortObjectArrayByAscendingDate = (objectArray) => {
    return objectArray.sort((a, b) => new Date(a.atDate) - new Date(b.atDate));
};

export const getTwoConsecutiveItems = (currentItem, array) => {
    return array.filter((value, index) => index === currentItem + 1 || index === currentItem + 2);
};