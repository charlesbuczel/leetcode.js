/**
 * @typedef {Object} ListNode
 * @description Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists Array of sorted linked lists.
 * @return {ListNode} A sorted linked list.
 * @summary Merge k Sorted Lists {@link https://leetcode.com/problems/merge-k-sorted-lists/}
 * @description Merge k sorted linke lists and return it as one sorted list.
 * Space O(1) - in place, reusing existing linked lists.
 * Time  O(nlogk) - logk pairings, each call to mergeTwoLists is n.
 */
const mergeKLists = lists => {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];

    const k = lists.length;
    let pairings = 1;

    while (pairings < k) {
        for (let index = 0; index < k - pairings; index += pairings * 2) {
            lists[index] = mergeTwoLists(lists[index], lists[index + pairings]);
        }
        pairings *= 2;
    }

    return lists[0];
};

/**
 * @param {ListNode} l1 Sorted list1.
 * @param {ListNode} l2 Sorted list2.
 * @return {ListNode} Sorted list - merged l1 and l2.
 * @description Merge two sorted linked lists and return it as a new sorted list.
 */
const mergeTwoLists = (l1, l2) => {
    const head = new ListNode(0);

    let current = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }

        current = current.next;
    }

    current.next = !l1 ? l2 : l1;

    return head.next;
};

