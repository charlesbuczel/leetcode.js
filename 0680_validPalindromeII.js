/**
 * @param {string} word
 * @return {boolean}
 */
const validPalindrome = (word) => { 
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

const isPalindrome = (word, left, right) => {
    while (left < right) {
        if (word[left] !== word[right]) return false;

        left++;
        right--;
    }

    return true;
}