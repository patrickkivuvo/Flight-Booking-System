package com.computerscience.puea.flightbookingsystem.payment2.controller.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection =  "mpesa")
public class Mpesa {


    @Id
    private String mpesaId;
    private int phone;
    private int amount;

    public String getMpesaId() {
        return mpesaId;
    }

    public void setMpesaId(String mpesaId) {
        this.mpesaId = mpesaId;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Mpesa{" +
                "mpesaId='" + mpesaId + '\'' +
                ", phone='" + phone + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }
}
