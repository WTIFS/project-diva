# coding=UTF-8
import base64
import requests

SMS_URL = "http://127.0.0.1/sendsms_b64"
def sms(owners, data):
    try:
        #owners.append('walter')
        data = {'tousername': ','.join(owners), 'content': base64.b64encode(data)}
        r = requests.post(SMS_URL, data=data)
        print 'sms response: %s' % r.text
    except Exception, e:
        print 'sms error: %s' % unicode(e)

if __name__=="__main__":
    #sms(['chenyuanfei'], 'asdf')
    sms(['chenyuanfei'], 'Job uc#uc信息流-探探cs is stopped at 2019-01-02 07:44:58.400994044 +0800 CST m=+397980.037917692')
