import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.Writer;
import java.net.ServerSocket;
import java.net.Socket;



public class myServerSocket {
	public static void main(String args[]) throws IOException{
		int port = 11111; 
		ServerSocket server = new ServerSocket(port);
		while (true){
			Socket socket = server.accept();
			new Thread(new Task(socket)).start();
		}
	}
	
	static class Task implements Runnable{
		
		private Socket socket;
		
		public Task(Socket socket){
			this.socket = socket;
		}
		
		public void run(){
			try{
				handleSocket();
			}
			catch (Exception e){
				e.printStackTrace();
			}
		}
		
		private void handleSocket() throws Exception{	
			Reader reader = new InputStreamReader(socket.getInputStream(),"UTF-8");
			//char[] chars = new char[64];
			//int len;
			BufferedReader breader = new BufferedReader(reader);
			StringBuilder sb = new StringBuilder();
			String temp;
			int index;
			//while ( (len=reader.read(chars)) != -1 ){
				//temp = new String(chars, 0, len);
			while ((temp = breader.readLine())!=null){
				if ( (index=temp.indexOf("eof")) != -1 ){
					sb.append(temp.substring(0, index));
					break;
				}
				sb.append(temp);
			}
			System.out.println("From client: "+sb);
			
			Writer writer = new OutputStreamWriter(socket.getOutputStream(),"GBK");
			writer.write("Hello client");
			writer.write("eof\n");
			writer.flush();
			
			writer.close();
			reader.close();
			socket.close();
		}
	}
}

///Ref
/*
 * Java Socket编程
 * http://haohaoxuexi.iteye.com/blog/1979837
 */