package com.gabriel.teste.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gabriel.teste.model.dao.UsuarioRepository;
import com.gabriel.teste.model.entity.UsuarioEntity;
import com.gabriel.teste.model.utils.SecurityGeneric;

@Service
@Transactional(readOnly = true)
public class UsuarioService {
	
    @Autowired
    protected UsuarioRepository repository;

    public UsuarioEntity findByLogin(String email, String senha) {
        senha = SecurityGeneric.getSecurePassword(senha);
        return repository.findByLogin(email, senha);
    }
    
    public UsuarioEntity findByToken(String token) { return repository.findByToken(token); }
}
