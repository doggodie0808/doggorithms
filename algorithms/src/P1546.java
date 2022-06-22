import java.util.*;

public class P1546 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // 입력 횟수를 위한 정수 변수 생성
        long number = sc.nextInt();
        // 점수를 한번에 입력받을 문자열 변수를 생성
        sc.nextLine();
        String line = sc.nextLine();
        // 한번에 입력받은 문자열을 공백으로 구분해 문자열 배열 생성
        String s_scores[] = line.split(" ");
        double i_scores[] = new double[s_scores.length];
        for (int i=0; i< s_scores.length; i++) { // 문자열 배열의 크기만큼 반복
            // 문자 배열을 정수배열로 변환
           i_scores[i] = Integer.parseInt(s_scores[i]);
        }
        // 최고점수를 할당할 변수 선언
        double max=0;
        for (int i=0; i<i_scores.length; i++) { // 정수 배열의 크기만큼 반복
            // 가장 큰 숫자를 max 변수에 할당
            if(max < i_scores[i]) {
                max = i_scores[i];
            }
        }
        for (int i=0; i<i_scores.length; i++) { // 정수 배열의 크기만큼 반복
            // (현재점수/최고점수 * 100)으로 새로운 점수 만들기
            i_scores[i] = i_scores[i]/max*100;
        }
        // 새로운 점수를 할당할 변수 선언
        double sum = 0;
        for (int i=0; i<i_scores.length; i++) { // 정수 배열크기 만큼 반복
            // 새로운점수를 모두 더하기
            sum = sum + i_scores[i];
        }
        // 평균구하기
        double avg = sum / i_scores.length;
        // 출력하기
        System.out.println(avg);
    }
}
