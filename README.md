# JavaScript Interview Theory Questions — Master Revision Notes

---

## 1️⃣ Difference between var, let, const

| Feature        | var          | let          | const        |
| -------------- | ------------ | ------------ | ------------ |
| Scope          | Function Scope | Block Scope | Block Scope |
| Redeclaration  | ✅ Allowed  | ❌ Not Allowed | ❌ Not Allowed |
| Reassignment   | ✅ Allowed  | ✅ Allowed  | ❌ Not Allowed |
| Hoisting       | ✅ Yes (initialized as undefined) | ✅ Yes (in Temporal Dead Zone) | ✅ Yes (in Temporal Dead Zone) |
| Temporal Dead Zone | ❌ No | ✅ Yes | ✅ Yes |

### 🔥 Example:

```javascript
var a = 10;
let b = 20;
const c = 30;
var is function scoped — accessible inside functions.

let and const are block scoped — accessible inside {} blocks.

const must be initialized during declaration and cannot be reassigned.

2️⃣ What is Hoisting?
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the compilation phase.

Only declarations are hoisted, not initializations.

🔥 Example:
javascript
Copy
Edit
console.log(a);  // undefined (hoisted, but not initialized)
var a = 10;

console.log(b);  // ReferenceError (Temporal Dead Zone)
let b = 20;
var is hoisted and initialized as undefined.

let and const are hoisted but remain uninitialized (TDZ applies).

3️⃣ Explain Primitive vs Reference type
🔷 Primitive Types (Value types)
Stored directly in the stack.

Immutable.

Types: string, number, boolean, null, undefined, symbol, bigint.

Example:
javascript
Copy
Edit
let x = 10;
let y = x;
y = 20;
console.log(x);  // Output: 10
🔷 Reference Types (Objects)
Stored in the heap.

Variables hold a reference to the location.

Types: object, array, function.

Example:
javascript
Copy
Edit
let obj1 = { name: "Arka" };
let obj2 = obj1;
obj2.name = "Santra";
console.log(obj1.name);  // Output: Santra
4️⃣ Explain == vs === with examples
== → Loose Equality → Performs type coercion if necessary.

=== → Strict Equality → No type coercion; both value and type must match.

🔥 Examples:
javascript
Copy
Edit
console.log(5 == '5');   // true (because of coercion)
console.log(5 === '5');  // false (different types)

console.log(null == undefined);  // true
console.log(null === undefined); // false
Tip for interviews: Always prefer === for safer, bug-free code.

5️⃣ What is Type Coercion?
Automatic or implicit conversion of values from one type to another.

Happens often with ==, arithmetic operations, and conditional checks.

🔥 Examples:
javascript
Copy
Edit
console.log('5' + 3);   // "53"  (number converted to string)
console.log('5' - 3);   // 2     (string converted to number)
console.log(false == 0); // true
console.log(true + 1);  // 2
6️⃣ What is Temporal Dead Zone (TDZ)?
Time between variable hoisting and its actual initialization.

Accessing variable in TDZ throws ReferenceError.

🔥 Example:
javascript
Copy
Edit
console.log(a);  // undefined
var a = 10;

console.log(b);  // ReferenceError
let b = 20;
let and const variables exist in TDZ from hoisting till initialization.

7️⃣ Explain Event Loop in simple terms
JavaScript is single-threaded but asynchronous using the Event Loop.

It allows non-blocking execution using queues and callbacks.

🔷 Simplified Flow:
1️⃣ Code executes → Call Stack.
2️⃣ Async tasks (setTimeout, promises, etc.) → Web APIs.
3️⃣ Completed tasks → Callback Queue (for setTimeout) or Microtask Queue (for Promises).
4️⃣ Event Loop moves tasks to Call Stack when it's empty.

🔥 Example:
javascript
Copy
Edit
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 0);

console.log("End");

// Output:
// Start
// End
// Inside Timeout
Even with 0ms, async callbacks wait for the call stack to be empty before executing.

✅ End of Day 1 Theory Revision ✅

yaml
Copy
Edit

---

✅ **Now you can save this file as:**

`Day1_JS_Interview_Theory.md`

✅ Upload it to:

- GitHub Repo  
- Notion  
- VSCode Workspace

✅ This will be your **permanent revision sheet** 💪

---

👉 Shall I now prepare your:

- **Day 2 DSA + Arrays + Strings full .md file**  
- **15 coding problems**  
- **Mini Project**  
- **Interview questions on Arrays/Strings**

---  
If you're ready — we move into real DSA 🔥🚀








