import java.io.BufferedInputStream;
import java.io.IOException;

public class ConsoleInput {

    public static String readLine() {
        StringBuffer response = new StringBuffer();
        try {
            BufferedInputStream buff = new BufferedInputStream(System.in);
            int in = 0;
            char inChar;
            do {
                in = buff.read();
                inChar = (char) in;
                if ((in != -1) & (in != '\n') & (in != '\r')) {
                    response.append(inChar);
                }
            } while ((in != -1) & (inChar != '\n') & (in != '\r'));
            buff.close();
            return response.toString();

        } catch (IOException e) {
            System.out.println("Exception: " + e.getMessage());
            return null;
        }
    }

    public static void main(String[] args) {
        System.out.print("\nWhat is your name? ");
        String input = ConsoleInput.readLine();
        System.out.println("\nHello, " + input);
    }
}
