package myLeetCode;

import java.util.*;

/**
 * Created by WTIFS-Mac on 2018/3/27.

 Given a non-empty list of words, return the k most frequent elements.

 Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

 Example 1:
 Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 Output: ["i", "love"]
 Explanation: "i" and "love" are the two most frequent words.
 Note that "i" comes before "love" due to a lower alphabetical order.
 Example 2:
 Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 Output: ["the", "is", "sunny", "day"]
 Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
 with the number of occurrence being 4, 3, 2 and 1 respectively.
 Note:
 You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 Input words contain only lowercase letters.
 Follow up:
 Try to solve it in O(n log k) time and O(n) extra space.

 */
public class L692TopKFrequentWords {

    public List<String> topKFrequent(String[] words, int k) {
        HashMap<String, Integer> countMap = new HashMap<>();
        LinkedList<String> result = new LinkedList<>();
        for (String word: words) {
            countMap.put(word, countMap.getOrDefault(word, 0) + 1);
        }
        Comparator<Map.Entry<String, Integer>> cmp = (o1, o2) -> {
            if (o1.getValue().equals(o2.getValue())) return o2.getKey().compareTo(o1.getKey());
            else return o1.getValue() - o2.getValue();
        };

        PriorityQueue<Map.Entry<String, Integer>> queue = new PriorityQueue<>(cmp);
        for (Map.Entry<String, Integer> entry: countMap.entrySet()) {
            queue.offer(entry);
            if (queue.size()>k) queue.poll();
        }
        while (!queue.isEmpty()) {
            result.addFirst(queue.poll().getKey());
        }
        return result;
    }

}
