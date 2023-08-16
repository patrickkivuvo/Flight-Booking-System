package com.computerscience.puea.flightbookingsystem.payment2.controller;

import com.computerscience.puea.flightbookingsystem.payment2.controller.model.Mpesa;
import com.computerscience.puea.flightbookingsystem.payment2.controller.repository.MpesaRepository;
import com.computerscience.puea.flightbookingsystem.payment2.controller.service.MpesaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping( value = "/mpesa")
public class MpesaController {


    @Autowired
    MpesaRepository repo;

    @Autowired
    private MpesaService service;
    @GetMapping
    public List<Mpesa> getAllContacts(){
        return repo.findAll();
    }


    @PostMapping("/data")
    public Mpesa addMpesa(@RequestBody Mpesa mpesa) {
        return repo.save(mpesa);
    }

    @PutMapping
    public Mpesa modifyMpesa(@RequestBody Mpesa mpesa){
        return service.updateMpesa(mpesa);
    }
    @DeleteMapping("/{mpesaId}")
    public String deleteMpesa(@PathVariable String mpesaId){
        return service.deleteMpesa(mpesaId);
    }



}
