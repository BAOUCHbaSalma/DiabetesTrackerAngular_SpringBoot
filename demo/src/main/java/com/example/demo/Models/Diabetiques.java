package com.example.demo.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Collection;
@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
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
    @JsonIgnore
    private Collection<Glycemie> valuesGlycemies;

}
