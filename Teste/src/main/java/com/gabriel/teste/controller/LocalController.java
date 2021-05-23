/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gabriel.teste.controller;

import com.gabriel.teste.model.entity.LocalEntity;
import com.gabriel.teste.model.entity.UsuarioEntity;
import com.gabriel.teste.model.service.LocalService;
import com.gabriel.teste.model.service.UsuarioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author gabrielmartins
 */
@CrossOrigin
@RestController
public class LocalController {
    
    @Autowired
    protected LocalService service;
    
    @Autowired
    protected UsuarioService usuarioService;
    
    @PostMapping("/local")
    public ResponseEntity<?> saveConvidado(@RequestParam("token") String token, @RequestBody LocalEntity local){
        if(!token.isBlank() || !token.isEmpty()){
            try {
                UsuarioEntity usuario = usuarioService.findByToken(token);
            
                if(usuario != null){
                    service.save(local);
                    return ResponseEntity.status(HttpStatus.ACCEPTED).body(local);
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
                }
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possível cadastrar.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
        }
    }
    
    @GetMapping("/local")
    public ResponseEntity<?> getAllConvidados(@RequestParam("token") String token){
        
        if(!token.isBlank() || !token.isEmpty()){
            try {
                UsuarioEntity usuario = usuarioService.findByToken(token);
            
                if(usuario != null){
                    List<LocalEntity> locais = service.findAllLocal();
                    return ResponseEntity.status(HttpStatus.ACCEPTED).body(locais);
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
                }
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possível obter os convidados.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
        }
    }
    
    @DeleteMapping("/local/{id}")
    public ResponseEntity<?> deleteLocalById(@RequestParam("token") String token, @PathVariable Long id) {
        if(!token.isBlank() || !token.isEmpty()){
            try {
                UsuarioEntity user = usuarioService.findByToken(token);
                if(user != null){
                    service.remove(id);
                    return ResponseEntity.status(HttpStatus.ACCEPTED).body(Boolean.TRUE);
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
                }
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Necessário enviar um identificador válido.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
        }
    }

    @PutMapping("/local")
    public ResponseEntity<?> updateLocal(@RequestParam("token") String token, @RequestBody LocalEntity local) {
        if(!token.isBlank() || !token.isEmpty()){
            try {
                UsuarioEntity user = usuarioService.findByToken(token);
                if(user != null){
                    service.update(local);
                    return ResponseEntity.status(HttpStatus.ACCEPTED).body(local);
                } else {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
                }
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Requisição inválida.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Necessário autenticação.");
        }
    }
}
