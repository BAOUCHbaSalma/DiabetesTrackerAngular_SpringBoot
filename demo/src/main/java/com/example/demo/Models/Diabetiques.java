package com.example.demo.Models;

import jakarta.persistence.*;

import java.util.Collection;
@Entity
public class Diabetiques {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idDiabetiques;

    @Column
    private String nameDiabetiques;

    @Column
    private Integer poids;

    @Column
    private Integer taille;

    @Column
    private Integer ageDiabetiques;

    @Column
    private String genre;

    @OneToMany(mappedBy = "diabetiques")
    private Collection<Glycemie> valuesGlycemies;

}
