/**
 * @param {string} word Input string to check.
 * @return {boolean} Can string be a palindrome with at least one character deleted.
 * @summary Valid Palindrome II {@link https://leetcode.com/problems/valid-palindrome-ii/}
 * @description Given a string, can it be a palindrome with at most one character removed.
 * Space O(1) - no extra memory used.
 * Time O(n) - iterate once over a list, perform up to two check (each is n).
 */
const validPalindrome = word => { 
    const isPalindrome = (word, left, right) => {
        while (left < right) {
            if (word[left] !== word[right]) return false;
    
            left++;
            right--;
        }
    
        return true;
    }

    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return isPalindrome(word, left + 1, right) || isPalindrome(word, left, right - 1);
        }

        left++;
        right--;
    }

    return true;
};