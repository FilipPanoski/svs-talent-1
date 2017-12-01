import java.util.ArrayList;

public class Timer {

	private ArrayList<TimerClient> timerClients = new ArrayList<TimerClient>();

	public void register(int timeout, TimerClient timerClient) {

		// Ignoring the timeout for lower implementation complexity.
		timerClients.add(timerClient);
	}

	public void run() {

		// Simulating timeout.
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		for (TimerClient timerClient : timerClients) {
			timerClient.timeOut();
		}
	}
}
