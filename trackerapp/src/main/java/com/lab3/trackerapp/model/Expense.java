package com.lab3.trackerapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.io.Serializable;

import javax.annotation.Resource;
import javax.persistence.*;


@Entity
@Table(name = Expense.tableName)
public class Expense implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final String tableName = "expenses";
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "day")
    private Integer day;

    @Column(name = "month")
    private Integer month;

    @Column(name = "year")
    private Integer year;

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

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn (name="user_id", nullable=false)
    @JsonBackReference
    private User user;

    public Expense(long id, Integer day, Integer month, Integer year, Float amount, String method, String towhom, String needwant, String notes, User user) {
        this.id = id;
        this.day = day;
        this.month = month;
        this.year = year;
        this.amount = amount;
        this.method = method;
        this.towhom = towhom;
        this.needwant = needwant;
        this.notes = notes;
        this.user = user;
    }

    public Expense(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
