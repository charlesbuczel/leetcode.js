/**
 * @typedef {Object} ListNode
 * @description Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1 Sorted list1.
 * @param {ListNode} l2 Sorted list2.
 * @return {ListNode} Sorted list - merged l1 and l2.
 * @summary Merge Two Sorted Lists {@link https://leetcode.com/problems/merge-two-sorted-lists/}
 * @description Merge two sorted linked lists and return it as a new sorted list.
 * Space O(1) - reusing existing lists.
 * Time O(n) - iterate until shorter list is fully merged in (up two m+n operations).
 */
const mergeTwoLists = (l1, l2) => {
    const start = new ListNode(0);
    let prev = start;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }

        prev = prev.next;
    }

    prev.next = !l1 ? l2 : l1;

    return start.next;
};