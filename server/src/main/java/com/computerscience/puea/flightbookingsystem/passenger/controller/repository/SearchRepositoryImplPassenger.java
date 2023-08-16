package com.computerscience.puea.flightbookingsystem.passenger.controller.repository;


import com.computerscience.puea.flightbookingsystem.passenger.controller.model.Passenger;
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
public class SearchRepositoryImplPassenger implements SearchRepositoryPassenger{



    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;

    @Override
    public List<Passenger> findByText(String text) {
        final List<Passenger> passengers = new ArrayList<>();

        MongoDatabase database = client.getDatabase("puea");
        MongoCollection<Document> collection = database.getCollection("passenger");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                new Document("text",
                        new Document("query", text)
                                .append("path", Arrays.asList("firstname", "middlename", "lastname", "dateofbirth", "documentType", "documentNumber", "frequentFlyerNumber"))))));


        result.forEach(doc -> passengers.add(converter.read(Passenger.class, doc)));

        return passengers;
    }
}
