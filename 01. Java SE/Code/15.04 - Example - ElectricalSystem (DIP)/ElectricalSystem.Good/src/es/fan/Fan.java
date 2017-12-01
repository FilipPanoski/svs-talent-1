package es.fan;

import es.powerbutton.PoweredDevice;

public class Fan implements PoweredDevice {

    @Override
    public void enable() {
        System.out.println("es.fan.Fan.enable");
    }

    @Override
    public void disable() {
        System.out.println("es.fan.Fan.disable");
    }
}
