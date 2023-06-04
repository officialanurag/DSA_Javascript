/**
 * Top Coding Problems
 * -------------------
 * Add Two Numbers
 */

/**
 * ListNode
 * @param {number} val 
 * @param {ListNode | null} next 
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @method addTwoNumbers
 * @description
 * Adds two linked lists.
 * 
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
    var mainSumRoot = new ListNode(-1, null);
    var sumRoot = mainSumRoot;
    var carry = 0;

    while (l1 || l2 ) {
        var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        if (sum > 9) {
            var quotient = Math.floor(sum / 10);
            var remainder = sum % 10;
            carry = quotient;
            sum = remainder;
        }
        else {
            carry = 0;
        }
        
        sumRoot.next = new ListNode(sum, null);
        sumRoot = sumRoot.next;

        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null
    }

    if (carry) {
        sumRoot.next = new ListNode(carry, null);
    }

    return mainSumRoot.next;
}

var l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null)))))));
var l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, null))));

let op = addTwoNumbers(l1, l2);

while (op !== null) {
    console.log(op.val);
    op = op.next;
} 

/**
 * Result: 
 * [8,9,9,9,0,0,0,1]
 */
