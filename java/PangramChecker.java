// 3) Check if the input is pangram or not. (A pangram is a sentence that contains all the alphabets from A to Z)

public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; 
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        input = input.toLowerCase();
        
        for (char letter = 'a'; letter <= 'z'; letter++) {
            if (input.indexOf(letter) == -1) {
                return false;
            }
        }
        
        return true;
    }
}
