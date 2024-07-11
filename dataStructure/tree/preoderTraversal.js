var preorderTraversal = function(root) {
    var number = new Array();
    preorder(root, number);
    return number;
};
function preorder(root, number) {
        if (root == null) {
            return;
        }
        number.push(root.val);
        preorder(root.left, number);
        preorder(root.right, number);
    }

var preorderTraversal = function(root) {
    var ans = new Array();
    var stack = new Array();
    if (!root) return ans;
    stack = [root];
    while (stack.length != 0) {
        root = stack.pop();
        ans.push(root.val);
        if (root.right) stack.push(root.right);
        if (root.left) stack.push(root.left);
    }
    return ans;
};

var preorderTraversal = function(root) {
    var stack = [];
    var ans = new Array();
    if (!root) return ans;
    do {
        if (root != null) {
            ans.push(root.val);
            stack.push(root);
            if (root.left) {
                root = root.left;
            }else{
                root = null;
            }
        }else{
            root = stack.pop();
            if (root.right) {
                root = root.right;
            }else{
                root = null;
            }
        }
    }while(root || stack.length != 0)
    return ans;
};