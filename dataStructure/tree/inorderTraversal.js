var inorderTraversal = function(root) {
    var ans = new Array();
    inorder(root, ans);
    return ans;
};
function inorder(root, ans) {
    if (!root) return;
    inorder(root.left, ans);
    ans.push(root.val);
    inorder(root.right, ans);
}

var inorderTraversal = function(root) {
    var stack = [];
    var ans = new Array();
    if (!root) return ans;
    do {
        if (root != null) {
            stack.push(root);
            if (root.left) {
                root = root.left;
            }else{
                root = null;
            }
        }else{
            root = stack.pop();
            ans.push(root.val);
            if (root.right) {
                root = root.right;
            }else{
                root = null;
            }
        }
    }while(root != null || stack.length != 0)
    return ans;
};