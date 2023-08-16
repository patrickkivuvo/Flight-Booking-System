package com.computerscience.puea.flightbookingsystem.passenger.controller.repository;

import com.computerscience.puea.flightbookingsystem.passenger.controller.model.Passenger;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PassengerRepository extends MongoRepository <Passenger, String> {
}
