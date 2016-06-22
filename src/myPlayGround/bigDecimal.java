package myPlayGround;

import java.math.BigDecimal;

/**
 * Created by Yuanfei on 2016/3/14.
 */
public class bigDecimal {
    BigDecimal interestAmount = new BigDecimal(10).multiply(new BigDecimal(10)).multiply(new BigDecimal(0.1))
            .divide(new BigDecimal("360"), 4).divide(new BigDecimal("100"), 4).setScale(2, BigDecimal.ROUND_HALF_UP);
}
