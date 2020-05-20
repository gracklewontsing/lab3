package com.lab3.trackerapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.lab3.trackerapp.repo.ExpenseRepo;
import com.lab3.trackerapp.model.Expense;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    ExpenseRepo expenseRepo;

    @Override
    public List<Expense> findAll(){
        return expenseRepo.findAll();
    }

    @Override
    public List<Expense> findByMonthAndYear(int month, int year) {
        return expenseRepo.findByMonthAndYear(month, year);
    }

    @Override
    public void saveOrUpdateExpense(Expense expense) {
        expenseRepo.save(expense);
    }

    @Override
    public void deleteExpense(long id) {
        expenseRepo.deleteById(id);
    }

    @Override
    public List<Expense> findByYear(int year) {
        return expenseRepo.findByYear(year);
    }
}

