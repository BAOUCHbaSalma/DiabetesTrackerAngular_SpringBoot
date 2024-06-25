package com.example.demo.Controllers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GlycemieController {

    @RequestMapping("/home")
    public String home(){
        return "Hello !!!!!";
    }
}
