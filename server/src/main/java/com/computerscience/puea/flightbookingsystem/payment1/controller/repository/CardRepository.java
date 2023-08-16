package com.computerscience.puea.flightbookingsystem.payment1.controller.repository;

import com.computerscience.puea.flightbookingsystem.payment1.controller.model.Card;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CardRepository extends MongoRepository <Card, String> {

}
