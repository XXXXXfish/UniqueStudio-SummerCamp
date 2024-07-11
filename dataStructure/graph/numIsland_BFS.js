var numIslands = function(grid) {
    const row = grid.length;
    const column = grid[0].length;
    var ans = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] == '1') {
                grid[i][j] = '0'
                bfs(grid, i, j);
                ans++;
            }
        }
    }
    function bfs(grid, i, j) {
        var queue = [[i, j]];//存放节点的位置
        var index;
        var node;
        const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        while (queue.length) {
            node = queue.shift();
            //grid[node[0], node[1]] = '0';
            for (index of dir) {
                var x = node[0] + index[0];
                var y = node[1] + index[1];
                if ( x < row && y < column && x >= 0 && y >= 0 && grid[x][y] == '1') {
                    queue.push([x, y]);
                    grid[x][y] = '0';
                }
            }
            
        }
    }
};