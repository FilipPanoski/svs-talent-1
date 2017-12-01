public class DoorApplication {

    public static void main(String[] args) {

        StandardDoor standardDoor = new StandardDoor();
        standardDoor.lock();

        TimedDoor timedDoor = new TimedDoor();
        timedDoor.lock();

        Timer timer = new Timer();
        timer.register(1, timedDoor);
        // timer.register(1, standardDoor); // The compiler doesn't allow this anymore.
        timer.run();
    }

}
