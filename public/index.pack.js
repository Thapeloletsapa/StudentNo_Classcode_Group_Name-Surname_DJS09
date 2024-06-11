/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./classes.ts":
/*!********************!*\
  !*** ./classes.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainProperty)
/* harmony export */ });
class MainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}


/***/ }),

/***/ "./enums.ts":
/*!******************!*\
  !*** ./enums.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoyaltyUser: () => (/* binding */ LoyaltyUser),
/* harmony export */   Permissions: () => (/* binding */ Permissions)
/* harmony export */ });
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));


/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTopTwoReviews: () => (/* binding */ getTopTwoReviews),
/* harmony export */   makeMultiple: () => (/* binding */ makeMultiple),
/* harmony export */   populateUser: () => (/* binding */ populateUser),
/* harmony export */   showDetails: () => (/* binding */ showDetails),
/* harmony export */   showReviewTotal: () => (/* binding */ showReviewTotal)
/* harmony export */ });
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (Permissions = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./enums.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./classes.ts");
// Code Tidy



const propertyContainer = document.querySelector('.properties');
const footer = document.querySelector('.footer');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
let isLoggedIn;
// Reviews
const reviews = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: _enums__WEBPACK_IMPORTED_MODULE_1__.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
const properties = [
    {
        image: './images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: './images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: './images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: './images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
// Functions
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.populateUser)(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTopTwoReviews)(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer.appendChild(card);
        }
        container.removeChild(button);
    }
}
button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ['London', '11.03', 17];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
let yourMainProperty = new _classes__WEBPACK_IMPORTED_MODULE_2__["default"]('./images/italian-property.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: _enums__WEBPACK_IMPORTED_MODULE_1__.LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer.appendChild(image);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztBQUdqRyxJQUFJLGdCQUFnQixHQUFHLElBQUksZ0RBQVksQ0FDbkMsK0JBQStCLEVBQy9CLGVBQWUsRUFDZixDQUFDO1FBQ0csSUFBSSxFQUFFLE9BQU87UUFDYixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSwrQ0FBVyxDQUFDLFNBQVM7UUFDbEMsSUFBSSxFQUFFLFlBQVk7S0FDckIsQ0FBQyxDQUFFO0FBRVIsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBZ0I7QUFDL0UsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7QUFDM0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO0FBQy9DLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vY2xhc3Nlcy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vZW51bXMudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3V0aWxzLnRzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblByb3BlcnR5IHtcclxuICAgIHNyYzogc3RyaW5nXHJcbiAgICB0aXRsZTogc3RyaW5nXHJcbiAgICByZXZpZXdzOiBSZXZpZXdbXVxyXG4gICAgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHJldmlld3M6IFJldmlld1tdKSB7XHJcbiAgICAgICAgdGhpcy5zcmMgPSBzcmNcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnJldmlld3MgPSByZXZpZXdzXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBQZXJtaXNzaW9ucyB7XHJcbiAgICBBRE1JTiA9ICdBRE1JTicsIFxyXG4gICAgUkVBRF9PTkxZID0gJ1JFQURfT05MWSdcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTG95YWx0eVVzZXIge1xyXG4gICAgR09MRF9VU0VSID0gJ0dPTERfVVNFUicsXHJcbiAgICBTSUxWRVJfVVNFUiA9ICdTSUxWRVJfVVNFUicsXHJcbiAgICBCUk9OWkVfVVNFUiA9ICdCUk9OWkVfVVNFUidcclxufSIsIlxyXG4vKiBzaG93UmV2aWV3VG90YSBGdW5jdGlvbiB0byBkaXNwbGF5IHJldmlldyB0b3RhbCBhbmQgcmV2aWV3ZXIgaW5mb3JtYXRpb25cclxuICAgRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBnb2xkIHVzZXIgKGxveWFsdHkgc3RhdHVzKVxyXG4gICBVcGRhdGUgdGhlIHJldmlld1RvdGFsRGlzcGxheSBlbGVtZW50J3MgY29udGVudFxyXG4gICBwb3B1bGF0ZVVzZXIgRnVuY3Rpb24gdG8gcG9wdWxhdGUgdXNlci1yZWxhdGVkIGluZm9ybWF0aW9uXHJcbiAgIElmIHRoZSB1c2VyIGlzIHJldHVybmluZywgZGlzcGxheSBcImJhY2tcIiBpbiB0aGUgcmV0dXJuaW5nVXNlckRpc3BsYXkgZWxlbWVudFxyXG4gICBkaXNwbGF5IHRoZSB1c2VyJ3MgbmFtZSBpbiB0aGUgdXNlck5hbWVEaXNwbGF5IGVsZW1lbnRcclxuICAgc2hvdyBkZXRhaWxzIGZ1bnRpb25cclxuICAgbWFrZSBtdWx0aXBsZSBmdWN0aW9uIHdpdGggdHlwZSBvZiByZXR1cm5cclxuICAgKi9cclxuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi9pbnRlcmZhY2VzJ1xyXG5jb25zdCByZXZpZXdUb3RhbERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV2aWV3cycpIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IHJldHVybmluZ1VzZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JldHVybmluZy11c2VyJykgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgdXNlck5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXInKSBhcyBIVE1MRWxlbWVudFxyXG5cclxuZW51bSBQZXJtaXNzaW9ucyB7XHJcbiAgICBBRE1JTiA9ICdBRE1JTicsIFxyXG4gICAgUkVBRF9PTkxZID0gJ1JFQURfT05MWSdcclxufVxyXG5cclxuZW51bSBMb3lhbHR5VXNlciB7XHJcbiAgICBHT0xEX1VTRVIgPSAnR09MRF9VU0VSJyxcclxuICAgIFNJTFZFUl9VU0VSID0gJ1NJTFZFUl9VU0VSJyxcclxuICAgIEJST05aRV9VU0VSID0gJ0JST05aRV9VU0VSJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsKHZhbHVlOiBudW1iZXIsIHJldmlld2VyOiBzdHJpbmcsIGlzTG95YWx0eTogTG95YWx0eVVzZXIpIHtcclxuICAgIGNvbnN0IGljb25EaXNwbGF5ID0gTG95YWx0eVVzZXIuR09MRF9VU0VSID8gJ+KtkCcgOiAnJ1xyXG4gICAgcmV2aWV3VG90YWxEaXNwbGF5LmlubmVySFRNTCA9IHZhbHVlLnRvU3RyaW5nKCkgKyAnIHJldmlldycgKyBtYWtlTXVsdGlwbGUodmFsdWUpICsgJyB8IGxhc3QgcmV2aWV3ZWQgYnkgJyArIHJldmlld2VyICsgJyAnICsgaWNvbkRpc3BsYXkgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVVzZXIoaXNSZXR1cm5pbmcgOiBib29sZWFuLCB1c2VyTmFtZTogc3RyaW5nICkge1xyXG4gICAgaWYgKGlzUmV0dXJuaW5nID09IHRydWUpe1xyXG4gICAgICAgIHJldHVybmluZ1VzZXJEaXNwbGF5LmlubmVySFRNTCA9ICdiYWNrJ1xyXG4gICAgfVxyXG4gICAgdXNlck5hbWVEaXNwbGF5LmlubmVySFRNTCA9IHVzZXJOYW1lXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RGV0YWlscyh2YWx1ZTogYm9vbGVhbiB8IFBlcm1pc3Npb25zLCBlbGVtZW50IDogSFRNTERpdkVsZW1lbnQsIHByaWNlOiBudW1iZXIpIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHByaWNlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJpY2VEaXNwbGF5LmlubmVySFRNTCA9IHByaWNlLnRvU3RyaW5nKCkgKyAnL25pZ2h0J1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJpY2VEaXNwbGF5KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZU11bHRpcGxlKHZhbHVlOiBudW1iZXIpIDogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA+IDEgfHwgdmFsdWUgPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAncydcclxuICAgIH0gZWxzZSByZXR1cm4gJydcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcFR3b1Jldmlld3MocmV2aWV3cyA6IFJldmlld1tdKSA6IFJldmlld1tdICB7XHJcbiAgICBjb25zdCBzb3J0ZWRSZXZpZXdzID0gcmV2aWV3cy5zb3J0KChhLCBiKSA9PiBiLnN0YXJzIC0gYS5zdGFycylcclxuICAgIHJldHVybiBzb3J0ZWRSZXZpZXdzLnNsaWNlKDAsMilcclxuICAgfVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIENvZGUgVGlkeVxyXG5cclxuaW1wb3J0IHsgc2hvd1Jldmlld1RvdGFsLCBwb3B1bGF0ZVVzZXIsIHNob3dEZXRhaWxzLCBnZXRUb3BUd29SZXZpZXdzfSBmcm9tICcuL3V0aWxzJ1xyXG5pbXBvcnQgeyBQZXJtaXNzaW9ucyAsIExveWFsdHlVc2VyIH0gZnJvbSAnLi9lbnVtcydcclxuaW1wb3J0IHsgUmV2aWV3LCBQcm9wZXJ0eSB9IGZyb20gJy4vaW50ZXJmYWNlcydcclxuaW1wb3J0IE1haW5Qcm9wZXJ0eSBmcm9tICcuL2NsYXNzZXMnIFxyXG5cclxuY29uc3QgcHJvcGVydHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvcGVydGllcycpIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKSBhcyBIVE1MRWxlbWVudFxyXG5cclxuY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld3MnKSBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykgYXMgSFRNTEVsZW1lbnRcclxuIFxyXG5cclxubGV0IGlzTG9nZ2VkSW46IGJvb2xlYW5cclxuXHJcbi8vIFJldmlld3NcclxuY29uc3QgcmV2aWV3czogUmV2aWV3W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NoZWlsYScsXHJcbiAgICAgICAgc3RhcnM6IDUsXHJcbiAgICAgICAgbG95YWx0eVVzZXI6IExveWFsdHlVc2VyLkdPTERfVVNFUixcclxuICAgICAgICBkYXRlOiAnMDEtMDQtMjAyMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FuZHJ6ZWonLFxyXG4gICAgICAgIHN0YXJzOiAzLFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiBMb3lhbHR5VXNlci5CUk9OWkVfVVNFUixcclxuICAgICAgICBkYXRlOiAnMjgtMDMtMjAyMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ09tYXInLFxyXG4gICAgICAgIHN0YXJzOiA0LFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiBMb3lhbHR5VXNlci5TSUxWRVJfVVNFUixcclxuICAgICAgICBkYXRlOiAnMjctMDMtMjAyMScsXHJcbiAgICB9LFxyXG5dXHJcblxyXG5jb25zdCB5b3UgPSB7XHJcbiAgICBmaXJzdE5hbWU6ICdCb2JieScsXHJcbiAgICBsYXN0TmFtZTogJ0Jyb3duJyxcclxuICAgIHBlcm1pc3Npb25zOiBQZXJtaXNzaW9ucy5BRE1JTixcclxuICAgIGlzUmV0dXJuaW5nOiB0cnVlLFxyXG4gICAgYWdlOiAzNSxcclxuICAgIHN0YXllZEF0OiBbJ2Zsb3JpZGEtaG9tZScsICdvbWFuLWZsYXQnLCAndG9reW8tYnVuZ2Fsb3cnXVxyXG59XHJcblxyXG4vLyBBcnJheSBvZiBQcm9wZXJ0aWVzXHJcbmNvbnN0IHByb3BlcnRpZXMgOiBQcm9wZXJ0eVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiAnLi9pbWFnZXMvY29sb21iaWEtcHJvcGVydHkuanBnJyxcclxuICAgICAgICB0aXRsZTogJ0NvbG9tYmlhbiBTaGFjaycsXHJcbiAgICAgICAgcHJpY2U6IDQ1LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGZpcnN0TGluZTogJ3NoYWNrIDM3JyxcclxuICAgICAgICAgICAgY2l0eTogJ0JvZ290YScsXHJcbiAgICAgICAgICAgIGNvZGU6IDQ1NjMyLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiAnQ29sb21iaWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250YWN0OiBbKzExMjM0MzgyMzk3ODkyMSwgJ21hcnl3aW5rbGVAZ21haWwuY29tJ10sXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbWFnZTogJy4vaW1hZ2VzL3BvbGFuZC1wcm9wZXJ0eS5qcGcnLFxyXG4gICAgICAgIHRpdGxlOiAnUG9saXNoIENvdHRhZ2UnLFxyXG4gICAgICAgIHByaWNlOiAzMCxcclxuICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgICBmaXJzdExpbmU6ICdubyAyMycsXHJcbiAgICAgICAgICAgIGNpdHk6ICdHZGFuc2snLFxyXG4gICAgICAgICAgICBjb2RlOiAzNDM5MDMsXHJcbiAgICAgICAgICAgIGNvdW50cnk6ICdQb2xhbmQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250YWN0OiBbKzEyOTgyMzkwMjg0OTA4MzAsICdnYXJ5ZGF2aXNAaG90bWFpbC5jb20nXSxcclxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGltYWdlOiAnLi9pbWFnZXMvbG9uZG9uLXByb3BlcnR5LmpwZycsXHJcbiAgICAgICAgdGl0bGU6ICdMb25kb24gRmxhdCcsXHJcbiAgICAgICAgcHJpY2U6IDI1LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGZpcnN0TGluZTogJ2ZsYXQgMTUnLFxyXG4gICAgICAgICAgICBjaXR5OiAnTG9uZG9uJyxcclxuICAgICAgICAgICAgY29kZTogJ1NXNCA1WFcnLFxyXG4gICAgICAgICAgICBjb3VudHJ5OiAnVW5pdGVkIEtpbmdkb20nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGFjdDogWyszNDgyOTM3NDg5MjU1MywgJ2FuZHlsdWdlckBhb2wuY29tJ10sXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW1hZ2U6ICcuL2ltYWdlcy9tYWxheXNpYW4taG90ZWwuanBlZycsXHJcbiAgICAgICAgdGl0bGU6ICdNYWxpYSBIb3RlbCcsXHJcbiAgICAgICAgcHJpY2U6IDM1LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGZpcnN0TGluZTogJ1Jvb20gNCcsXHJcbiAgICAgICAgICAgIGNpdHk6ICdNYWxpYScsXHJcbiAgICAgICAgICAgIGNvZGU6IDQ1MzM0LFxyXG4gICAgICAgICAgICBjb3VudHJ5OiAnTWFsYXlzaWEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250YWN0OiBbICs2MDM0OTgyMjA4MywgJ2xlZTM0QGdtYWlsLmNvbSddLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiBmYWxzZVxyXG4gICAgfVxyXG5dXHJcblxyXG4vLyBGdW5jdGlvbnNcclxuc2hvd1Jldmlld1RvdGFsKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpXHJcblxyXG5wb3B1bGF0ZVVzZXIoeW91LmlzUmV0dXJuaW5nLCB5b3UuZmlyc3ROYW1lKVxyXG5cclxuLy8gQWRkIHRoZSBwcm9wZXJ0aWVzXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBwcm9wZXJ0aWVzW2ldLnRpdGxlXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHByb3BlcnRpZXNbaV0uaW1hZ2UpXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgc2hvd0RldGFpbHMoeW91LnBlcm1pc3Npb25zLCBjYXJkLCBwcm9wZXJ0aWVzW2ldLnByaWNlKVxyXG4gICAgcHJvcGVydHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcclxufVxyXG5cclxubGV0IGNvdW50ID0gMFxyXG5mdW5jdGlvbiBhZGRSZXZpZXdzKGFycmF5IDogUmV2aWV3W10pIDogdm9pZCB7XHJcbiAgICBpZiAoIWNvdW50ICkge1xyXG4gICAgICAgIGNvdW50KytcclxuICAgICAgICBjb25zdCB0b3BUd28gPSBnZXRUb3BUd29SZXZpZXdzKGFycmF5KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9wVHdvLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3Jldmlldy1jYXJkJylcclxuICAgICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSB0b3BUd29baV0uc3RhcnMgKyAnIHN0YXJzIGZyb20gJyArIHRvcFR3b1tpXS5uYW1lXHJcbiAgICAgICAgICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYnV0dG9uKSBcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWRkUmV2aWV3cyhyZXZpZXdzKSlcclxuXHJcbmxldCBjdXJyZW50TG9jYXRpb24gOiBbc3RyaW5nLCBzdHJpbmcsIG51bWJlcl0gPSBbJ0xvbmRvbicsICcxMS4wMycsIDE3XVxyXG5mb290ZXIuaW5uZXJIVE1MID0gY3VycmVudExvY2F0aW9uWzBdICsgJyAnICsgY3VycmVudExvY2F0aW9uWzFdICsgJyAnICsgY3VycmVudExvY2F0aW9uWzJdICsgJ8KwJ1xyXG5cclxuXHJcbmxldCB5b3VyTWFpblByb3BlcnR5ID0gbmV3IE1haW5Qcm9wZXJ0eShcclxuICAgICcuL2ltYWdlcy9pdGFsaWFuLXByb3BlcnR5LmpwZycsIFxyXG4gICAgJ0l0YWxpYW4gSG91c2UnLFxyXG4gICAgW3tcclxuICAgICAgICBuYW1lOiAnT2xpdmUnLFxyXG4gICAgICAgIHN0YXJzOiA1LFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiBMb3lhbHR5VXNlci5HT0xEX1VTRVIsXHJcbiAgICAgICAgZGF0ZTogJzEyLTA0LTIwMjEnXHJcbiAgICB9XSApXHJcblxyXG5jb25zdCBtYWluSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1pbWFnZScpIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCB5b3VyTWFpblByb3BlcnR5LnNyYylcclxubWFpbkltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==