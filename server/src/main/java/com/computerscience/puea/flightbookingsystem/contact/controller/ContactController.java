package com.computerscience.puea.flightbookingsystem.contact.controller;

import com.computerscience.puea.flightbookingsystem.contact.controller.model.Contact;
import com.computerscience.puea.flightbookingsystem.contact.controller.repository.ContactRepository;
import com.computerscience.puea.flightbookingsystem.contact.controller.repository.SearchRepositoryContact;
import com.computerscience.puea.flightbookingsystem.contact.controller.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping( value = "/contacts")
public class ContactController {


    @Autowired
    ContactRepository crepo;
    @Autowired
    SearchRepositoryContact srepo;

    @Autowired
    private ContactService service;
    @GetMapping
    public List<Contact> getAllContacts(){
        return crepo.findAll();
    }
    @GetMapping("/contacts/{text}")
    public List<Contact> searchContact(@PathVariable String text){
      return srepo.findByText(text);
    }

    @PostMapping("/data")
    public Contact addContact(@RequestBody Contact contact) {
        return crepo.save(contact);
    }

    @PutMapping
    public Contact modifyContact(@RequestBody Contact contact){
        return service.updateContact(contact);
    }
    @DeleteMapping("/{contactId}")
    public String deleteContact(@PathVariable String contactId){
        return service.deleteContact(contactId);
    }


}
