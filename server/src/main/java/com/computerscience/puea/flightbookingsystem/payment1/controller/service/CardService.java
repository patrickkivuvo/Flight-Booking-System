package com.computerscience.puea.flightbookingsystem.payment1.controller.service;

import com.computerscience.puea.flightbookingsystem.payment1.controller.model.Card;
import com.computerscience.puea.flightbookingsystem.payment1.controller.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardService {


    @Autowired
    private CardRepository repository;

    //CRUD CREATE, READ, UPDATE, DELETE


    public Card updateCard(Card contactRequest){

        Card existingContact = repository.findById(contactRequest.getCardId()).get();
        existingContact.setDebitCard(contactRequest.getDebitCard());
        existingContact.setExpiryDate(contactRequest.getExpiryDate());
        existingContact.setCardHolderName(contactRequest.getCardHolderName());
        existingContact.setAmount(contactRequest.getAmount());
        return repository.save(existingContact);
    }
    public String deleteCard(String cardId){
        repository.deleteById(cardId);
        return cardId +  " card deleted from dashboard successfully!!";
    }


    public Card deleteById(String id) {

        return null;
    }

}
