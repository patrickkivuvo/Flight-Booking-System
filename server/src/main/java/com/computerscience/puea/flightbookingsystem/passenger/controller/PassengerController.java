package com.computerscience.puea.flightbookingsystem.passenger.controller;

import com.computerscience.puea.flightbookingsystem.passenger.controller.model.Passenger;
import com.computerscience.puea.flightbookingsystem.passenger.controller.repository.PassengerRepository;
import com.computerscience.puea.flightbookingsystem.passenger.controller.repository.SearchRepositoryPassenger;
import com.computerscience.puea.flightbookingsystem.passenger.controller.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping( value = "/passengers")
public class PassengerController {


    @Autowired
    PassengerRepository repo;
    @Autowired
    SearchRepositoryPassenger srepo;

    @Autowired
    private PassengerService service;
    @GetMapping
    public List<Passenger> getAllContacts(){
        return repo.findAll();
    }
     @GetMapping("passengers/{text}")
    public List<Passenger> Search(@PathVariable String text){
        return srepo.findByText(text);
    }

    @PostMapping("/data")
    public Passenger addContact(@RequestBody Passenger passenger) {
        return repo.save(passenger);
    }

    @PutMapping
    public Passenger modifyContact(@RequestBody Passenger passenger){
        return service.updatePassenger(passenger);
    }
    @DeleteMapping("/{passengerId}")
    public String deleteContact(@PathVariable String passengerId){
        return service.deletePassenger(passengerId);
    }

}
