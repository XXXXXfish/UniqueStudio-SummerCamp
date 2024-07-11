var numIslands = function(grid) {
    const row = grid.length;
   const column = grid[0].length;
   var ans = 0;
   for (let i = 0; i < row; i++) {
       for (let j = 0; j < column; j++) {
           if (grid[i][j] == '1') {
               dfs(grid, i, j);
               ans++;
           }
       }
   }
   function dfs(grid, i, j) {
   if ( i >= row || j >= column || i < 0 || j < 0 || grid[i][j] == '0' ) {
       return;
   }
   grid[i][j] = '0';
   dfs(grid, i + 1, j);
   dfs(grid, i - 1, j);
   dfs(grid, i, j + 1);
   dfs(grid, i, j - 1);
   }
   return ans;
};
