package com.gabriel.teste.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.teste.model.entity.UsuarioEntity;
import com.gabriel.teste.model.service.UsuarioService;

@CrossOrigin
@RestController
public class UsuarioController {
	
    @Autowired
    protected UsuarioService service;

    @PostMapping("/user/login")
    public ResponseEntity<?> loginUser(@RequestBody UsuarioEntity usuario){
        try {
            usuario = service.findByLogin(usuario.getEmail(), usuario.getSenha());
            return ResponseEntity.status(HttpStatus.ACCEPTED).body(usuario);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário e/ou senha incorretos.");
        }
    }
}
