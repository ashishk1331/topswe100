const lc_prefix = "https://leetcode.com/problems/";

const lc_questions = [
    "Fizz Buzz",
    "Two Sum",
    "Valid Anagram",
    "Reverse String",
    "Valid Palindrome",
    //'Contains Duplicate',
    "Longest Common Prefix",
    //'First Unique Character in a String',
    "Power of Three",
    //'Reverse Bits',
    "Number of 1 Bits",
    "Range Sum Query - Immutable",
    "Fibonacci Number",
    "Climbing Stairs",
    "Min Cost Climbing Stairs",
    "Best Time to Buy and Sell Stock",
    "Binary Tree Inorder Traversal",
    "Invert Binary Tree",
    "Symmetric Tree",
    "Maximum Depth of Binary Tree",
    "Same Tree",
    //'Sum of Left Leaves',
    "Path Sum",
    "Minimum Depth of Binary Tree",
    "Validate Binary Search Tree",
    "Reverse Linked List",
    "Middle of the Linked List",
    "Binary Tree Level Order Traversal",
    //'Average of Levels in Binary Tree',
    "Find if Path Exists in Graph",
    //'Find Center of Star Graph',
    "Number of Islands",
    "Max Area of Island",
    "Count Sub Islands",
    //'Find All Groups of Farmland',
    "Valid Parentheses",
    //'Valid Parenthesis String',
    //'Range Sum Query 2D - Immutable',
    "Product of Array Except Self",
    "Binary Search",
    //'Minimum Number of Swaps to Make the String Balanced',
    "Minimum Add to Make Parentheses Valid",
    "Longest Palindromic Substring",
    // 'Reverse Integer',
    "Two Sum II - Input Array Is Sorted",
    "Container With Most Water",
    "3Sum",
    "Group Anagrams",
    "Kth Largest Element in an Array",
    "K Closest Points to Origin",
    "Insert Delete GetRandom O(1)",
    "First Bad Version",
    "Find Peak Element",
    "Sqrt(x)",
    "Koko Eating Bananas",
    "Subarray Sum Equals K",
    "Continuous Subarray Sum",
    //'Subarray Sums Divisible by K',
    "Count Number of Nice Subarrays",
    //'Number of Pairs of Strings With Concatenation Equal to Target',
    "Clone Graph",
    "Copy List with Random Pointer",
    "Is Graph Bipartite",
    "Evaluate Division",
    // dp 2
    "Maximum Subarray",
    "Maximum Product Subarray",
    //'Maximum Sum Circular Subarray',
    //'Maximum Absolute Sum of Any Subarray',
    "Unique Paths",
    "Minimum Path Sum",
    //'Minimum Path Cost in a Grid',
    "Longest Substring Without Repeating Characters",
    "Max Consecutive Ones III",
    "Maximize the Confusion of An Exam",
    //'Frequency of the Most Frequent Element',
    //'Count Subarrays With Score Less Than K',
    "Longest Nice Subarray",
    //'Subarrays with K Different Integers',
    "Random Pick with Weight",
    "Word Break",
    "House Robber",
    //'House Robber II',
    //'Decode Ways',
    "Coin Change",
    "Longest Increasing Subsequence",
    "Longest Common Subsequence",
    "Lowest Common Ancestor of a Binary Search Tree",
    //'Diameter of Binary Tree',
    //'Path Sum II',
    "Binary Tree Maximum Path Sum",
    "Best Time to Buy and Sell Stock II",
    "Jump Game",
    //'Best Time to Buy and Sell Stock III',
    //'Best Time to Buy and Sell Stock with Cooldown',
    "Course Schedule II",
    "Path with Maximum Probability",
    //'Network Delay Time',
    "Path With Minimum Effort",
    "Merge Intervals",
    "Insert Interval",
    "Interval List Intersections",
    "LRU Cache",
    "Binary Search Tree Iterator",
    "Min Stack",
    "Implement Stack using Queues",
    //'Implement Queue using Stacks',
    "Letter Combinations of a Phone Number",
    "Combination Sum",
    //'Combinations',
    "Permutations",
    "Subsets",
    "Palindrome Partitioning",
    "Implement Trie (Prefix Tree)",
    //'Design Add and Search Words Data Structure',
    "Basic Calculator",
    //'Decode String',
    "Daily Temperatures",
    "Online Stock Span",
    "Partition Equal Subset Sum",
    "Redundant Connection",
    "Find Median from Data Stream",
    //'Longest Increasing Path in a Matrix',
    "Trapping Rain Water",
    "Max Points on a Line",
    "Serialize and Deserialize Binary Tree",
    "Maximum Profit in Job Scheduling",
    //'Maximum Earnings From Taxi',
    //'Min Cost to Connect All Points',
    //'Find the City With the Smallest Number of Neighbors at a Threshold Distance',
    "Sliding Window Maximum",
    "Edit Distance",
    //'Wildcard Matching',
    //'Regular Expression Matching',
    "Largest Rectangle in Histogram",
    "Number of Atoms",
    "LFU Cache",
];

function convertProblemToLink(problem_name) {
    let suffix = problem_name
        .toLowerCase()
        .split("")
        .filter((alpha) => alpha.match(/[a-z0-9]/i) || alpha == " ")
        .map((alpha) => (alpha === " " ? "-" : alpha))
        .join("")
        .replace('--', '-');

    return lc_prefix + suffix;
}

function createData(number, name, lc_link, solution) {
    // add solution + 'tags' later
    return { number, name, lc_link };
}

function createAllData() {
    let res = [];
    for (let i = 0; i < lc_questions.length; i++) {
        res.push(
            createData(
                i + 1,
                lc_questions[i],
                convertProblemToLink(lc_questions[i]),
            ),
        );
    }
    return res;
}

export function getData(args) {
    return createAllData();
}
