// حفظ
export function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// جيب
export function getFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// امسح
export function removeFromStorage(key) {
    localStorage.removeItem(key);
}