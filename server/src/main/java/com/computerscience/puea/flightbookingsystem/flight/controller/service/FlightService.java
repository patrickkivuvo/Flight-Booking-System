package com.computerscience.puea.flightbookingsystem.flight.controller.service;

import com.computerscience.puea.flightbookingsystem.flight.controller.model.Flight;
import com.computerscience.puea.flightbookingsystem.flight.controller.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository repository;

    //CRUD CREATE, READ, UPDATE, DELETE


    public Flight getFlightByFlightId(String flightId){
        return repository.findById(flightId).get();
    }

    public List<Flight> getFlightByDistance(int distance){
        return repository.findByDistance(distance);
    }

    public List<Flight> getFlightBySeats(int seats){
        return repository.findBySeats(seats);
    }

    public Flight updateFlight(Flight flightRequest){
       
        Flight existingFlight = repository.findById(flightRequest.getFlightId()).get();
        existingFlight.setModel(flightRequest.getModel());
        existingFlight.setName(flightRequest.getName());
        existingFlight.setSource(flightRequest.getSource());
        existingFlight.setDestination(flightRequest.getDestination());
        existingFlight.setDistance(flightRequest.getDistance());
        existingFlight.setDays(flightRequest.getDays());
        existingFlight.setPrice(flightRequest.getPrice());
        existingFlight.setDeparture(flightRequest.getDeparture());
        existingFlight.setDuration(flightRequest.getDuration());
        existingFlight.setArrival(flightRequest.getArrival());
        existingFlight.setSeats(flightRequest.getSeats());
        return repository.save(existingFlight);
    }
    public String deleteFlight(String flightId){
        repository.deleteById(flightId);
        return flightId +  " flight deleted from dashboard successfully!!";
    }


    public Flight deleteById(String id) {

        return null;
    }

}
