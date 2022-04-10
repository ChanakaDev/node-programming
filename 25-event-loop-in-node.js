/*

Event Loop
===========
(*) Why we needto learn this concept?
---------------------------------------
 Because it explains how Node.js can be asynchronous and have non-blocking I/O, 
 and so it explains basically the "killer app" of Node.js, the thing that made 
 it this successful.

(*) What do we need to pay attention after learning event loops?
---------------------------------------
avoid anything that could block the thread, like synchronous network calls or 
infinite loops.

You mainly need to be concerned that your code will run on a single event loop, 
and write code with this thing in mind to avoid blocking it. (Because JS is single thread)

(*) Actual problem and Solution
---------------------------------------
Almost all the I/O primitives in JavaScript are non-blocking. Network requests, 
filesystem operations, and so on. Being blocking is the exception, and this is why 
JavaScript is based so much on callbacks, and more recently on promises and async/await.

*/
