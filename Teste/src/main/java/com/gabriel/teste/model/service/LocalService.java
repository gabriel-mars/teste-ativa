package com.gabriel.teste.model.service;

import com.gabriel.teste.model.dao.LocalRepository;
import com.gabriel.teste.model.entity.LocalEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class LocalService {
    @Autowired
    protected LocalRepository repository;

    @Transactional(readOnly = false)
    public void save(LocalEntity entity) throws Exception {
        repository.save(entity);
    }

    @Transactional(readOnly = false)
    public void update(LocalEntity entity) throws Exception {
        repository.update(entity);
    }

    @Transactional(readOnly = false)
    public void remove(Long id) throws Exception {
        repository.delete(id);
    }

    public LocalEntity findById(Long id) {
        return repository.findById(id);
    }

    public List<LocalEntity> findAllLocal(){
        return repository.findAll();
    }
}
