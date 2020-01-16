
Requirements
At the program start-up, it should prompt a user to enter up to 5 different topics (e.g. baseball, basketball, movies, etc.)
The program should read these topics continuously and output the tweets to different files (e.g. baseball.txt, movies.txt) until the user exit the program.

Note:
For compiling and running this application you need Java 7 or later

Steps:
1. Get the code from gitRepo/master
2. open commandPrompt(WINDOWS) OR Terminal(MAC)
3. Go to TwitterApp class file path
4. After setting java path in environment variables or .bash_profile, execute the below commands to compile and run the file
5. Commands:
    javac -cp "./lib/*";"." TwitterApp.java
    java -cp "./lib/*";"." TwitterApp
6. Will prompt user with instructions
7. Enter the input or Control C to exit
8. Corresponding files will be generated in root folder where the TwitterApp class file is located
9. We need OAuth configuration keys from twitter app to connect(For testing hardcoded in TwitterApp for now)
