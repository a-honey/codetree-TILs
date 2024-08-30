public class Main {
    public static void main(String[] args) {
        double a = 9.2;
        double b = 1.3;

        final double feat = 30.48;
        final double miles = 160934;

        System.out.printf("%.1fft = %.1fcm%n", a, a*feat);
        System.out.printf("%.1fmi = %.1fcm%n", b, b*miles);
    }
}