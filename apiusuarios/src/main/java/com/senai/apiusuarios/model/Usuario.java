package com.senai.apiusuarios.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Usuario {

    @Id // Chave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Auto increment
    private Long id;
    private String nome;

    public Usuario() {
    }

    public Usuario(Long id, String nome) {

        this.id = id;
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}

