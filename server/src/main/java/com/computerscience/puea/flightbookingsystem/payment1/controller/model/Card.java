package com.computerscience.puea.flightbookingsystem.payment1.controller.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection =  "card")
public class Card {


    @Id
    private String cardId;
    private String debitCard;
    private String expiryDate;

    private String cardHolderName;

    private int amount;



    public String getCardId() {
        return cardId;
    }

    public void setCardId(String cardId) {
        this.cardId = cardId;
    }

    public String getDebitCard() {
        return debitCard;
    }

    public void setDebitCard(String debitCard) {
        this.debitCard = debitCard;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getCardHolderName() {
        return cardHolderName;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }


    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Card{" +
                "cardId='" + cardId + '\'' +
                ", debitCard='" + debitCard + '\'' +
                ", expiryDate='" + expiryDate + '\'' +
                ", cardHolderName='" + cardHolderName + '\'' +
                ", amount=" + amount +
                '}';
    }
}
