package com.gabriel.teste.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.gabriel.teste.model.base.BaseDAO;
import com.gabriel.teste.model.entity.UsuarioEntity;

public class UsuarioRepository extends BaseDAO<UsuarioEntity, Long>{
	
	@PersistenceContext
    private EntityManager manager;
    
    @SuppressWarnings("unchecked")
    public UsuarioEntity findByLogin(String email, String senha) {       
        TypedQuery<UsuarioEntity> query = manager.createQuery("SELECT u FROM UsuarioEntity u "
                + "WHERE u.email = :email AND u.senha = :senha", UsuarioEntity.class);
        query.setParameter("email", email);
        query.setParameter("senha", senha);

        return query.getSingleResult();
    }
}
