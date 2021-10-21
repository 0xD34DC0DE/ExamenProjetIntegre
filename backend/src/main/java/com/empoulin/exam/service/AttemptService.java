package com.empoulin.exam.service;

import com.empoulin.exam.model.Attempt;
import com.empoulin.exam.repository.AttemptRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class AttemptService {

    private final AttemptRepository attemptRepository;

    private final Random random;

    public AttemptService(AttemptRepository attemptRepository) {
        this.attemptRepository = attemptRepository;
        this.random = new Random();
    }

    public List<Attempt> getAllAttempts() {
        return attemptRepository.findAll();
    }

    public Attempt createAttemptWithRandomNumber(Attempt attempt) {
        int randomBetween1And6 = random.nextInt(6 - 1 + 1) + 1;
        attempt.setRandomNumber(randomBetween1And6);

        return  attemptRepository.save(attempt);
    }
}
