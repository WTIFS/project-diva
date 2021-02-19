package myPlayGround;

import org.bouncycastle.crypto.engines.AESFastEngine;
import org.bouncycastle.crypto.modes.CBCBlockCipher;
import org.bouncycastle.crypto.paddings.PaddedBufferedBlockCipher;
import org.bouncycastle.crypto.params.KeyParameter;
import org.bouncycastle.crypto.params.ParametersWithIV;
import org.bouncycastle.util.encoders.Base64;

import java.nio.charset.StandardCharsets;
import java.util.Random;

public class AESUtils {

    private static String ASE_KEY = "OmwMfS0HBsSAVj64g1smBi76zurVMSBn";
    private static String PROTOCOL_VERSION = "AES/CBC/PKCS7Padding";

    /**
     * 生成iv
     *
     * @return
     */
    private static byte[] ivBytes() {
        Random rng = new Random(System.currentTimeMillis() + 1127);
        byte[] ivBytes = new byte[16]; //16位
        rng.nextBytes(ivBytes);
        return ivBytes;
    }

    public static void main(String[] args) throws Exception {
        String e1 = "[1559259909800,com.cloudwallet,云钱包,1,10538,5.5.4.1,1587607662523 1556025023937,com.chinaso.so,花漾搜索,1,1911161802,3.7.0,1584916306341 1588051893925,com.hpbr.bosszhipin,BOSS直聘,1,803010,8.030,1588051893925 1560469162442,com.ecareyun.cloudpos,云库房,1,9,1.2.1,1586145248271 1582659762718,com.szcx.cleanerfast,极速清理大师(极速版),1,13,1.1.3,1585361065847 1581760628294,com.songwo.pig,阳光养猪场,1,22,1.2.2,1588605306968 1557989947484,com.niwodai.universityloan,你我贷借款,1,89,4.5.0,1573944331575 1557709006276,com.shuhekeji,还呗,1,1050100,5.1.0,1586407855729 1557241911747,com.qiyi.video,爱奇艺,1,800110455,11.4.5,1588140937807 1560387711087,com.jj.jhqbLocal,金基宝,1,3,1.0.0,1560387711087 1558511303812,aiqianjin.jiea,钱站,1,335,3.3.5,1579808860497 1558519480414,com.mobile.xy00081,158彩票,1,30,1.6.1,1558573082269 1564240522375,com.tencent.qqmusic,QQ音乐,1,1485,9.12.0.6,1587773023029 1558520984277,org.xianliao,闲聊,1,92,2.0.7,1575485139414 1585449019126,com.hdd.xiaochu,趣消除,1,10,1.0.7,1585449019126 1556066624241,com.zhongrenke.wallet,量子钱包,1,12,1.2.3,1556066652758 1587874122786,com.jianzhi.ai,爱兼职,1,1,1.0.0,1587874122786 1560384455687,com.hyron.b2b2p,2345贷款王,1,70100,7.1.0,1569508480476 1586476635324,com.hdd.baoshi,全民宝石消消消,1,12,1.2.0,1586476635324 1560406156017,com.dcloud.BGNESAXOC,CBT,1,4,1.0.0,1560406156017 1586480939388,com.yangcong.job,洋葱兼职,1,2,1.0.1,1586480939388 1558013402210,com.souche.apps.destiny,弹个车,1,121,5.1.70,1588639562853 1556017327761,com.tencent.mm,微信,1,1640,7.0.13,1586679307560 1588048942617,com.mengtuiapp.mall,萌推,1,27081,2.7.8.1,1588891108006 1560464280869,com.zlqb.app,助力钱包,1,286,2.8.6,1588028114012 1560995313951,com.sdu.didi.psnger,滴滴出行,1,841,5.4.12,1588639759141 1557708828620,com.tencent.android.qqdownloader,应用宝,1,7352130,7.3.5,1557708828620 1562608758457,com.sibu.futurebazaar,未来集市,1,69,1.9.8,1585960585830 1587859052309,com.pedometer.money.cn,欢乐走,1,513,5.1.3,1587859052309 1586569976380,com.milecn.milevideo,秘乐短视频,1,37,1.3.4,1587945507233 1588250229523,com.android.lot.ttzclll,天天中彩,1,2,1.0.1,1588250229523 1560740569284,com.rxh.renxinghua,任性花,1,110,1.1.0,1560740569284 1560465713271,com.shuqu.banyan,榕树贷款,1,49,3.17.0,1587858336598 1559220323932,com.tencent.map,腾讯地图,1,722,8.13.2,1588635976619 1561672945285,com.tencent.mtt,QQ浏览器,1,10306730,10.3.0.6730,1587858220793 1560447655203,com.scce.pcn,PCN,1,66,3.1.1,1588057958497 1587867993695,com.zhenxuan.job,甄享兼职,1,1,2.0.1,1587895363249 1556886478347,com.alibaba.wireless.lstretailer,阿里零售通,1,430051000,5.10.0,1586407926672 1585765177534,com.pigsy.punch.app,八戒打卡,1,10055,1.0.55,1588892900666 1586584780304,com.xmiles.idiom,成语升官传,1,117,1.1.7,1587091738369 1585122109332,com.jm.video,刷宝短视频,1,2200,2.200,1587004862217 1588738037774,com.and.mahjong.kx,开心连连看,1,100201,2.0.1,1588738037774 1560464785210,com.renrendai.haohuan,好分期,1,586,5.8.6,1588199544533 1556069957448,com.ss.android.ugc.aweme,抖音短视频,1,100901,10.9.0,1588605362614 1556064018177,com.tencent.mobileqq,QQ,1,1392,8.3.5,1588126713613 1586665216027,com.jbby.hlsk.shuabaoshipinSeven,竞暴捕鱼,1,26,9.90,1586665216027 1587866164030,com.hjz5.xxx,好兼职,1,202,2.0,1587866669327 1560498642145,com.xhqb.app,小花钱包,1,79,5.1.4,1587941952022 1586440248373,com.tuoluo.shijie,陀螺世界,1,20200422,2.2.6,1587656926873 1558513639492,com.liuniukeji.yunyue,云约,1,103,3.2.8,1586473120089 1559124080587,io.dcloud.W2Aktuhwt.cn1,HUAWEI-B,1,1,1.0,1559124080587 1561627636229,com.vivo.freewificheck,vivo免费wifi服务,1,3,1.2,1561627636229 1586944780391,rXeB.jCtr.Bhug,蚂蚁借呗,1,1,1.0,1586944780391 1581803174731,com.dragon.read,番茄免费小说,1,290,2.9.0.33,1588228214867 1567148716358,com.xxt.jxlxandroid,河南校讯通,1,911,9.1.1,1583506750914 1588839982131,com.p1.mobile.putong,探探,1,542,3.9.9.2,1588839982131 1569506926492,com.alibaba.android.rimet,钉钉,1,615,5.0.16,1588042725582 1585771193289,com.szlzy.csycj,财神养成记,1,208,2.0.8,1585771193289 1558829834792,com.qihoo.loan,360借条-贷款分期借款,1,297,1.7.14,1587163942406 1587873994145,com.game.matrix_crazyplane,全民机长,1,6662,6.6.6.2,1587873994145 1586585055048,cn.king.island,建个海岛我当王,1,1,1.008,1586585055048 1587873864896,com.shuixin.bearshopping,走走赚赚,1,35,1.3.4,1587873864896 1585190938939,com.starbaba.luckyremove,幸运爱消除,1,123,1.2.3,1585190938939 1588151697357,com.magic.clmanager,手机清理管家,1,109,2.3.9,1588151697357 1557585367472,com.lanjingren.ivwen,美篇,1,7236,5.5.5,1587163875831 1556063719706,com.eg.android.AlipayGphone,支付宝,1,260,10.1.92.7000,1587708903215]";
        byte[] e = encrypt(e1.getBytes(StandardCharsets.UTF_8));
        System.out.println(new String(Base64.encode(e)));
//        System.out.println(new String(e));

        byte[] d = decrypt(Base64.decode(("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").getBytes(StandardCharsets.UTF_8)));
        System.out.println(new String(d));
    }

