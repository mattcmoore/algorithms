function maxProfit(prices) {
    // Initialize variables to keep track of the current minimum price,
    // maximum profit, and the current potential profit
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    let currentProfit = 0;

    // Iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
        // Update the current minimum price if the current price is lower
        minPrice = Math.min(minPrice, prices[i]);

        // Calculate the current potential profit
        currentProfit = prices[i] - minPrice;

        // Update the maximum profit if the current potential profit is higher
        maxProfit = Math.max(maxProfit, currentProfit);
    }

    return maxProfit;
}

// This solution iterates through the prices array, keeping track of the current minimum price, the maximum profit, and the current potential profit. It updates the minimum price if the current price is lower and it calculates the current potential profit by subtracting the minimum price from the current price. Then it updates the maximum profit if the current potential profit is higher. This algorithm runs in O(n) time complexity and O(1) space complexity.