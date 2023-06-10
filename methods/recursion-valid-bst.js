function Node (val, left=null, right=null) {
    this.val = val;
    this.left = left,
    this.right = right;
}

function isValidBST(root) {
    // Base Condition
    if ((root.left.val < root.val) && (root.right.val > root.val)) {
        return true
    } else {
        return false;
    }

    // Induction
    return isValidBST(root.left) && isValidBST(root.right);
}

const tree = new Node(
    4, 
    new Node(
        2, 
        new Node(
            1, 
            null
        ), 
        new Node(
            6, 
            null
        )
    ), 
    new Node(
        6, 
        new Node(
            5, 
            null
        ), 
        new Node(
            7, 
            null
        )
    )
)

console.log(isValidBST(tree));