package com.lab3.trackerapp.controller;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.lab3.trackerapp.model.Expense;
import com.lab3.trackerapp.pdf.GeneratePdfReport;
import com.lab3.trackerapp.services.ExpenseService;

@RestController
@CrossOrigin (origins = "*")
@RequestMapping("/api/expense")
public class ExpenseController {
    @Autowired
    private ExpenseService expenseService;

    @GetMapping
    public ResponseEntity<?> getAll() {
        List<Expense> expenses = expenseService.findAll();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }

    @GetMapping("/{year}/{month}")
    public ResponseEntity<?> getByMonthYear(@PathVariable("year") int year, @PathVariable("month") int month) {
        List<Expense> result = new ArrayList<>();
        if("All".equals(month)) {
            result = expenseService.findByYear(year);
        } else {
            result = expenseService.findByMonthAndYear(month, year);
        }
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> addOrUpdateExpense(@RequestBody Expense expense) {
        expenseService.saveOrUpdateExpense(expense);
        return new ResponseEntity("Expense added successfully!", HttpStatus.OK);
    }


    @DeleteMapping
    public void deleteExpense(@RequestParam("id") long id) {
        expenseService.deleteExpense(id);
    }

    //send by email
    @CrossOrigin (origins ="http://localhost:3000/expenses",  maxAge = 3600)
    @RequestMapping(value = "{year}/{month}/pdf", produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> expenseReport(@PathVariable("year") int year, @PathVariable("month") int month) {
        var expenses = (List<Expense>) expenseService.findByMonthAndYear(month,year);
        ByteArrayInputStream byteArray = GeneratePdfReport.expenseReport(expenses);

        var headers = new HttpHeaders();
        headers.add("Content-Disposition","inline;filename=expensereport.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(byteArray));
    }
}
/*
    @PutMapping("/expenses/{id}")
    public Expense updateExpense(@Valid @PathVariable("id") Long id, @RequestBody Expense updatedExpense) {
        Optional<Expense> existingExpense = expenseRepo.findById(id);

        if (existingExpense.isPresent()) {
            Expense savedExp = existingExpense.get();
            savedExp.setDate(updatedExpense.getDate());
            savedExp.setAmount(updatedExpense.getAmount());
            savedExp.setMethod(updatedExpense.getMethod());
            savedExp.setTowhom(updatedExpense.getTowhom());
            savedExp.setNeedwant(updatedExpense.getNeedwant());
            savedExp.setNotes(updatedExpense.getNotes());

            Expense newExpense = expenseRepo.save(savedExp);
            return newExpense;
        } else {
            throw new ExpenseNotFoundException("Expense not found with id " + updatedExpense.getId());
        }
    }*/