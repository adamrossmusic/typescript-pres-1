"use strict";
/* Class modifiers*/
var AccessModifiersClass = /** @class */ (function () {
    function AccessModifiersClass(score) {
        this.userLocation = "Budapest";
        this.registrationDate = new Date(2017, 1, 1);
        this.id = 2515;
        this.setUserRank = function () {
            if (this.score > 100) {
                this.rank = "rookie";
            }
            else if (this.score > 1000) {
                this.rank = "pilot";
            }
            else {
                this.rank = "chief";
            }
        };
        this.score = score;
        this.setUserRank();
    }
    AccessModifiersClass.isPublicProfile = true;
    return AccessModifiersClass;
}());
var accessModifiersClass = new AccessModifiersClass(1004);
var userRank = accessModifiersClass.rank;
console.log(userRank);
