package com.pms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.entity.Question;

public interface QuizRepository extends JpaRepository<Question, Long> {

}
