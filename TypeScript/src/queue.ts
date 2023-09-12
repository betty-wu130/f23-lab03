
/**
 * Interface describing a first-in, first-out structure for integers. Values are
 * added at the tail, and removed from the head. Queues are typically used to
 * process values in the order that they appear and to store the state of a
 * buffered object.
 *
 * @author Alex Lockwood, Christian Kaestner
 */
interface IntQueue {

  /**
     * Remove all the elements from the queue.
     */
  clear: () => void

  /**
     * Fetch and remove the element at the head of the queue.
     *
     * @return The element at the head of the queue. Returns
     *         null if the queue is empty.
     */
  dequeue: () => number | null

  /**
     * Add the element to the tail of the queue.
     *
     * @param value The element to place at the tail of the queue.
     * @return      Whether the element was enqueued successfully.
     */
  enqueue: (value: number) => boolean

  /**
     * Determine if the queue is empty.
     *
     * @return <tt>true</tt> if the queue is empty, <tt>false</tt> otherwise.
     */
  isEmpty: () => boolean

  /**
     * Fetch the element at the head of the queue.
     *
     * @return The element at the head of the queue. Returns null if queue
     *         is empty.
     */
  peek: () => number | null

  /**
     * Determine the number of elements in the queue.
     *
     * @return The number of elements in the queue.
     */
  size: () => number
}

export { IntQueue }
