function createSvgElement(qualifiedName, className, parentNode) {
    var $el = document.createElementNS('http://www.w3.org/2000/svg', qualifiedName);
    $el.get = getAttributeNSValues;
    $el.set = setAttributeNSValues;
    className && $el.classList.add(className);
    parentNode.appendChild($el);
    return $el;
}
function getAttributeNSValues(keys) {
    var _this = this;
    return keys.map(function (key) { return _this.getAttributeNS(null, key); });
}
function setAttributeNSValues(data) {
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var item = _a[_i];
        console.log(item);
        var key = item[0], value = item[1];
        this.setAttributeNS(null, key, value);
    }
    return this;
}
