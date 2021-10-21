package com.empoulin.exam.controller;



import com.empoulin.exam.model.Dummy;
import com.empoulin.exam.service.DummyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/dummy")
public class DummyController {

    private final DummyService dummyService;

    public DummyController(DummyService dummyService) {
        this.dummyService = dummyService;
    }

    @PostMapping
    public Dummy createDummy(@RequestBody Dummy dummy) {
        return dummyService.createDummy(dummy);
    }

    @GetMapping()
    public List<Dummy> getAllDummies() {
        return dummyService.getAllDummies();
    }

    @GetMapping("/{id}")
    public Dummy findDummyById(@PathVariable("id") long id) {
        return dummyService.findById(id);
    }

    @PutMapping()
    public Dummy updateDummy(@RequestBody Dummy dummy) {
        return dummyService.updateDummy(dummy);
    }

    @DeleteMapping("/{id}")
    public void deleteDummyById(@PathVariable("id") long id) {
        dummyService.deleteDummyById(id);
    }

}
