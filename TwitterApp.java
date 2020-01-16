import java.util.Scanner;

public class TwitterApp{
    public static void main(String args[]) {
        Scanner input = new Scanner(System.in);
        System.out.println("Please enter Topics(, separated strings): ");
        String topics = input.nextLine();
        String[] topicsArray = topics!=null && topics.length()>0 ?
                topics.contains(",") ? topics.split(","):new String[]{topics}:null;
        String[] configurationKeys = {"OqyqzKWmN8xXcSJ481VYOnUyW","NqpcWYPheCB5h4J58oCr25AtCbdTITWzqd6wyCPtKkyp6y9XKM"
        ,"1217536279144845312-fvEPzUuiYwc3tuKzBTUhHV5aqFq1jE","gVkwpoh0pSjAt9t8ckd2Tevnd8yZA0SakEtOVHAVcr6EO"};
        String result = TwitterHandler.createTwitterStream(topicsArray, configurationKeys);
        System.out.println(result);
    }
}
