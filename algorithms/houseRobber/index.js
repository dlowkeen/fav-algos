function rob(num) {
    let dp = [
        [0, 0]
    ];

    for (let i = 1; i <= num.length; i++) {

        dp[i] = [];

        dp[i].push(Math.max(dp[i - 1][0], dp[i - 1][1]));

        dp[i].push(num[i - 1] + dp[i - 1][0]);

    }

    console.log(dp);

    console.log('Answer: ', Math.max(dp[num.length][0], dp[num.length][1]));

    return Math.max(dp[num.length][0], dp[num.length][1]);

}

module.exports = rob;