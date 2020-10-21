"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularHomePage = void 0;
const protractor_1 = require("protractor");
class angularHomePage {
    constructor() {
        this.angularLink = protractor_1.element(protractor_1.by.linkText('angular.io'));
        this.search = protractor_1.element(protractor_1.by.css("input[type='search']"));
        protractor_1.element(protractor_1.by.xpath(""));
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUFzRDtBQUV0RCxNQUFhLGVBQWU7SUFJeEI7UUFDRyxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNwRCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUV4QixDQUFDO0NBRUo7QUFYRCwwQ0FXQyJ9