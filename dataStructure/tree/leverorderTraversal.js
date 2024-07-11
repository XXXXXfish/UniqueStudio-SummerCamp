var levelOrder = function(root) {
    var queue = [root];
    var ans = [];
    while (queue.length != 0) {
        root = queue.shift();
        ans.push(root.val);
        if (root.left) queue.push(root.left);
        if (root.right) queue.push(root.right);
    }
    return ans;
};