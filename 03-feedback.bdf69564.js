function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function w(e){return l=e,u=setTimeout(S,t),c?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function S(){var e=v();if(h(e))return j(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function j(e){return u=void 0,p&&o?b(e):(o=r=void 0,a)}function T(){var e=v(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:j(v())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),w=document.querySelector("[name='email']"),h=document.querySelector("[name='message']");document.querySelector("[type='submit']");class S{constructor(e,t){this.email=e,this.message=t}}window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));null!==e&&(w.value=e.email,h.value=e.message)})),b.addEventListener("input",e(t)((()=>{const e={email:w.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),b.addEventListener("submit",(e=>{e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;""!==t.value&&""!==n.value?(console.log(new S(t.value,n.value)),b.reset(),localStorage.removeItem("feedback-form-state")):alert("Just do not leave empty fields")}));
//# sourceMappingURL=03-feedback.bdf69564.js.map
