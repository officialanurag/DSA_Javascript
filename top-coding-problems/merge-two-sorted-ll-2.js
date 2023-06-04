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

function linkedList(arr) {
    let root = new ListNode(0, null);
    let opRoot = root;

    arr.forEach(_ar => {
        opRoot.next = new ListNode(_ar, null);
        opRoot = opRoot.next;
    });

    return root.next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    try {
        let opList1 = list1;
        let opList2 = list2;

        while (opList2 !== null) {
            if (opList1.val <= opList2.val) {
                console.log("if check", opList1.val, opList2.val);

                let temp = opList1.next;
                console.log("temp: ", list(temp));

                opList1.next = opList2;
                opList1 = temp;
                console.log("opList1: ", list(opList1));
                console.log("opList2: ", list(opList2));
                console.log("list1: ", list(list1));
                opList2 = opList2.next;
            }

            // Set operating node of opList2 to next node.
        }

        return new ListNode(0, null);
    } catch (e) {
        console.log(e)
    }
};

const list1 = linkedList([-9, 3]);
const list2 = linkedList([5, 7]);

console.log(
    list(mergeTwoLists(list1, list2))
);