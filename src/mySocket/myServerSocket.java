package mySocket;

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
 * 
 * 从输入流中读取数据是一个阻塞式操作，在上述的while循环中当读到数据的时候就会执行循环体，否则就会阻塞，这样后面的写操作就永远都执行不了了。除非客户端对应的Socket关闭了阻塞才会停止，while循环也会跳出。针对这种可能永远无法执行下去的情况的解决方法是while循环需要在里面有条件的跳出来，纵观上述代码，在不断变化的也只有取到的长度len和读到的数据了，len已经是不能用的了，唯一能用的就是读到的数据了。针对这种情况，通常我们都会约定一个结束标记，当客户端发送过来的数据包含某个结束标记时就说明当前的数据已经发送完毕了，这个时候我们就可以进行循环的跳出了。
 */