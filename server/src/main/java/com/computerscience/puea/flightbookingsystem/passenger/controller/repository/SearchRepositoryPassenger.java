package com.computerscience.puea.flightbookingsystem.passenger.controller.repository;

import com.computerscience.puea.flightbookingsystem.passenger.controller.model.Passenger;

import java.util.List;

public interface SearchRepositoryPassenger {
    List<Passenger> findByText(String text);
}
