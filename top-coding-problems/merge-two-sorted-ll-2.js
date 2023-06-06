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
    
    let temp1 = list1;
    let temp2 = list2;

    while (temp1) {
        let count = 0;
        while (temp2) {
            count++;
            if (temp1 == null) {
                break;
            }

            if (temp1.val <= temp2.val) {
                
                if (count > 1) {

                }
                console.log("Count: ", count)
                console.log("1. temp1: ", list(temp1));
                let tmp = temp1.next;
                console.log("2. tmp: ", list(tmp));
                temp1.next = temp2;
                console.log("3. temp1: ", list(temp1));
                temp2 = temp1;
                console.log("4. temp2: ", list(temp2));
                temp1 = tmp;
                console.log("5. temp1: ", list(temp1));
                console.log("\n\n");
            }

            temp2 = temp2.next;
        }

        if (temp1 == null) {
            break;
        }
        temp1 = temp1.next;
    }

    // console.log("temp2: ", list(temp2));
    // console.log("list1: ", list(list1));
    // console.log("list2: ", list(list2))
};

const list1 = linkedList([1, 2, 4]);
const list2 = linkedList([1, 3, 4]);
const output = mergeTwoLists(list1, list2);
// console.log(
//     list(output)
// );