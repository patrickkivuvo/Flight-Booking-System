package com.computerscience.puea.flightbookingsystem.contact.controller.repository;

import com.computerscience.puea.flightbookingsystem.contact.controller.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository <Contact, String> {
}
