package com.lab3.trackerapp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "expense")
public class Expense implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @JsonFormat(pattern="dd-MM-yyyy")
    @Column(name = "date")
    private String date;

    @Column(name = "amount")
    private Float amount;

    @Column(name = "method")
    private String method;

    @Column(name = "towhom")
    private String towhom;

    @Column(name = "needwant")
    private String needwant;

    @Column(name = "notes")
    private String notes;

    public Expense(){}

    public Expense(long id, String date, Float amount, String method, String towhom, String needwant, String notes) {
        this.id = id;
        this.date = date;
        this.amount = amount;
        this.method = method;
        this.towhom = towhom;
        this.needwant = needwant;
        this.notes = notes;
    }

    @Override
    public String toString() {
        return "Expense[" +
                "id=" + id +
                ", date=" + date +
                ", amount=" + amount +
                ", method='" + method + '\'' +
                ", towhom='" + towhom + '\'' +
                ", needwant='" + needwant + '\'' +
                ", notes='" + notes + '\'' +
                ']';
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Float getAmount() {
        return amount;
    }

    public void setAmount(Float amount) {
        this.amount = amount;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getTowhom() {
        return towhom;
    }

    public void setTowhom(String towhom) {
        this.towhom = towhom;
    }

    public String getNeedwant() {
        return needwant;
    }

    public void setNeedwant(String needwant) {
        this.needwant = needwant;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
