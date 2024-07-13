/**
 *207. 课程表
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var inDegree = new Array(numCourses).fill(0);
    var adj = new Array(numCourses).fill(null);//adj[i]为以i为前置课程的课
    var queue = new Array;//可以学习的课程
    var cnt = 0;
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
        if (adj[prerequisites[i][1]] !== null) {
            adj[prerequisites[i][1]].push(prerequisites[i][0]);
        }else{
            adj[prerequisites[i][1]] = [prerequisites[i][0]];
        }
    }
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] == 0) queue.push(i);
    }
    while (queue.length) {
        var index = queue.shift();
        cnt++;
        if (adj[index]) {
             for (let post = 0; post < adj[index].length; post++) {
            inDegree[adj[index][post]]--;
            if (inDegree[adj[index][post]] == 0) {
                queue.push([adj[index][post]]);
            }
        }
        }
    }
    if (cnt == numCourses) return true;
    return false;
};