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

}
