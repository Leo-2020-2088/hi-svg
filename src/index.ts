function createSvgElement<K extends keyof MathMLElementTagNameMap>(qualifiedName: K, className: string, parentNode: HiSVGElement) {
  const $el = document.createElementNS('http://www.w3.org/2000/svg', qualifiedName) as HiSVGElement
  $el.get = getAttributeNSValues
  $el.set = setAttributeNSValues
  className && $el.classList.add(className)
  parentNode.appendChild($el)
  return $el
}
function getAttributeNSValues(keys: string[]) {
  return keys.map((key: string) => this.getAttributeNS(null, key))
}
function setAttributeNSValues<T extends Record<string, any>>(data: T) {
  for (const item of Object.entries(data)) {
    const [key, value] = item
    this.setAttributeNS(null, key, value)
  }
  return this
}
