function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const currentArea = width * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}


// This solution uses two pointers, one starting at the beginning of the array and the other starting at the end. On each iteration, it calculates the area of the container formed by the current pair of lines and the x-axis, and updates the maximum area if it's greater than the previous maximum. The pointer with the shorter line is then moved towards the center in order to potentially find a taller line that will result in a larger container.