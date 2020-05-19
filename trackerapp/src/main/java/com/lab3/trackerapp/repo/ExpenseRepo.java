package com.lab3.trackerapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lab3.trackerapp.model.Expense;


@Repository
public interface ExpenseRepo extends JpaRepository<Expense, Long> {

}
