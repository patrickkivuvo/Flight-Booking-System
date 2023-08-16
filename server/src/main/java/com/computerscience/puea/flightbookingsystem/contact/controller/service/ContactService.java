package com.computerscience.puea.flightbookingsystem.contact.controller.service;

import com.computerscience.puea.flightbookingsystem.contact.controller.model.Contact;
import com.computerscience.puea.flightbookingsystem.contact.controller.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {


    @Autowired
    private ContactRepository repository;

    //CRUD CREATE, READ, UPDATE, DELETE


    public Contact updateContact(Contact contactRequest){

        Contact existingContact = repository.findById(contactRequest.getContactId()).get();
        existingContact.setFirstname(contactRequest.getFirstname());
        existingContact.setLastname(contactRequest.getLastname());
        existingContact.setPhone(contactRequest.getPhone());
        existingContact.setEmail(contactRequest.getEmail());
        existingContact.setAddress(contactRequest.getAddress());
        existingContact.setCountry(contactRequest.getCountry());
        existingContact.setCity(contactRequest.getCity());
        return repository.save(existingContact);
    }
    public String deleteContact(String contactId){
        repository.deleteById(contactId);
        return contactId +  " contact deleted from dashboard successfully!!";
    }


    public Contact deleteById(String id) {

        return null;
    }

}
