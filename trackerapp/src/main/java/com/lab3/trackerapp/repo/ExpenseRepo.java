package com.lab3.trackerapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.lab3.trackerapp.model.Expense;


@Repository
public interface ExpenseRepo extends JpaRepository<Expense, Long> {
    List<Expense> findByMonthAndYear(int month, int year);
    List<Expense> findByYear(int year);
}
