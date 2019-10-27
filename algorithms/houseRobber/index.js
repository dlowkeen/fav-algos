function rob(nums) {
    let visited = [[0, 0]];

    for (let i = 1; i < nums.length + 1; i++) {
        visited.push([]);
        visited[i].push(Math.max(visited[i - 1][0], visited[i - 1][1]));
        visited[i].push(visited[i - 1][0] + nums[i - 1]);
    }
    return Math.max(visited[nums.length][0], visited[nums.length][1]);
}

module.exports = rob;