var p = Object.create(HTMLElement.prototype);
p.readyCallback = function() {
  this.name = "David";
  window.elementCreated = true;
}
document.register('my-element', {prototype: p});
window.externalScriptLoaded = true;
