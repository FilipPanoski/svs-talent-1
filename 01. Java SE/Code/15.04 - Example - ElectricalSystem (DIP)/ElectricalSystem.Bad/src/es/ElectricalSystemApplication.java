package es;

import es.powerbutton.PowerButton;
import es.fan.Fan;
import es.lamp.Lamp;

public class ElectricalSystemApplication {

    @SuppressWarnings("unused")
	public static void main(String[] args) {

        Lamp lamp = new Lamp();
        PowerButton lampButton = new PowerButton(lamp);
        lampButton.click();
        
        Fan fan = new Fan();
        // PowerButton fanButton = new PowerButton(fan); // Won't compile.
    }
}
