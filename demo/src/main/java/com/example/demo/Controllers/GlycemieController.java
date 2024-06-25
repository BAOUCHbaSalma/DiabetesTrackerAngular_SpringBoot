package com.example.demo.Controllers;
import com.example.demo.Models.Glycemie;
import com.example.demo.Services.GlycemieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class GlycemieController {

private final GlycemieService glycemieService;

    public GlycemieController(GlycemieService glycemieService) {
        this.glycemieService = glycemieService;
    }

    @RequestMapping("/home")
    public ArrayList<Glycemie> home(){
        return glycemieService.ShowGlycemie();
    }
}
