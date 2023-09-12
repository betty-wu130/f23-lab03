import { create } from "domain";
import { newArrayIntQueue } from "../src/arrayqueue";
import { newLinkedListIntQueue } from "../src/linkedlistqueue.js";

// pick one queue implementation, can run test easily for both, due to subtype polymorphism
// let createQueue = newLinkedListIntQueue
let createQueue = newArrayIntQueue

// TODOs:
// write more test cases to test dequeue and clear functions.

test("test isEmpty: newly created list should be empty", () => {
    expect(createQueue().isEmpty()).toBeTruthy()
})

test("test isEmpty: list with 1 element is not empty", () => {
    const queue = createQueue()
    queue.enqueue(2)
    expect(queue.isEmpty()).toBeFalsy()
})

test("test peek: newly created list should peek null", () => {

    expect(createQueue().peek()).toBeNull()
})

test("test peek: queue with 2 element should peek the one that was most recently added", () => {
    const queue = createQueue()
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.peek()).toEqual(3)
})

let param = [5, 10, 1000000]
// parameterized test, apply to each value of the parameter
test.each(param)("test enqueue: enqueued number %d is correct", (nr) => {
    const queue = createQueue()
    queue.enqueue(nr)
    expect(queue.peek()).toBe(nr)
})

// can nest tests with shared descriptions for better readability
describe("test size: ", ()=> {
    test("1 entry", ()=>{
        const queue = createQueue()
        queue.enqueue(5)
        expect(queue.size()).toBe(1)
    })

    test("11 entries", ()=>{
        const queue = createQueue()
        for (let i =0;i<11;i++)
            queue.enqueue(i)
        expect(queue.size()).toBe(11)
    })
})

describe("test dequeue: ", ()=> {
    test("empty queue", ()=> {
        const queue = createQueue()
        expect(queue.dequeue()).toBeNull()
    })
    test("1 entry", ()=> {
        const queue = createQueue();
        queue.enqueue(10)
        expect(queue.dequeue()).toBe(10)
    })
})

test("the size of queue should be 0 after clear being called", ()=> {
    const queue = createQueue()
    queue.enqueue(1)
    expect(queue.size()).toBe(1)
    queue.clear();
    expect(queue.size()).toBe(0)
})

test("ensureCapacity function should copy the old array to the correct position", ()=> {
    const queue = createQueue()
    for(let i = 0; i < 10; i++) {
        queue.enqueue(i)
    }
    queue.dequeue()
    queue.dequeue()
    for(let i = 10; i < 20; i++) {
        queue.enqueue(i)
    }
    for(let i = 2; i < 20; i++) {
        expect(queue.dequeue()).toBe(i)
    }
})