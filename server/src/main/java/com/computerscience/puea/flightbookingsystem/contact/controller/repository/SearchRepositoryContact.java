package com.computerscience.puea.flightbookingsystem.contact.controller.repository;

import com.computerscience.puea.flightbookingsystem.contact.controller.model.Contact;

import java.util.List;

public interface SearchRepositoryContact {

    List<Contact> findByText(String text);
}
