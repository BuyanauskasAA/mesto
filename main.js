(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=r,this._headers=n}var r,n;return r=t,(n=[{key:"_request",value:function(t,e){return fetch("".concat(this._baseUrl,"/").concat(t),e).then(this._checkResponse)}},{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return this._request("cards",{method:"GET",headers:this._headers})}},{key:"putLike",value:function(t){return this._request("cards/".concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(t){return this._request("cards/".concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"addCard",value:function(t){return this._request("cards",{method:"POST",headers:this._headers,body:JSON.stringify(t)})}},{key:"deleteCard",value:function(t){return this._request("cards/".concat(t),{method:"DELETE",headers:this._headers})}},{key:"getUserInfo",value:function(){return this._request("users/me",{method:"GET",headers:this._headers})}},{key:"setUserInfo",value:function(t){return this._request("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify(t)})}},{key:"setUserAvatar",value:function(t){return this._request("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(t)})}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e){var r=e.cardInfo,n=e.templateSelector,o=e.handlers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._cardId=r._id,this._handleCardClick=o.handleCardClick,this._handleCardDelete=o.handleCardDelete,this._handleCardLike=o.handleCardLike,this._templateSelector=n,this._cardElement=this._getTemplate(),this._likeButton=this._cardElement.querySelector(".card__like-button"),this._likesCounter=this._cardElement.querySelector(".card__like-counter"),this._deleteButton=this._cardElement.querySelector(".card__delete-button"),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardTitle=this._cardElement.querySelector(".card__title")}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"getId",value:function(){return this._cardId}},{key:"enableLike",value:function(t){this._isLiked=t,t?this._likeButton.classList.add("card__like-button_active"):this._likeButton.classList.remove("card__like-button_active")}},{key:"isCardLiked",value:function(){return this._isLiked}},{key:"updateLikeCounter",value:function(t){this._likesCounter.textContent=t}},{key:"disableDeleteButton",value:function(t){t&&this._deleteButton.remove()}},{key:"removeCard",value:function(){this._deleteButton.closest(".card").remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleCardLike()})),this._deleteButton.addEventListener("click",(function(){t._handleCardDelete()})),this._cardImage.addEventListener("click",(function(){t._handleCardClick()}))}},{key:"generateCard",value:function(){return this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._cardElement}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=r,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e._inputErrorClass,this._errorClass=e.errorClass,this._formButton=this._formElement.querySelector(this._submitButtonSelector),this._formInputs=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var e,r;return e=t,(r=[{key:"_hasInvalidInput",value:function(){return this._formInputs.some((function(t){return!t.checkValidity()}))}},{key:"_showInputError",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));e.textContent=t.validationMessage,t.classList.add(this._inputErrorClass),e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=document.querySelector(".".concat(t.id,"-error"));e.textContent="",t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.checkValidity()?this._hideInputError(t):this._showInputError(t)}},{key:"_setEventListeners",value:function(){var t=this;this.disableSubmitButton(),this._formElement.addEventListener("reset",(function(){t.disableSubmitButton()})),this._formInputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._hasInvalidInput()?t.disableSubmitButton():t.enableSubmitButton()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"enableSubmitButton",value:function(){this._formButton.classList.remove(this._inactiveButtonClass),this._formButton.removeAttribute("disabled")}},{key:"disableSubmitButton",value:function(){this._formButton.classList.add(this._inactiveButtonClass),this._formButton.setAttribute("disabled",!0)}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handlePopupEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"open",value:function(){document.addEventListener("keydown",this._handlePopupEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handlePopupEscClose),this._popup.classList.remove("popup_opened")}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){var r=e.target.classList;(r.contains("popup__close-button")||r.contains("popup"))&&t.close()}))}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(this,arguments)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.handleSumbitButton;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._handleSumbitButton=n,e._popupForm=e._popup.querySelector(".popup__form"),e._inputList=e._popupForm.querySelectorAll(".popup__input"),e._popupSubmitButton=e._popupForm.querySelector(".popup__submit-button"),e._submitButtonText=e._popupSubmitButton.textContent,e}return e=u,r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._popupSubmitButton.textContent=t?e:this._submitButtonText}},{key:"close",value:function(){this._popupForm.reset(),d(m(u.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleSumbitButton(t._getInputValues())})),d(m(u.prototype),"setEventListeners",this).call(this)}}],r&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".image-popup__image"),e._popupCaption=e._popup.querySelector(".image-popup__caption"),e}return e=u,(r=[{key:"open",value:function(t){var e=t.name,r=t.link;this._popupImage.src=r,this._popupImage.alt=e,this._popupCaption.textContent=e,S(k(u.prototype),"open",this).call(this)}}])&&_(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupForm=e._popup.querySelector(".popup__form"),e._popupSubmitButton=e._popupForm.querySelector(".popup__submit-button"),e._submitButtonText=e._popupSubmitButton.textContent,e}return e=u,r=[{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._popupSubmitButton.textContent=t?e:this._submitButtonText}},{key:"setSubmitHandler",value:function(t){this._handleSumbit=t}},{key:"setEventListeners",value:function(){var t=this;this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._handleSumbit()})),j(P(u.prototype),"setEventListeners",this).call(this)}}],r&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var T=function(){function t(e){var r=e.renderer,n=e.containerSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,r;return e=t,r=[{key:"addItem",value:function(t){arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?this._container.append(t):this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}],r&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}var x=function(){function t(e){var r=e.nameSelector,n=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._about=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar,o=t._id;this._name.textContent=e,this._about.textContent=r,this._avatar.src=n,this._id=o}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),U=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__add-button"),D=document.querySelector(".profile__avatar-overlay");function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var F=new x({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar-image"}),H=new T({renderer:function(t){var e=G(t);H.addItem(e,!1)},containerSelector:".cards__container"}),N=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-66",headers:{authorization:"0cc5c16f-cf48-47c9-ae08-45d646caabcf","Content-Type":"application/json"}});Promise.all([N.getUserInfo(),N.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];F.setUserInfo(o),H.renderItems(i)})).catch(console.error);var J=function(t,e){e.renderLoading(!0),t().then((function(){e.close()})).catch(console.error).finally((function(){e.renderLoading(!1)}))},G=function(t){var e=new i({cardInfo:t,templateSelector:"#card-template",handlers:{handleCardClick:function(){return K.open(t)},handleCardDelete:function(){Q.open(),Q.setSubmitHandler((function(){J((function(){return N.deleteCard(e.getId()).then((function(){e.removeCard()}))}),Q)}))},handleCardLike:function(){e.isCardLiked()?N.deleteLike(e.getId()).then((function(t){var r=t.likes;e.updateLikeCounter(r.length),e.enableLike(!1)})).catch(console.error):N.putLike(e.getId()).then((function(t){var r=t.likes;e.updateLikeCounter(r.length),e.enableLike(!0)})).catch(console.error)}}});return e.enableLike(t.likes.some((function(t){return t._id===F.getUserId()}))),e.updateLikeCounter(t.likes.length),e.disableDeleteButton(t.owner._id!==F.getUserId()),e.generateCard()},M=new b({popupSelector:".profile-popup",handleSumbitButton:function(t){J((function(){return N.setUserInfo(t).then((function(t){F.setUserInfo(t)}))}),M)}});M.setEventListeners(),U.addEventListener("click",(function(){M.setInputValues(F.getUserInfo()),M.open()}));var z=new b({popupSelector:".card-popup",handleSumbitButton:function(t){J((function(){return N.addCard(t).then((function(t){var e=G(t);H.addItem(e)}))}),z)}});z.setEventListeners(),A.addEventListener("click",(function(){z.open()}));var $=new b({popupSelector:".avatar-popup",handleSumbitButton:function(t){J((function(){return N.setUserAvatar(t).then((function(t){F.setUserInfo(t)}))}),$)}});$.setEventListeners(),D.addEventListener("click",(function(){$.open()}));var K=new w(".image-popup");K.setEventListeners();var Q=new L(".confirm-popup");Q.setEventListeners();var W,X={};W={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_active"},Array.from(document.querySelectorAll(W.formSelector)).forEach((function(t){var e=new c(W,t),r=t.getAttribute("name");X[r]=e,e.enableValidation()})),X["confirm-form"].enableSubmitButton()})();