    private static byte[] encrypt1( byte[] data) {
        if (data == null) return null;
        try {
            byte[] key = ASE_KEY.getBytes(StandardCharsets.UTF_8);

            PaddedBufferedBlockCipher cipher = new PaddedBufferedBlockCipher(new CBCBlockCipher(new AESFastEngine()));
            // Random iv, doesn't use secure random.. because we are afraid they find out
            Random rng = new Random(System.currentTimeMillis() + 1127);
            byte[] ivBytes = new byte[16];
            rng.nextBytes(ivBytes);
            cipher.init(true, new ParametersWithIV(new KeyParameter(key), ivBytes));
            byte[] res = new byte[cipher.getOutputSize(data.length)];
            int processed = cipher.processBytes(data, 0, data.length, res, 0);
            cipher.doFinal(res, processed);

            byte[] out = new byte[ivBytes.length + res.length];
            System.arraycopy(ivBytes, 0, out, 0, ivBytes.length);
            System.arraycopy(res, 0, out, ivBytes.length, res.length);
            return out;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


    /**
     * 数据加密
     *
     * @param cipher 处理算法
     * @param data   数据
     * @return 加密好的数据
     * @throws Exception
     */
    private static byte[] doCipher(PaddedBufferedBlockCipher cipher, byte[] data) throws Exception {
        int minSize = cipher.getOutputSize(data.length); //第一阶段字节数组
        byte[] outBuf = new byte[minSize];
        int processed = cipher.processBytes(data, 0, data.length, outBuf, 0);
        int finalHandled = cipher.doFinal(outBuf, processed);
        int actualLength = processed + finalHandled;
        //返回结果
        byte[] result = new byte[actualLength];
        System.arraycopy(outBuf, 0, result, 0, result.length);
        return result;
    }

    /**
     * 加密
     *
     * @param input
     * @return
     * @throws Exception
     */
    public static byte[] encrypt(byte[] input) throws Exception {
        //iv
        byte[] ivBytes = ivBytes();
        PaddedBufferedBlockCipher aes = new PaddedBufferedBlockCipher(new CBCBlockCipher(new AESFastEngine()));
        ParametersWithIV ivAndKey = new ParametersWithIV(new KeyParameter(ASE_KEY.getBytes("UTF-8")), ivBytes);
        aes.init(true, ivAndKey);
        //开始加密
        byte[] res = doCipher(aes, input);
        //输出结果 iv + data
        byte[] out = new byte[ivBytes.length + res.length];
        System.arraycopy(ivBytes, 0, out, 0, ivBytes.length);
        System.arraycopy(res, 0, out, ivBytes.length, res.length);
        return out;
    }

    /**
     * 解密
     *
     * @param input
     * @return
     * @throws Exception
     */
    public static byte[] decrypt(byte[] input) throws Exception {
        //16位的iv
        byte[] ivBytes = new byte[16];
        System.arraycopy(input, 0, ivBytes, 0, 16);
        //数据
        int dataLength = input.length - ivBytes.length;
        byte[] data = new byte[dataLength];
        System.arraycopy(input, ivBytes.length, data, 0, dataLength);

        //开始解密
        PaddedBufferedBlockCipher aes = new PaddedBufferedBlockCipher(new CBCBlockCipher(new AESFastEngine()));
        ParametersWithIV ivAndKey = new ParametersWithIV(new KeyParameter(ASE_KEY.getBytes("UTF-8")), ivBytes);
        aes.init(false, ivAndKey);
        return doCipher(aes, data);
    }
}

