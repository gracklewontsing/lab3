package com.lab3.trackerapp.services;

import java.util.List;

import com.lab3.trackerapp.model.Expense;

public interface ExpenseService {
    List<Expense> findAll();
    List<Expense> findByMonthAndYear(int month, int year);
    void saveOrUpdateExpense(Expense expense);
    void deleteExpense(long id);

    List<Expense> findByYear(int year);
}

