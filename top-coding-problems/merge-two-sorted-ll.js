function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function list(root) {
    const arr = [];
    while (root !== null) {
        arr.push(root.val);
        root = root.next;
    }
    return arr;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    let list1Cp = list1;
    let list2Cp = list2;

    if (list1Cp.next === null && list2Cp.next === null) {
        if (list1Cp.val > list2Cp.val) {
            list2Cp.next = list1Cp;
            return list2;
        } else {
            list1Cp.next = list2Cp;
            return list1;
        }
    }

    while (list2Cp !== null) {
        if (list1Cp.val >= list2Cp.val && (list2Cp.next !== null && list1Cp.val < list2Cp.next.val)) {
            // Insert after list2Cp and before list2Cp.next
            const temp1 = list2Cp.next;
            list2Cp.next = list1Cp;
            list1Cp = temp1;
        }
        list2Cp = list2Cp.next;
    }

    list2Cp = list2;

    while (list2Cp.next !== null) {
        list2Cp = list2Cp.next;
    }

    list2Cp.next = list1Cp;

    return list2;
};

const list1 = new ListNode(
    -9,
    new ListNode(
        3,
        null
    )
)
const list2 = new ListNode(
    5,
    new ListNode(
        7,
        null
    )
)

// const list1 = new ListNode(
//     1,
//     new ListNode(
//         2,
//         new ListNode(
//             4,
//             null
//         )
//     )
// )
// const list2 = new ListNode(
//     1,
//     new ListNode(
//         3,
//         new ListNode(
//             4,
//             null
//         )
//     )
// )

let op = mergeTwoLists(list1, list2);
while (op !== null) {
    console.log(op.val);
    op = op.next;
} 
