package com.lab3.trackerapp.controller;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;
import javax.validation.Valid;
import javax.validation.constraints.PositiveOrZero;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.lab3.trackerapp.model.Expense;
import com.lab3.trackerapp.repo.ExpenseRepo;
import com.lab3.trackerapp.exception.ExpenseNotFoundException;
import com.lab3.trackerapp.pdf.GeneratePdfReport;

@CrossOrigin (origins = "http://localhost:8081")
@RestController
@Validated
public class ExpenseController {
    @Resource
    private ExpenseRepo expenseRepo;

    @GetMapping("/expenses")
    public List<Expense> getExpenses() {
        List<Expense> expenses = expenseRepo.findAll();
        return expenses;
    }

    @GetMapping("/expenses/{id}")
    public Expense getExpenseById(@PathVariable(value = "id")
                            @PositiveOrZero(message = "Id must be greater or equal to 0") Long id) {
        Optional<Expense> existingExpense = expenseRepo.findById(id);

        if (existingExpense.isPresent()) {
            return existingExpense.get();
        } else {
            throw new ExpenseNotFoundException("Expense not found with id " + id);
        }
    }

    @PostMapping("/expenses/create")
    public Expense newExpense(@Valid @RequestBody Expense newExpense) {
        return expenseRepo.save(newExpense);
    }

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
    }

    @DeleteMapping("/expenses/{id}")
    public void deleteExpense(@PathVariable(value = "id")
                           @PositiveOrZero(message = "Id must be greater or equal to 0") Long id) {
        Optional<Expense> existingExpense = expenseRepo.findById(id);

        if (existingExpense.isPresent()) {
            expenseRepo.deleteById(id);
        } else {
            throw new ExpenseNotFoundException("Expense not found with id " + id);
        }
    }

    @RequestMapping(value = "/pdf", method= RequestMethod.GET, produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> expenseReport() {
        var expenses = (List<Expense>) expenseRepo.findAll();
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
