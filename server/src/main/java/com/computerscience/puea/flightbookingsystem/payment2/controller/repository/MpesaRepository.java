package com.computerscience.puea.flightbookingsystem.payment2.controller.repository;

import com.computerscience.puea.flightbookingsystem.payment2.controller.model.Mpesa;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MpesaRepository extends MongoRepository <Mpesa, String> {
}
