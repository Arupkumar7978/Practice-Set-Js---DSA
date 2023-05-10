import java.util.ArrayList;
import java.util.List;

class MinimumCoins {

    public static void getCoins(int arr[], int value) {

        List<Integer> list = new ArrayList<>();

        for (int i = arr.length - 1; i >= 0; i--) {

            while (value >= arr[i]) {
                value -= arr[i];
                list.add(arr[i]);
            }
        }

        for (Integer a : list) {
            System.out.print(a + "," );
        }

    }

    public static void main(String args[]) {
        int a[] = { 1, 2, 5, 10, 20, 50, 100,200, 500, 1000 };
        int v = 722;

        getCoins(a, v);

    }
}