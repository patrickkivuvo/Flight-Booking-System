package com.computerscience.puea.flightbookingsystem.contact.controller.repository;

import com.computerscience.puea.flightbookingsystem.contact.controller.model.Contact;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Autowired;

import org.bson.Document;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchRepositoryImplContact implements SearchRepositoryContact {



    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;
    @Override
    public List<Contact> findByText(String text) {
        final List<Contact> contacts = new ArrayList<>();

        MongoDatabase database = client.getDatabase("puea");
        MongoCollection<Document> collection = database.getCollection("contact");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                new Document("text",
                        new Document("query", text)
                                .append("path", Arrays.asList("firstname", "lastname", "phone", "email", "address", "country", "city"))))));

        result.forEach(doc -> contacts.add(converter.read(Contact.class, doc)));


        return contacts;
    }
}
