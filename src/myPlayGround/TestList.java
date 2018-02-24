package myPlayGround;

import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by Yuanfei on 2017/6/9.
 */
public class TestList {

    public static void main(String[] argv) {
        List<String> l = new ArrayList<>();
        l.add("?");
        l.add("?");
        String s = StringUtils.join(l, ",");
        System.out.println(s);


        String[] a = new String[]{"a", "b"};
        String[] b = Arrays.copyOf(a, a.length + 1);
        System.out.println(b);
        b[2] = "c";
        System.out.println(b);

    }



}
