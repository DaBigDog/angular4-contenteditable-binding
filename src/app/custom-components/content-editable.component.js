"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ContentEditableComponent = (function () {
    function ContentEditableComponent() {
        this.modelChange = new core_1.EventEmitter();
    }
    ContentEditableComponent.prototype.onChange = function (event) {
        this.model = event.srcElement.innerText;
        this.modelChange.emit(this.model);
    };
    return ContentEditableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ContentEditableComponent.prototype, "model", void 0);
__decorate([
    core_1.Output('onModelChange'),
    __metadata("design:type", core_1.EventEmitter)
], ContentEditableComponent.prototype, "modelChange", void 0);
ContentEditableComponent = __decorate([
    core_1.Component({
        selector: 'content-editable',
        template: "<div contenteditable=\"true\" [innerHtml]=\"model\" (keyup)=\"onChange($event)\">\n            </div>",
    }),
    __metadata("design:paramtypes", [])
], ContentEditableComponent);
exports.ContentEditableComponent = ContentEditableComponent;
//# sourceMappingURL=content-editable.component.js.map