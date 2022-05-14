function create(element) {
    return document.createElement(element);
}
function query(id, item) {
    return item == undefined ? document.querySelector(id) : item.querySelector(id);
}
function queryAll(id) {
    return document.querySelectorAll(id);
}
function queryContent(id, item) {
    return item.querySelector(id).textContent;
}