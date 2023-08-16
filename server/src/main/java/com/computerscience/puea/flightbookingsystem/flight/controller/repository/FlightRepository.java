package com.computerscience.puea.flightbookingsystem.flight.controller.repository;

import com.computerscience.puea.flightbookingsystem.flight.controller.model.Flight;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FlightRepository extends MongoRepository<Flight,String> {
    List<Flight> findBySeats(int seats);
    List<Flight> findByDistance(int distance);

}
