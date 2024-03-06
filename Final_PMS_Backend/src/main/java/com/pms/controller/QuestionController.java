package com.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.entity.Question;
import com.pms.repository.QuizRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/questions")
public class QuestionController {
	
	@Autowired
    private QuizRepository quizRepository;

    @GetMapping
    public List<Question> getAllQuestions() {
        return quizRepository.findAll();
    }

    @PostMapping
    public Question createQuestion(@RequestBody Question question) {
        return quizRepository.save(question);
    }

}