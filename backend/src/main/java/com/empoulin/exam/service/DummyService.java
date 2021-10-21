package com.empoulin.exam.service;


import com.empoulin.exam.model.Dummy;
import com.empoulin.exam.repository.DummyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DummyService {

    private final DummyRepository dummyRepository;

    public DummyService(DummyRepository dummyRepository) {
        this.dummyRepository = dummyRepository;
    }

    public Dummy createDummy(Dummy dummy) {
        return dummyRepository.save(dummy);
    }

    public Dummy findById(long id) {
        return dummyRepository.findById(id).orElse(null);
    }

    public List<Dummy> getAllDummies() {
        return dummyRepository.findAll();
    }

    public void deleteDummyById(long id) {
        dummyRepository.deleteById(id);
    }

    public Dummy updateDummy(Dummy dummy) {
        return dummyRepository.save(dummy);
    }

}
