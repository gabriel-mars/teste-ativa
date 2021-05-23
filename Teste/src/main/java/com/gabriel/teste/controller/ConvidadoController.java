/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gabriel.teste.controller;

import com.gabriel.teste.model.entity.ConvidadoEntity;
import com.gabriel.teste.model.entity.UsuarioEntity;
import com.gabriel.teste.model.service.ConvidadoService;
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
public class ConvidadoController {
    
    @Autowired
    protected ConvidadoService service;
    
    @Autowired
    protected UsuarioService usuarioService;
    
    @PostMapping("/convidado")
    public ResponseEntity<?> saveConvidado(@RequestParam("token") String token, @RequestBody ConvidadoEntity convidado){
        if(!token.isBlank() || !token.isEmpty()){
            try {
                UsuarioEntity usuario = usuarioService.findByToken(token);
            
                if(usuario != null){
                    service.save(convidado);
                    return ResponseEntity.status(HttpStatus.ACCEPTED).body(convidado);
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
    
    @GetMapping("/convidado")
    public ResponseEntity<?> getAllConvidados(@RequestParam("token") String token){
        
        if(!token.isBlank() || !token.isEmpty()){
            try {
                UsuarioEntity usuario = usuarioService.findByToken(token);
            
                if(usuario != null){
                    List<ConvidadoEntity> convidados = service.findAllConvidado();
                    return ResponseEntity.status(HttpStatus.ACCEPTED).body(convidados);
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
    
    @DeleteMapping("/convidado/{id}")
    public ResponseEntity<?> deleteConvidadoById(@RequestParam("token") String token, @PathVariable Long id) {
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

    @PutMapping("/convidado")
    public ResponseEntity<?> updateConvidado(@RequestParam("token") String token, @RequestBody ConvidadoEntity convidado) {
        if(!token.isBlank() || !token.isEmpty()){
            try {
                UsuarioEntity user = usuarioService.findByToken(token);
                if(user != null){
                    service.update(convidado);
                    return ResponseEntity.status(HttpStatus.ACCEPTED).body(convidado);
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
