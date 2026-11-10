package com.senai.apiusuarios.repository;

import com.senai.apiusuarios.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> { //Traz os metodos do JPA

}
