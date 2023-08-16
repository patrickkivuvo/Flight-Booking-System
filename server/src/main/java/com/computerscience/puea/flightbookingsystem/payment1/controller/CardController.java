package com.computerscience.puea.flightbookingsystem.payment1.controller;

import com.computerscience.puea.flightbookingsystem.flight.controller.repository.SearchRepository;
import com.computerscience.puea.flightbookingsystem.payment1.controller.model.Card;
import com.computerscience.puea.flightbookingsystem.payment1.controller.repository.CardRepository;
import com.computerscience.puea.flightbookingsystem.payment1.controller.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping( value = "/cards")
public class CardController {

    @Autowired
    CardRepository repo;
    @Autowired
    SearchRepository srepo;

    @Autowired
    private CardService service;
    @GetMapping
    public List<Card> getAllContacts(){
        return repo.findAll();
    }

    @PostMapping("/data")
    public Card addCard(@RequestBody Card card) {
        return repo.save(card);
    }

    @PutMapping
    public Card modifyCard(@RequestBody Card card){
        return service.updateCard(card);
    }
    @DeleteMapping("/{cardId}")
    public String deleteCard(@PathVariable String cardId){
        return service.deleteCard(cardId);
    }



}
