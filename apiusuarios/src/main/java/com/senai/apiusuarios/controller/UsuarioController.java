package com.senai.apiusuarios.controller;

import com.senai.apiusuarios.model.Usuario;
import com.senai.apiusuarios.repository.UsuarioRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private UsuarioRepository repository;

    public UsuarioController(UsuarioRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Usuario> listar(){
        return repository.findAll();
    }

    @PostMapping
    public Usuario criar(@RequestBody Usuario usuario){
        return repository.save(usuario);
    }

    @PutMapping("/{id}")
    public  Usuario atualizar(
            @PathVariable Long id,
            @RequestBody Usuario usuario){
        usuario.setId(id);
        return repository.save(usuario);
    }
    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id){
        repository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Usuario buscarPorId(@PathVariable Long id){
        return repository.findById(id).orElse(null);
    }
}
