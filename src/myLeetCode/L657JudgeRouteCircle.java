package myLeetCode;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by WTIFS-Mac on 2018/3/31.
 */
public class L657JudgeRouteCircle {

    public boolean judgeCircle(String moves) {
        int x = 0;
        int y = 0;
        Map<Character, Integer> xMove = new HashMap<Character, Integer>() {{
            put('R', 1);
            put('L', -1);
            put('U', 0);
            put('D', 0);
        }};
        Map<Character, Integer> yMove = new HashMap<Character, Integer>() {{
            put('R', 0);
            put('L', 0);
            put('U', 1);
            put('D', -1);
        }};

        for (char c : moves.toCharArray()) {
            x += xMove.get(c);
            y += yMove.get(c);
        }
        return x == 0 && y == 0;
    }
}
