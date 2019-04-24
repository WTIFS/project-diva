import myLeetCode.TreeNode;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

/**
 * Created by WTIFS-Mac on 2018/4/4.
 */
public class L662aximumWidthOfBinaryTree {

    public int widthOfBinaryTree(TreeNode root) {
        if (root == null) return 0;
        Queue<TreeNode> queue = new LinkedList<>();
        Map<TreeNode, Integer> indexMap = new HashMap<>();
        int result = 1;
        queue.offer(root);
        indexMap.put(root, 1);
        while (!queue.isEmpty()) {
            int queueSize = queue.size();
            int start = indexMap.get(queue.peek());
            int end = start;
            for (int i=0; i<queueSize; i++) {
                TreeNode p = queue.poll();
                int indexOfP = indexMap.get(p);
                if (i==queueSize-1) end = indexOfP;
                if (p.left != null) {
                    queue.offer(p.left);
                    indexMap.put(p.left, indexOfP<<1);
                }
                if (p.right != null) {
                    queue.offer(p.right);
                    indexMap.put(p.right, (indexOfP<<1)+1);
                }
            }
            result = Math.max(result, end-start+1);
        }
        return result;
    }

}
