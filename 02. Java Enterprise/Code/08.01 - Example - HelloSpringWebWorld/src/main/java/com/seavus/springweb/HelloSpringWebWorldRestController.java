package com.seavus.springweb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/hello")
public class HelloSpringWebWorldRestController {

    @RequestMapping(method = {RequestMethod.GET, RequestMethod.POST})
    @ResponseBody
    public String sayHello(@RequestParam("name") String name) {
        return "Hello " + name;
    }
}
