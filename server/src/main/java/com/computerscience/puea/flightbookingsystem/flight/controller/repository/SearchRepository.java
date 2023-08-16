package com.computerscience.puea.flightbookingsystem.flight.controller.repository;

import com.computerscience.puea.flightbookingsystem.flight.controller.model.Flight;

import java.util.List;


public interface SearchRepository {
    List<Flight> findByText(String text);
}
