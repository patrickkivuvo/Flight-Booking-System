package com.computerscience.puea.flightbookingsystem.flight.controller;

import com.computerscience.puea.flightbookingsystem.flight.controller.model.Flight;
import com.computerscience.puea.flightbookingsystem.flight.controller.repository.FlightRepository;
import com.computerscience.puea.flightbookingsystem.flight.controller.repository.SearchRepository;
import com.computerscience.puea.flightbookingsystem.flight.controller.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping( value = "/flights")
public class FlightController {


    @Autowired
    FlightRepository repo;
    @Autowired
    SearchRepository srepo;

    @Autowired
    private FlightService service;
    @GetMapping
    public List<Flight> getAllFlights(){
        return repo.findAll();
    }
    @GetMapping("/flights/{text}")
    public List<Flight> Search(@PathVariable String text){
        return srepo.findByText(text);
    }

   @PostMapping("/data")
    public Flight addFlight(@RequestBody Flight flight) {
       return repo.save(flight);
   }

    @PutMapping
    public Flight modifyFlight(@RequestBody Flight flight){
        return service.updateFlight(flight);
    }
    @DeleteMapping("/{flightId}")
    public String deleteFlight(@PathVariable String flightId){
        return service.deleteFlight(flightId);
    }

    @GetMapping("/{flightId}")
    public Flight getFlight(@PathVariable String flightId){
        return service.getFlightByFlightId(flightId);
    }

    @GetMapping("/seats/{seats}")
    public List<Flight> findFlightUsingSeats(@PathVariable int seats){
        return service.getFlightBySeats(seats);
    }

    @GetMapping("/distance/{distance}")
    public List<Flight> findFlightUsingDistance(@PathVariable int distance){
        return service.getFlightByDistance(distance);
    }

}
