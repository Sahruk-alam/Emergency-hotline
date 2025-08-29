1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
    getElementById(): Identify unique document and cannot use multiple element
    getElementsByClassName(): can work multiple element,htmlcollection, 
    loop can be used,live.

    querySelector : returns single element that 1st match
    querySelectorAll : returns all elements matching.Not live.

2. How do you create and insert a new element into the DOM?

Ans:

    Create : const newP= document.createElement('p')
    Text : newP.innerText='Add paragraph section'
    select section : newp.id(where push that is id)=p
    if there class then
        newP.classList.add('className')
    insert:  parent.appendChild(newP)   

3.What is Event Bubbling and how does it work?

Ans:    
    Event Bubbling: It isevent flow that event starts from the target element and then reaches until main document object.
    work: click specific element and event first handle target element then bubbles its parent ,then parent then parent until last document.And this is how babbling happens.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:
    Event Delegation: It is only one event listener their parent element and use event bubbling to handle event fron child.
  Work :  add event listener to parent element and then check event.target .
            if it match so handle event.
    useful:less memory usage, dynamic element ,implementation so easy just one parent listener use      

5.What is the difference between preventDefault() and stopPropagation() methods?


Ans: preventDefault() : prevent link tp another page, click submit button when stop
    submission.
    stopPropagation():This is use only when handle target element not parent.