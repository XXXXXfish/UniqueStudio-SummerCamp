var postorderTraversal = function(root) {
    var ans = new Array();
    postorder(root, ans);
    return ans;
};
function postorder(root, ans) {
    if (root == null) return;
    postorder(root.left, ans);
    postorder(root.right, ans);
    ans.push(root.val);
}

var postorderTraversal = function(root) {
    var ans = new Array();
    var stack = new Array();
    if (!root) return ans;
    stack = [root];
    while (stack.length != 0) {
        root = stack.pop();
        ans.push(root.val);
        if (root.left) stack.push(root.left);
        if (root.right) stack.push(root.right);
    }
    return ans.reverse();
};