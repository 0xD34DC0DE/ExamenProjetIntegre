package com.empoulin.exam.controller;

import com.empoulin.exam.model.Attempt;
import com.empoulin.exam.service.AttemptService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/attempt")
public class AttemptController {

    private final AttemptService attemptService;

    public AttemptController(AttemptService attemptService) {
        this.attemptService = attemptService;
    }

    @GetMapping()
    public List<Attempt> getAllAttempts() {
        return attemptService.getAllAttempts();
    }

    @PostMapping()
    public Attempt createAttempt(@RequestBody Attempt attempt) {
        return attemptService.createAttemptWithRandomNumber(attempt);
    }

}
