import java.util.*;

public class P11720 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 입력
        int line1 = scanner.nextInt();
        String line2 = scanner.next();
        char[] inputs = line2.toCharArray();
        int sum = 0;

        // 처리
        for (int i = 0; i<line1; i++) {
            sum = sum + Character.getNumericValue(inputs[i]);
        }
        // 출력
        System.out.println(sum);


    }
}
