package myLeetCode;

/**
 * Created by WTIFS-Mac on 2018/3/30.

 Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

 Example 1:
 Input:
 [[1,1,1],
 [1,0,1],
 [1,1,1]]

 Output:
 [[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
 Explanation:
 For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
 For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
 For the point (1,1): floor(8/9) = floor(0.88888889) = 0
 Note:
 The value in the given matrix is in the range of [0, 255].
 The length and width of the given matrix are in the range of [1, 150].

 */
public class L661ImageSmoother {

    public static int[][] imageSmoother(int[][] M) {
        if (M.length==0 || M[0].length==0) return M;
        int height = M.length;
        int width = M[0].length;
        System.out.println(height + " " + width);
        int[][] result = new int[height][width];
        for (int i=0; i<height; i++) {
            for (int j=0; j<width; j++) {
                int sum = 0;
                int count = 0;
                for (int offset1=-1; offset1<=1; offset1++) {
                    for (int offset2=-1; offset2<=1; offset2++) {
                        if (i+offset1>=0 && i+offset1<height && j+offset2>=0 && j+offset2<width) {
                            sum += M[i+offset1][j+offset2];
                            count++;
                        }
                    }
                }
                System.out.println(i + ", " + j + " " + sum + " " + count);
                result[i][j] = sum/count;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[][] m = new int[][]{
                new int[]{2,3,4},
                new int[]{5,6,7},
                new int[]{8,9,10},
                new int[]{11,12,13},
                new int[]{14,15,16}
        };
        System.out.println(imageSmoother(m)[4][2]);
    }

}
