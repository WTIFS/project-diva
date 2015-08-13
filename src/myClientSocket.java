import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.Writer;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.nio.Buffer;


public class myClientSocket{
	public static void main(String args[]) throws Exception{
		String host = "127.0.0.1";
		int port = 11111;
		Socket client = new Socket(host, port);
		client.setSoTimeout(10*1000);
		
		Writer writer = new OutputStreamWriter(client.getOutputStream(),"UTF-8");
		writer.write("Hello server");
		writer.write("eof\n");
		writer.flush();//写完后要记得flush  
		
		Reader reader = new InputStreamReader(client.getInputStream(),"GBK");
		//char[] chars = new char[64];
		//int len;
		BufferedReader breader = new BufferedReader(reader);
		StringBuffer sb = new StringBuffer();
		String temp;
		int index;
		
		try{
			//while ((len=reader.read(chars)) != -1){
				//temp = new String(chars, 0, len);
			while ( (temp = breader.readLine()) != null){
				if ((index=temp.indexOf("eof")) != -1){
					sb.append(temp.substring(0, index));
					break;
				}
				sb.append(temp);
			}
		}
		catch (SocketTimeoutException e){
			System.out.println("Timeout");
		}
		System.out.println("From server: "+sb);
		
		reader.close();
		writer.close();
		client.close();
		
	}
}
