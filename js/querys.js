function create(element) {
    return document.createElement(element);
}
function query(item, id) {
    return item.querySelector(id);
}
function queryAll(id) {
    return document.querySelectorAll(id);
}
function queryContent(item, id) {
    return item.querySelector(id).textContent;
}