// --------------------------------------------------
// Import Export
// --------------------------------------------------
// Kisi JS/JSX file/module se do tarike ke export hosakte hain.
// 1) Named export
// e.g. export variable/function.
// e.g. export {variable1, function1, variable2, ...}
// 2) Default export
// e.g. export default variable/function.
// Ek file/module se kitne bhi named export kar sakte hoo.
// Lekin default export ek hi kar sakte hoo.

// --------------------------------------------------
// Hooks
// --------------------------------------------------
// Hooks functions hain jinke help se aap function component me react ke features use karsakte hoo.
// Hooks use karne ke 3 main rules hain.
// 1) Ke sirf function component me hi use kar sakte hoo.
// 2) Function component me bhi top-level pe use karna hai. Yane aap hooks ko kisi block statement (if, switch, while, for, function, etc.) ke andar nahi likh sakte.
// 3) Hooks ko conditionally nahi likh sakte.

// --------------------------------------------------
// State
// --------------------------------------------------
// State koi bhi aisi value hai jise react monitor/track karta hai (dekhta hai). Is value ke change hoone pe react us component aur child components ko re-render/re-load kar deta hai jisme wo state hoo.
// React me ham state-management useState hook ka use karke karte hain.
// Ye hook ek argument leta hai. Jo bhi value yaha do ge wo aap ke state ki initial value hoogi.

// --------------------------------------------------
// Controlled vs Uncontrolled Components
// --------------------------------------------------

// Ye specification hai zada tar form elements (components) pe laagu hoote hain. E.g. form, input, select, textarea, etc.
// Jin components ko browser control kar raha hoo unhe uncontrolled components kahenge.
// Agar aap browser ke pass se control apne haath me lelo to yehi components aap ke uncontrolled components se controlled components banjayenge.

// Un-controlled input:
// E.g. <input id="name" type="text" placeholder="Enter your name..." />
// Controlled input:
// E.g. <input id="name" type="text" placeholder="Enter your name..." value={name} onChnage={(e) => {setName(e.target.value)}} />

// --------------------------------------------------
// ASYNC
// --------------------------------------------------

// JS by design synchronous single-threaded language hai.
// Async tasks aise tasks hain jo parallely hote hain.
// Sync tasks aise tasks hain jo one-at-a-time hote hain.
