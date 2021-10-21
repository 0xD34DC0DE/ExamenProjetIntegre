package com.empoulin.exam;


import com.empoulin.exam.model.Dummy;
import com.empoulin.exam.repository.DummyRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class InserterRunner implements ApplicationRunner {

    private final DummyRepository dummyRepository;

    public InserterRunner(DummyRepository dummyRepository) {
        this.dummyRepository = dummyRepository;
    }

    @Override
    public void run(ApplicationArguments args) {
        dummyRepository.save(Dummy.builder()
                .name("First item")
                .description("A beautiful item")
                .count(42)
                .build());

        dummyRepository.save(Dummy.builder()
                .name("Second item")
                .description("An ugly item")
                .count(69)
                .build());
    }
}
