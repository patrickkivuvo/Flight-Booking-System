package com.computerscience.puea.flightbookingsystem.passenger.controller.service;

import com.computerscience.puea.flightbookingsystem.passenger.controller.model.Passenger;
import com.computerscience.puea.flightbookingsystem.passenger.controller.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PassengerService {


    @Autowired
    private PassengerRepository repository;

    //CRUD CREATE, READ, UPDATE, DELETE


    public Passenger updatePassenger(Passenger contactRequest){

        Passenger existingContact = repository.findById(contactRequest.getPassengerId()).get();
        existingContact.setFirstname(contactRequest.getFirstname());
        existingContact.setMiddlename(contactRequest.getMiddlename());
        existingContact.setLastname(contactRequest.getLastname());
        existingContact.setDateofbirth(contactRequest.getDateofbirth());
        existingContact.setDocumentType(contactRequest.getDocumentType());
        existingContact.setDocumentNumber(contactRequest.getDocumentNumber());
        existingContact.setFrequentFlyerNumber(contactRequest.getFrequentFlyerNumber());
        return repository.save(existingContact);
    }
    public String deletePassenger(String passengerId){
        repository.deleteById(passengerId);
        return passengerId +  " contact deleted from dashboard successfully!!";
    }


    public Passenger deleteById(String id) {

        return null;
    }

}
