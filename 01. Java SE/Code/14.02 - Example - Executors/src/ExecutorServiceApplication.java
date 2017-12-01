import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorServiceApplication {

    private static final int THREAD_POOL_SIZE = 2;

    public static void main(String[] args) throws Exception {

        ExecutorService executorService = Executors.newFixedThreadPool(THREAD_POOL_SIZE);

        executorService.submit(new ComplexOperation());

        Future<Integer> complexCalculationFuture = executorService.submit(new ComplexCalculation());
        Integer complexCalculationResult = complexCalculationFuture.get();
        System.out.println("Complex calculation result is " + complexCalculationResult);

        executorService.shutdown();
    }
}
