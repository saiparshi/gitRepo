import twitter4j.*;
import twitter4j.conf.Configuration;
import twitter4j.conf.ConfigurationBuilder;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;
import java.util.Optional;

public class TwitterHandler {

    private static Configuration getConfigurationBuilder(String[] configurationKeys){
        ConfigurationBuilder cb = new ConfigurationBuilder();
        cb.setDebugEnabled(true)
                .setOAuthConsumerKey(configurationKeys[0])
                .setOAuthConsumerSecret(configurationKeys[1])
                .setOAuthAccessToken(configurationKeys[2])
                .setOAuthAccessTokenSecret(configurationKeys[3]);
        return cb.build();
    }

    public static String createTwitterStream(String[] topicsArray, String[] configurationKeys){
        TwitterStream twitterStream = new TwitterStreamFactory(getConfigurationBuilder(configurationKeys)).getInstance();
        try {
            twitterStream.addListener(new StatusListener() {
                @Override
                public void onStatus(Status status) {
                    try {
                        saveToFile(status.getText(), topicsArray);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }

                @Override
                public void onDeletionNotice(StatusDeletionNotice statusDeletionNotice) {

                }

                @Override
                public void onTrackLimitationNotice(int i) {

                }

                @Override
                public void onScrubGeo(long l, long l1) {

                }

                @Override
                public void onException(Exception e) {
                    e.printStackTrace();
                }

                @Override
                public void onStallWarning(StallWarning warning) {
                    // System.out.println("Got stall warning:" + warning);
                }
            });
            FilterQuery query = new FilterQuery().track(topicsArray);
            twitterStream.filter(query);
        }catch (Exception ex){
            ex.printStackTrace();
            twitterStream.shutdown();
        }
        return "Created Stream successfully. Please go ahead tweet on your topics to see the updates in the files";
    }

    public static void saveToFile(String message, String[] topics) throws Exception{
        if(message!=null && message.length()>0){
            Optional<String> topic = Arrays.stream(topics).filter(t -> message.contains(t)).findFirst();
            if(topic.isPresent()){
                Path topicFile = Paths.get(""+topic.get()+".txt");
                Files.write(topicFile ,
                        message.getBytes("utf-8"),
                        StandardOpenOption.CREATE,
                        StandardOpenOption.APPEND);
            }
        }
    }
}
