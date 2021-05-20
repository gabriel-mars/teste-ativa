package com.gabriel.teste.model.service;

import com.gabriel.teste.model.dao.ConvidadoRepository;
import com.gabriel.teste.model.entity.ConvidadoEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class ConvidadoService {

    @Autowired
    protected ConvidadoRepository repository;

    @Transactional(readOnly = false)
    public void save(ConvidadoEntity entity) throws Exception {
        repository.save(entity);
    }

    @Transactional(readOnly = false)
    public void update(ConvidadoEntity entity) throws Exception {
        repository.update(entity);
    }

    @Transactional(readOnly = false)
    public void remove(Long id) throws Exception {
        repository.delete(id);
    }

    public ConvidadoEntity findById(Long id) {
        return repository.findById(id);
    }

    public List<ConvidadoEntity> findAllConvidado(){
        return repository.findAll();
    }
}
