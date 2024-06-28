package com.example.demo.Services;

import com.example.demo.Models.Glycemie;
import com.example.demo.Repository.GlycemieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class GlycemieService {
@Autowired
    GlycemieRepository glycemieRepository;

    public ArrayList<Glycemie> ShowGlycemie() {
        return (ArrayList<Glycemie>) glycemieRepository.findAll();


    }

    public Glycemie addGlycemie(Glycemie glycemie) {
        return glycemieRepository.save(glycemie);

    }

    public Glycemie RecupererGlycemie(Integer id){
        return glycemieRepository.findById(id).orElseThrow();
    }
    public Glycemie UpdateGlycemie(Integer id , Glycemie glycemie){
       Glycemie glycemie1= RecupererGlycemie(id);
       glycemie1.setValeurBefore(glycemie.getValeurBefore());
       glycemie1.setValeurAfter(glycemie.getValeurAfter());
       glycemie1.setDate(glycemie.getDate());
       glycemie1.setHeurs(glycemie.getHeurs());
       return glycemieRepository.save(glycemie1);
    }
    public void Delete(Integer id){
        glycemieRepository.deleteById(id);
    }

}
