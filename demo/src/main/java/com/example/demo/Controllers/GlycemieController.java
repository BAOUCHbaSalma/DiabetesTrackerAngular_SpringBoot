package com.example.demo.Controllers;
import com.example.demo.Models.Glycemie;
import com.example.demo.Services.GlycemieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin("*")

public class GlycemieController {

private final GlycemieService glycemieService;

    public GlycemieController(GlycemieService glycemieService) {
        this.glycemieService = glycemieService;
    }

    @GetMapping("/home")
    public ArrayList<Glycemie> home(){
        return glycemieService.ShowGlycemie();
    }

    @PostMapping ("/Add")
    public Glycemie addGlycemie(@RequestBody Glycemie glycemie) {
        return glycemieService.addGlycemie(glycemie);
    }
    @DeleteMapping("/Delete/{id}")
    public void DeleteGlycemie(@PathVariable("id") Integer id){
        glycemieService.Delete(id);
    }
    @PutMapping("/update/{id}")
    public Glycemie updateGlycemie(@PathVariable("id") Integer id,@RequestBody Glycemie glycemie){
        return  glycemieService.UpdateGlycemie(id,glycemie) ;
    }
    @GetMapping("/Find/{id}")
    public Glycemie FindGlycemie(@PathVariable("id") Integer id){
       return this.glycemieService.RecupererGlycemie(id);
    }
}
