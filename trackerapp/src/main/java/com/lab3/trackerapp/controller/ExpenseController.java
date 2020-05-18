package com.lab3.trackerapp.controller;

import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;
import javax.validation.Valid;
import javax.validation.constraints.PositiveOrZero;

import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.pdf.PdfWriter;

import com.lab3.trackerapp.model.Expense;
import com.lab3.trackerapp.repo.ExpenseRepo;
import com.lab3.trackerapp.exception.ExpenseNotFoundException;

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

    @GetMapping("/Expenses/{id}")
    public Expense getExpenseById(@PathVariable(value = "id")
                            @PositiveOrZero(message = "Id must be greater or equal to 0") Long id) {
        Optional<Expense> existingExpense = ExpenseRepo.findById(id);

        if (existingExpense.isPresent()) {
            return existingExpense.get();
        } else {
            throw new ExpenseNotFoundException("Expense not found with id " + id);
        }
    }

    @PostMapping("/Expenses")
    public Expense newExpense(@Valid @RequestBody Expense newExpense) {
        return ExpenseRepo.save(newExpense);
    }

    @PutMapping("/Expenses")
    public Expense updateExpense(@Valid @RequestBody Expense updatedExpense) {
        Optional<Expense> existingExpense = ExpenseRepo.findById(updatedExpense.getId());

        if (existingExpense.isPresent()) {
            return ExpenseRepo.save(updatedExpense);
        } else {
            throw new ExpenseNotFoundException("Expense not found with id " + updatedExpense.getId());
        }
    }

    @DeleteMapping("/Expenses/{id}")
    public void deleteExpense(@PathVariable(value = "id")
                           @PositiveOrZero(message = "Id must be greater or equal to 0") Long id) {
        Optional<Expense> existingExpense = ExpenseRepo.findById(id);

        if (existingExpense.isPresent()) {
            ExpenseRepo.deleteById(id);
        } else {
            throw new ExpenseNotFoundException("Expense not found with id " + id);
        }
    }



    @GetMapping(value = "/Expenses/pdf/{id}", produces = MediaType.APPLICATION_PDF_VALUE)
    public @ResponseBody byte[] getExpensePDFById(@PathVariable(value = "id")
                                               @PositiveOrZero(message = "Id must be greater or equal to 0") Long id) throws DocumentException {
        Optional<Expense> existingExpense = ExpenseRepo.findById(id);

        if (existingExpense.isPresent()) {
            Expense Expense = existingExpense.get();

            Document document = new Document();
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            PdfWriter.getInstance(document, byteArrayOutputStream);

            document.open();
            Font font = FontFactory.getFont(FontFactory.COURIER, 16, BaseColor.BLUE);
            Chunk chunk = new Chunk(Expense.getId(), font);

            document.add(chunk);
            document.close();

            return byteArrayOutputStream.toByteArray();
        } else {
            throw new ExpenseNotFoundException("Expense not found with id " + id);
        }
    }
}
