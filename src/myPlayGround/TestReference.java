package myPlayGround;

import java.util.*;

/**
 * Created by Yuanfei on 2015/11/10.
 */
public class TestReference {

    public static List change(List a){
        Set set = new HashSet(a);
        Object[] o = set.toArray();
        a = Arrays.asList(o);
        return a;
        //a = new ArrayList();
        //a.add(3);
    }

    public static void main(String[] args){
        ArrayList<Integer> a = new ArrayList();
        a.add(1);
        a.add(2);
        a.add(1);
        List b = change(a);
        System.out.println(b.get(0));   //1
    }

}
