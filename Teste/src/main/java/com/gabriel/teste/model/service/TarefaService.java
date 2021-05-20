package com.gabriel.teste.model.service;

import com.gabriel.teste.model.dao.TarefaRepository;
import com.gabriel.teste.model.entity.TarefaEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class TarefaService {

    @Autowired
    protected TarefaRepository repository;

    @Transactional(readOnly = false)
    public void save(TarefaEntity entity) throws Exception {
        repository.save(entity);
    }

    @Transactional(readOnly = false)
    public void update(TarefaEntity entity) throws Exception {
        repository.update(entity);
    }

    @Transactional(readOnly = false)
    public void remove(Long id) throws Exception {
        repository.delete(id);
    }

    public TarefaEntity findById(Long id) {
        return repository.findById(id);
    }

    public List<TarefaEntity> findAllLocal(){
        return repository.findAll();
    }
}
