package com.computerscience.puea.flightbookingsystem.payment2.controller.service;


import com.computerscience.puea.flightbookingsystem.payment2.controller.model.Mpesa;
import com.computerscience.puea.flightbookingsystem.payment2.controller.repository.MpesaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MpesaService {


    @Autowired
    private MpesaRepository repository;

    //CRUD CREATE, READ, UPDATE, DELETE


    public Mpesa updateMpesa(Mpesa contactRequest){

        Mpesa existingContact = repository.findById(contactRequest.getMpesaId()).get();
        existingContact.setPhone(contactRequest.getPhone());
        existingContact.setAmount(contactRequest.getAmount());
        return repository.save(existingContact);
    }
    public String deleteMpesa(String mpesaId){
        repository.deleteById(mpesaId);
        return mpesaId +  " mpesa deleted from dashboard successfully!!";
    }


    public Mpesa deleteById(String id) {

        return null;
    }
}
