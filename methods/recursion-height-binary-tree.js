function Node (val, left=null, right=null) {
    this.val = val;
    this.left = left,
    this.right = right;
}

function height(root) {
    // Base Condition
    if (root == null) {
        return 0;
    }

    // Hypothesis
    const leftTree = height(root.left);
    const rightTree = height(root.right);

    // Induction
    return 1 + Math.max(leftTree, rightTree);
}

const tree = new Node(
    1, 
    new Node(
        2, 
        new Node(
            4, 
            new Node(
                6, 
                null
            )
        ), 
        new Node(
            5, 
            null
        )
    ), 
    new Node(
        3, 
        new Node(
            4, 
            null
        ), 
        new Node(
            5, 
            null
        )
    )
)

console.log(height(tree));