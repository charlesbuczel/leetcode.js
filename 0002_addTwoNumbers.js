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
