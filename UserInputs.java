import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class UserInputs {
    public static void main(String args[]) throws Exception {
        System.out.println("Please provide your comments or review on below topics. \n" +
                "Press Enter after your input on each topic to proceed with next topic \n"+
                        "Press Ctrl C to exit\n");
        try{
            saveToFile("BaseBall");
            saveToFile("BasketBall");
            saveToFile("Movies");
            saveToFile("Socker");
            saveToFile("Hockey");
        }catch(Exception ex){
            ex.printStackTrace();
        }
    }
        public static void saveToFile(String topic) throws Exception{
            Path topicFile = Paths.get(""+topic+".txt");
            System.out.println("\nEnter your comments about "+topic+"\n");
            String input =  System.console().readLine();
            if(input!=null && input.length()>0){
                Files.write(topicFile ,
                        input.getBytes("utf-8"),
                        StandardOpenOption.CREATE,
                        StandardOpenOption.TRUNCATE_EXISTING);
            }else{
                System.exit(0);
            }
        }
}
