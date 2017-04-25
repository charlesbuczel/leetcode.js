const lengthOfLongestSubstring = (s) => {
    let longest = 0, current = 0, hashMap = {};

    for (let index = 0; index < s.length; index++) {
        if (!hashMap[s[index]]) {
            hashMap[s[index]] = true;
            current++;
        } else {
            if (current > longest) {
                longest = current;
            }

            current = 0;
            index--;
            hashMap = {};
        }

        if (current > longest) {
            longest = current;
        }
    }

    return longest;
};
