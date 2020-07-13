/**
 * @typedef {Object} ListNode
 * @description Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1 List representing integer1.
 * @param {ListNode} l1 List representing integer2.
 * @return {ListNode} List storing sum of integer1 and integer2.
 * @summary Add Two Numbers {@link https://leetcode.com/problems/add-two-numbers/}
 * @description Two non-negative integers stored in a list in revers order by digits. Return their sum.
 * Space O(n) - length of new list will be same as number of digits in bigger number (+1).
 * Time O(n) - Where n represents number of digits in bigger number.
 */
const addTwoNumbers = (l1, l2) => {
    let head = new ListNode(0), current, value = 0;

    current = head;
    while (l2 || l1 || value) {
        if (l1) {
            value += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            value += l2.val;
            l2 = l2.next;
        }

        current.val = value % 10;
        value = value - 10 >= 0 ? 1 : 0;

        if (l1 || l2 || value) {
            current.next = new ListNode(0);
            current = current.next;
        }
    }

    return head;
};
